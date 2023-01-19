# Docker buil and run examples:
# 	sudo docker build -f Dockerfile -t tjas/thiago-tjas.com .
# 	sudo docker run --rm -it --network=host --env-file .env --name thiago-tjas.com -d tjas/thiago-tjas.com
#   sudo docker exec -it thiago-tjas.com /bin/bash

# Pull official base image
ARG PYTHON_VERSION="3.10.6"
FROM python:${PYTHON_VERSION}-slim

# install psycopg2 and aditional dependencies
RUN apt-get update \
	&& apt-get install -y --no-install-recommends build-essential \
		# vim procps curl dnsutils iputils-ping iproute2 nmap\
        python3-dev gcc libpq-dev musl-dev \
	&& apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN python -m pip install --upgrade pip

# Set work directory
WORKDIR /usr/src/app

# Install project dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . .

# Exposes port
EXPOSE 80

# It's supposed that you did makemigrations, migrate
# and collectstatic before run Dockerfile:
#   python manage.py makemigrations
#   python manage.py migrate
#   python manage.py collectstatic

CMD gunicorn --bind 0.0.0.0:80 core.wsgi

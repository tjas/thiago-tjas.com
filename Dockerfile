# Docker buil and run examples:
# 	sudo docker build -f Dockerfile -t tjas/thiago.tjas.com .
# 	sudo docker run -p 80:8000 --name thiago.tjas.com --rm -d tjas/thiago.tjas.com

ARG PYTHON_VERSION="3.10.6"
FROM python:${PYTHON_VERSION}-slim

RUN apt-get update \
	&& apt-get install -y --no-install-recommends build-essential \
		vim procps curl dnsutils iputils-ping iproute2 nmap \
	&& apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ENV PYTHONUNBUFFERED 1

RUN python -m pip install --upgrade pip

WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

EXPOSE 8000

CMD python manage.py makemigrations \
    && python manage.py migrate \
    && python manage.py runserver 0.0.0.0:8000

# Deploying a Django Website on AWS Lightsail VPS
> Thiago Jorge Almeida dos Santos

> Last update: January 18th, 2023 11:58 PM.

> Article under construction.

## Production Deployment Tutorial

The website was deployed into an [**Amazon Web Service (AWS) Lightsail VPS**](https://aws.amazon.com/lightsail/), using an [**Amazon Linux 2**](https://aws.amazon.com/amazon-linux-2/) image from scratch, adopting some recomendations which are importants to be followed in production environments, mainly for security purposes. This deployment was hard coded for learning and saving purposes, otherwise you can adopt some paid ready-made solutions available in cloud providers (if money is not an issue or a solution with guaranteed expert support is very important to you). These articles were great references for me, read them and adapt for your case:

* Digital Ocean - [How To Set Up Django with Postgres, Nginx, and Gunicorn on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-20-04)
* Mozilla Developer Network (MDN) - [Django Tutorial Part 11: Deploying Django to production](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Deployment)
* Alura (Portuguese only) - [Fazendo o deploy de uma aplicação Django](https://www.alura.com.br/artigos/fazendo-o-deploy-de-uma-aplicacao-django)
* Glauco Custódio's Blog (Portuguese only) - [Configurando Ambiente de Produção Django com Virtualenvwrapper, Gunicorn e Nginx](https://glaucocustodio.github.io/2013/11/23/configurando-ambiente-de-producao-django-com-virtualenvwrapper-gunicorn-e-nginx/)

To install and configute some aditional packages for Nginx I recommend you to follow its website instructions and install a Stable version, following instructions according to your distro:

* Nginx - [nginx: Linux packages](https://nginx.org/en/linux_packages.html#Amazon-Linux)

Some Amazon Linux 2 pre-built in applications are older versions and may not satisfy project requirenments, so take care to install and satisfy all project requirenments before. In Amazon Linux 2 you probably must compile Python 3.10 version if you want to use it. If you want to use SQLite with Django 3 or higher, you problably will waste some time trying to configure an updated version of SQLite, since SQLite 3.7 is pre-built in Amazon Linux 2 and Django 3+ requires newer version.

### Short summary

#### 1. Pre requirements

* To check Amazon Linux 2 distro details
  * ```cat /etc/os-release```
  * ```hostnamectl```
  * ```cat /etc/image-id```
  * ```cat /etc/system-release```
* Search and install Amazon Linux 2 Extra packages
  * ```sudo yum install amazon-linux-extras```
  * ```amazon-linux-extras | grep -i python```
  * ```sudo amazon-linux-extras install <package>```
* To view repo list
  * ```sudo yum repolist```

* Your production environment must have some aditional developer packages installed.
  * Ubuntu: 
    * ```sudo apt update```
    * ```sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx curl```
  * Amazon Linux 2
    * ```sudo yum update -y``` | ```sudo yum update --security```
    * ```sudo yum groupinstall "Development Tools" -y```
    * ```sudo yum erase openssl-devel -y```
    * ```sudo yum install yum-utils openssl11 openssl11-devel libffi-devel bzip2-devel python3-pip postgresql-devel nginx wget -y```
    * ```gcc --version``` ("C" compiler is demanded)
    * Software packages from the Extras Library
      * ```sudo yum install -y amazon-linux-extras```
      * [Install extra packages](https://aws.amazon.com/pt/premiumsupport/knowledge-center/ec2-install-extras-library-software/) you want

* Then, make sure you have Python 3.10.6, Django 4.1.4, PostgreSQL 15.1 or higher installed and properly configured
  * **PYTHON**. Compile/install a specific Python version [following some tutorial](https://techviewleo.com/how-to-install-python-on-amazon-linux-2/)
    * ```wget https://www.python.org/ftp/python/3.10.6/Python-3.10.6.tgz```
    * ```tar -xf Python-3.10.6.tgz```
    * ```cd Python-3.10.2```
    * ```./configure --enable-optimizations```
    * ```nproc```
    * ```make -j $(nproc)```
    * ```sudo make altinstall```
    * ```python3.10 --version```
    * ```sudo rm -f Python-3.10.2.tgz```
  * **POSTGRESQL**. To install [use some tutorial](https://techviewleo.com/how-to-install-postgresql-database-on-amazon-linux/). If you have any error related to alocation of memory during installation process, stop some services to free memory space.
    * Verify your PostgreSQL version, then add the bin folder to the ```$PATH```
      * ```sudo -u postgres psql -c "SELECT version();"```
      * ```export PATH=$PATH:/usr/lib/postgresql/15/bin/``` (verify the correct path to PostgreSQL bin folder)
      * ```echo $PATH``` (check PATH value)
  * **NGINX**. To install and configute some aditional packages for Nginx I recommend you to follow its website instructions and install a Stable version, following instructions according to your distro: [nginx: Linux packages](https://nginx.org/en/linux_packages.html#Amazon-Linux)

#### 2. Create PostgreSQL database and user

* Access PostgreSQL comand line using specific user (```-u```): ```sudo -u postgres psql```
  * Create database
    * ```CREATE DATABASE website;```
  * Create user and password
    * ```CREATE USER django WITH PASSWORD 'password';```
  * Set configurations demanded by Django
    * ```ALTER ROLE django SET client_encoding TO 'utf8';```
    * ```ALTER ROLE django SET default_transaction_isolation TO 'read committed';```
    * ```ALTER ROLE django SET timezone TO 'UTC';```
  * Give our new user access to administer our new database
    * ```GRANT ALL PRIVILEGES ON DATABASE website TO django;```
    * Maybe you must enter database to give privileges as follows
      * ```sudo -u postgres psql -d website```
      * ```GRANT ALL PRIVILEGES ON SCHEMA public TO django;``` or
      * ```GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO django;```
  * Exit out of the PostgreSQL prompt
    * ```\q```

#### 3. Create your Django project

* If you have a project ready to production you may clone it into your VPS/Linux image.
* The main point is to properly configure some variables at ```settings.py```, as ```DEBUG```, ```SECRET_KEY```, ```ALLOWED_HOSTS```, ```STATIC_URL``` and ```STATIC_ROOT```. Be carefull to hide secret data using some tool as [```django-environ```](https://django-environ.readthedocs.io/en/latest/) or even the [```os```](https://docs.python.org/3.10/library/os.html#file-names-command-line-arguments-and-environment-variables) Python package to manage environment variables;
  * Work with virtual environments, using [Virtualenv](https://virtualenv.pypa.io/en/latest/);
  * Configuration of static file service, using [Whitenoise](https://whitenoise.evans.io/en/stable/django.html);
  * Additionally, it would be usefull check [Django deployment checklist](https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/) to obtain a full checklist of settings you might want to change: ```python manage.py check --deploy```;

##### 3.1. Set some aditional configurations for database connection

* For production deployment, some configurations are demanded by Django, as referenced at the article [Databases: PostgreSQL notes](https://docs.djangoproject.com/en/4.1/ref/databases/#postgresql-notes)
  * To connect using parameters from ```.env``` file, you can use ```django-environ```;
  * To connect using a service name from the [connection service file](https://www.postgresql.org/docs/current/libpq-pgservice.html) and a password from the [password file](https://www.postgresql.org/docs/current/libpq-pgpass.html), you must specify them in the OPTIONS part of your database configuration in DATABASES at ```settings.py```.
    * User based configuration (higher precedence): create the files ```.pg_service.conf``` and ```.pgpass``` at the ```$HOME``` directory; to check for the path, type: ```echo $HOME```;
    * System-wide configuration: for first, check for the path where the global configuration file ```pg_service.conf``` has to be located (and owned by root), type: ```pg_config --sysconfdir```

##### 3.2. Test connection, migrations, static files, server and superuser access

* Build migrations and migrate it (this will show you if database connection is correctly configured)
  * ```python manage.py makemigrations```
  * ```python manage.py migrate```
* Create a super user to administrate Django project
  * ```python manage.py createsuperuser```
* Build ```static``` files folder for public sharing in production environment
  * ```python manage.py collectstatic```
* Test Gunicorn server application (make sure that specified port is available)
  * ```gunicorn --bind 127.0.0.1:8000 core.wsgi```
* Access ```/admin``` to test superuser access.

#### 4. Set Gunicorn as your Application Server

#### 5. Set the Nginx as your Web Server

* Install Nginx and its aditional packages;
* Make sure the general configuration file of Nginx at ```/etc/nginx/nginx.conf``` has the line ```include /etc/nginx/sites-enabled/*``` inside ```http { }``` block;
* Create a configuration file for your project at ```/etc/nginx/sites-available``` folder. Name the file with your project name;
* Create a link at ```/etc/nginx/sites-enabled``` folder to inform Nginx that your projec is active: ```sudo ln -s /etc/nginx/sites-available/thiago-tjas.com /etc/nginx/sites-enabled```;
* Test your Nginx configuration for syntax errors: ```sudo nginx -t```;

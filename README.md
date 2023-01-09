# thiago-tjas.com

[![Status](https://img.shields.io/badge/status-active-brightgreen.svg)](./README.md)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ftjas%2Fthiago-tjas.com&count_bg=%2379C83D&title_bg=%23555555&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
[![Stars](https://img.shields.io/github/stars/tjas/thiago-tjas.com?color=yellow)](https://github.com/tjas/thiago-tjas.com)
[![Python](https://img.shields.io/badge/python-v3.10.6-darkgreen)](https://www.python.org/)
[![Django](https://img.shields.io/badge/django-v4.1.4-green)](https://www.djangoproject.com/)

> 🇺🇸 Access my personal website: [thiago-tjas.com](http://thiago-tjas.com/) ⭐ Mark the project with a star

> 🇧🇷 Acesse meu website pessoal: [thiago-tjas.com](http://thiago-tjas.com/) ⭐ Marque o projeto com uma estrela

## Build With

* Python 3.10.6
* Django 4.1.4

## Deployment in production

> Section under development

The website was deployed into an **Amazon Web Service (AWS) Lightsail VPS**, adopting some recomendations which are importants to be followed in production environments, mainly for security purposes. This deployment was hard coded for learning and saving purposes, otherwise you can adopt some paid ready-made solutions available in cloud providers (if money is not an issue or a solution with guaranteed expert support is very important to you). These articles were great references for me, read them and adapt for your case:

* Digital Ocean - [How To Set Up Django with Postgres, Nginx, and Gunicorn on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-20-04)
* Mozilla Developer Network (MDN) - [Django Tutorial Part 11: Deploying Django to production](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Deployment)
* Alura (Portuguese only) - [Fazendo o deploy de uma aplicação Django](https://www.alura.com.br/artigos/fazendo-o-deploy-de-uma-aplicacao-django)
* Glauco Custódio's Blog (Portuguese only) - [Configurando Ambiente de Produção Django com Virtualenvwrapper, Gunicorn e Nginx](https://glaucocustodio.github.io/2013/11/23/configurando-ambiente-de-producao-django-com-virtualenvwrapper-gunicorn-e-nginx/)

To install and configute some aditional packages for Nginx I recommend you to follow its website instructions and install a Stable version, following instructions according to your distro:

* Nginx - [nginx: Linux packages](https://nginx.org/en/linux_packages.html#Amazon-Linux)

### Short summary

1. Make sure you have Python 3.10.6 or higher installed and properly configured, as well your production environment must have some aditional developer packages installed;

2. Create your Django project

* The main point is to properly configure some variables at ```settings.py```, as ```DEBUG```, ```SECRET_KEY```, ```ALLOWED_HOSTS```, ```STATIC_URL``` and ```STATIC_ROOT```. Be carefull to hide secret data using some tool as [```django-environ```](https://django-environ.readthedocs.io/en/latest/) or even the [```os```](https://docs.python.org/3.10/library/os.html#file-names-command-line-arguments-and-environment-variables) Python package to manage environment variables;
* Additionally, it would be usefull check [Django deployment checklist](https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/) to obtain a full checklist of settings you might want to change: ```python manage.py check --deploy```;

3. Set Gunicorn as your Application Server

4. Set the Nginx as your Web Server

* Install Nginx and its aditional packages;
* Make sure the general configuration file of Nginx at ```/etc/nginx/nginx.conf``` has the line ```include /etc/nginx/sites-enabled/*``` inside ```http { }``` block;
* Create a configuration file for your project at ```/etc/nginx/sites-available``` folder. Name the file with your project name;
* Create a link at ```/etc/nginx/sites-enabled``` folder to inform Nginx that your projec is active: ```sudo ln -s /etc/nginx/sites-available/thiago-tjas.com /etc/nginx/sites-enabled```;
* Test your Nginx configuration for syntax errors: ```sudo nginx -t```;



## Contact


- **Thiago Jorge Almeida dos Santos** ⁘ [LinkedIn](https://www.linkedin.com/in/thiago-tjas) ⁘ [YouTube](https://www.youtube.com/@thiago_tjas) ⁘ [Instagram](https://www.instagram.com/thiago.tjas/) ⁘ [GitHub](https://github.com/tjas)

    Project author and maintainer.

- Project Link: https://github.com/tjas/thiago-tjas.com
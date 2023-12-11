# thiago-tjas.com

[![Status](https://img.shields.io/badge/status-active-brightgreen.svg?label=Status)](./README.md)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ftjas%2Fthiago-tjas.com&count_bg=%2379C83D&title_bg=%23555555&title=Hits&edge_flat=false)](https://hits.seeyoufarm.com)
[![Licence](https://img.shields.io/github/license/tjas/thiago-tjas.com?color=orange&label=Licence)](https://github.com/tjas/thiago-tjas.com/blob/master/LICENCE)
[![Commits](https://img.shields.io/github/commit-activity/t/tjas/thiago-tjas.com?label=Commits)](https://github.com/tjas/thiago-tjas.com/graphs/commit-activity)
![Last commit](https://img.shields.io/github/last-commit/tjas/thiago-tjas.com?color=blue&label=Last%20commit)
![Repo size](https://img.shields.io/github/repo-size/tjas/thiago-tjas.com?color=888888&label=Repo%20size)
![Code size](https://img.shields.io/github/languages/code-size/tjas/thiago-tjas.com?color=888888&label=Code%20size)
[![Stars](https://img.shields.io/github/stars/tjas/thiago-tjas.com?color=blue&label=Stars)](https://github.com/tjas/thiago-tjas.com/stargazers)
[![Watchers](https://img.shields.io/github/watchers/tjas/thiago-tjas.com?color=blue&label=Watchers)](https://github.com/tjas/thiago-tjas.com/watchers)
[![Forks](https://img.shields.io/github/forks/tjas/thiago-tjas.com?color=blue&label=Forks)](https://github.com/tjas/thiago-tjas.com/forks)

[![Python](https://img.shields.io/badge/python-v3.10.6-darkgreen?label=Python)](https://www.python.org/)
[![Django](https://img.shields.io/badge/django-v4.1.4-green?label=Djando)](https://www.djangoproject.com/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-v15.1-blue?label=PostgreSQL)](https://www.postgresql.org/)

> ⭐ Mark the project with a star. 👀 Watch the project for receive news.
>
> 🇺🇸 Access my personal website: [thiago-tjas.com](http://thiago-tjas.com/)

<details>
<summary> 🇧🇷 Leia em Português do Brasil</summary>

> ⭐ Marque o projeto com uma estrela. 👀 Acompanhe o projeto para receber novidades.
>
> 🇧🇷 Acesse meu website pessoal: [thiago-tjas.com](http://thiago-tjas.com/)

O website foi implantado do zero em um servidor virtual privado [Amazon Web Service (AWS) Lightsail VPS](https://aws.amazon.com/pt/lightsail/), utilizando uma imagem [Amazon Linux 2](https://aws.amazon.com/pt/amazon-linux-2/). Um artigo abordando as experiências obtidas neste processo está em construção, quando concluído será disponibilizado aqui: [Deploying a Django Website on AWS Lightsail VPS](./ARTICLE_DEPLOYNG_A_DJANGO_WEBSITE_ON_AWS_LIGHTSAIL_VPS.md).

</details>

The website was deployed into an [Amazon Web Service (AWS) Lightsail VPS](https://aws.amazon.com/lightsail/), using an [Amazon Linux 2](https://aws.amazon.com/amazon-linux-2/) image from scratch. An article addressing the experiences obtained in this process is under construction, when completed it will be made available here: [Deploying a Django Website on AWS Lightsail VPS](./ARTICLE_DEPLOYNG_A_DJANGO_WEBSITE_ON_AWS_LIGHTSAIL_VPS.md).

## Features

- [x] Internationalization
  - [x] English
  - [x] Portuguese
- [x] Navigation
- [x] Responsiveness
- [x] 404 Not Found
- [ ] External database
- [ ] External environment variables
- [ ] [GSAP](https://gsap.com/) animation
- [ ] LGPD compliance
- [ ] GDPR compliance
- [ ] Webserver
  - [x] DNS
  - [ ] Screen
  - [ ] Nginx
  - [ ] HTTPS
- [ ] SEO
  - [x] robot.txt
  - [x] Metatags
  - [ ] Sitemap
- [ ] Website
  - [x] About
  - [ ] Skills
  - [ ] Experiences
  - [ ] Projects
  - [ ] Contact
    - [ ] E-mail dispatcher
    - [ ] Signals' message
- [ ] Blog
  - [ ] Articles
  - [ ] Reactions
  - [ ] Comments
  - [ ] Syndication feed (RSS)
- [ ] Tracking
  - [x] Mouse moving
  - [ ] Visit mapping
  - [ ] Logging


## Running on Docker

Useful Docker commands:

```sh
sudo docker build -f Dockerfile -t tjas/thiago-tjas.com .
sudo docker run -p 80:80 --name thiago-tjas.com -d tjas/thiago-tjas.com

sudo docker ps -a
sudo docker images

sudo docker exec -it thiago-tjas.com /bin/bash
sudo docker container logs -f -t thiago-tjas.com

sudo docker start thiago-tjas.com
sudo docker restart thiago-tjas.com
sudo docker stop thiago-tjas.com

sudo docker rmi -f tjas/thiago-tjas.com
sudo docker rm thiago-tjas.com
```

<!-- Useful AWS ec2 instance commands:

```sh
# Clear the YUM Cache
sudo yum clean all
rm -rf /var/cache/yum

# Update CA Certificates
sudo yum update ca-certificates

sudo yum update
```
 -->
# Django internationalization

Useful Django commands:

```sh
# Create or update a message file
django-admin makemessages -l pt_BR 
django-admin makemessages -l pt

# Create or update all message files
django-admin makemessages -a

# Compiling message files
django-admin compilemessages

```

## Contact

**Thiago Jorge Almeida dos Santos**, project author and maintainer.

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logoColor=white&link=https://www.linkedin.com/in/thiago-tjas)](https://www.linkedin.com/in/thiago-tjas) [![YouTube](https://img.shields.io/badge/-YouTube-FF0000?style=flat-square&logoColor=white&link=https://www.youtube.com/@thiago_tjas)](https://www.youtube.com/@thiago_tjas) [![Instagram](https://img.shields.io/badge/-Instagram-E4405F?style=flat-square&logoColor=white&link=https://www.instagram.com/thiago.tjas/)](https://www.instagram.com/thiago.tjas/) [![Website](https://img.shields.io/badge/-Website-888888?style=flat-square&logoColor=white&link=http://thiago-tjas.com/)](http://thiago-tjas.com/) [![GitHub](https://img.shields.io/badge/-GitHub-555555?style=flat-square&logoColor=white&link=https://github.com/tjas)](https://github.com/tjas)

## Licence

* Code distributed under [MIT License](https://github.com/tjas/thiago-tjas.com/blob/master/LICENCE).

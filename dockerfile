FROM centos:centos7

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
# RUN source ~/.bashrcN

EXPOSE 8080
EXPOSE 8081
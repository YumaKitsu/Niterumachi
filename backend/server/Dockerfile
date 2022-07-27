# syntax=docker/dockerfile:1
FROM ubuntu:20.04

# 必要そうなものをinstall
RUN apt-get update && apt-get install -y --no-install-recommends wget build-essential libreadline-dev \ 
libncursesw5-dev libssl-dev libsqlite3-dev libgdbm-dev libbz2-dev liblzma-dev zlib1g-dev uuid-dev libffi-dev libdb-dev \
python3-dev libmysqlclient-dev

#任意バージョンのpython install
RUN wget --no-check-certificate https://www.python.org/ftp/python/3.9.5/Python-3.9.5.tgz \
&& tar -xf Python-3.9.5.tgz \
&& cd Python-3.9.5 \
&& ./configure --enable-optimizations\ 
&& make \
&& make install

#サイズ削減のため不要なものは削除
RUN apt-get autoremove -y

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .


EXPOSE 8000

CMD [ "gunicorn" "--bind" ":8000" "server.wsgi:application" ]


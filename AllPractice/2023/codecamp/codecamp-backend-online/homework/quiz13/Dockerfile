#1. 운영체제 및 프로그램 설치 (하나 하나 입력하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

#------------------------------

#1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm, yarn 까지 모두 설치되어 있는 이미지를 다운로드하는 방식)
FROM node:16

#2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사
# RUN mkdir myfolder => 아래에서 COPY할 때, 자동으로 생성됨
COPY ./package.json /myfolder/
COPY ./pnpm-lock.yaml /myfolder/
WORKDIR /myfolder/
RUN npm i -g pnpm
RUN pnpm i

COPY . /myfolder/

#3. 도커 컴퓨터 안에서 index.js 실행
CMD pnpm start:dev
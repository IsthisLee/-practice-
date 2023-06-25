# $ docker run --name web-server -it ubuntu:20.04
# $ (컨테이너 안에서) apt update
# $ (컨테이너 안에서) apt install python3
# $ (컨테이너 안에서) mkdir -p(www폴더가 없어도 생성하면서 html폴더까지 생성) /var/www/html
# $ (컨테이너 안에서) cd /var/www/html
# $ (컨테이너 안에서) echo "Hello, <strong>Docker</strong>" > index.html
# $ (컨테이너 안에서) python3 -m http.server
# $ docker commit web-server(컨테이너 이름) web-server-commit(이미지 이름)

# 위 내용은 아래와 같음.

FROM ubuntu:20.04
RUN apt update && apt install -y python3 
#   -> -y 옵션은 자동으로 Y입력하라는 의미.
#   -> (RUN 명령어는 레이어가 생성됨. 따라서 이런 명령어는 한 줄로 쓰는 게 좋음.)
WORKDIR /var/www/html
#   -> 없다면 자동 생성 -> 해당 디렉토리로 이동 -> 앞으로 해당 디렉토리 안에서 명령어 실행됨.
COPY ["index.html", "."]
#   -> 현재 폴더에 있는 index.html 파일을 컨테이너 안의 현재 폴더(/var/www/html)로 복사
#   -> 다음 코드를 사용할 수도 있음. -> RUN echo "Hello, <strong>Docker</strong>" > index.html
CMD python3 -u -m http.server
#   -> -u 옵션은 로그 출력을 위함.(Python3 웹서버의 기본 특성 때문)

# $ docker build -t web-server-build(이미지 이름) .(Dockerfile 위치)(이미지 생성 위치) && docker rm --force web-server && docker run -p 8888:8000 --name web-server web-server-build


# -------RUN과 CMD의 차이점------- (+ ENTRYPOINT도 있음.)
# RUN은 build가 되는 시점에 생성되는 명령어.(이미지 생성 시점에 실행)
# CMD는 컨테이너가 실행되는 시점에 실행되는 명령어.
#  -> RUN에서 실행한 명령어는 이미지에 반영되고, CMD에서 실행한 명령어는 컨테이너에 반영됨.
#  -> 즉, 
#  -> RUN은 이미지를 생성할 때 실행되어 반영되는 명령어
#  -> CMD는 해당 이미지로 컨테이너를 생성할 때 실행되는 명령어.
# CMD는 실행되지 않도록 가능. -> docker run web-server-build pwd(파라미터인 pwd가 CMD 대신 오버라이딩되어 pwd가 실행됨.)
# CMD와 ENTRYPOINT는 한 컨테이너에 한 번만 존재할 수 있음. -> 둘 다 존재할 경우, CMD는 ENTRYPOINT의 파라미터로 사용됨.
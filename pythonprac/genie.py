import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient #pymongo를 쓰겠다
client = MongoClient('localhost', 27017) #내 컴퓨터에서 돌아가고 있는 mongoDB에 접속할 것이다.
db = client.dbsparta #dbsparta라고 하는 DB이름으로 접속할 것이다. 없으면 자동 생성.

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
webpage = requests.get('https://www.genie.co.kr/chart/top200?ditc=D&ymd=20200403&hh=23&rtm=N&pg=1',headers=headers)

soup = BeautifulSoup(webpage.text, 'html.parser')

charts = soup.select('#body-content > div.newest-list > div > table > tbody > tr')
for chart in charts:
    rank = chart.select_one('td.number').text[0:2].strip()
    title = chart.select_one('td.info > a.title.ellipsis').text.strip()
    singer = chart.select_one('td.info > a.artist.ellipsis').text.strip()
    print(rank, title, singer)
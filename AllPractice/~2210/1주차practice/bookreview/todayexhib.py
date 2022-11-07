import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbsparta

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('http://ticket.interpark.com/TPGoodsList.asp?Ca=Eve&SubCa=Eve_O&tid4=Eve_O&_emk_keyword=&gclid=CjwKCAjwoP6LBhBlEiwAvCcthLUzdYV0EcYtBWMBV6WsYlvwf8OUA473PN5KlIJEXI1aOmg2Alm68hoC7tUQAvD_BwE&Sort=1',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

trs = soup.select('html > table > tr:nth-child(2) > td:nth-child(3) > div > div > div.con > div > table > tbody > tr')

#전시회별 상세 url 가져오기
def get_urls():
    for tr in trs:
        a = tr.select_one('td.RKthumb > a')
        base_url = 'http://ticket.interpark.com/'
        url = base_url + a['href']
        print(url)

#db저장까지
def start():
    get_urls()

#전체 시작
start()
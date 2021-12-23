import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient# client = MongoClient('mongodb://test:test@localhost', 27017)
client = MongoClient('localhost', 27017) # dbsparta 테이블에 인터파크 티켓 크롤링 한 데이터 저장하기
db = client.dbsparta

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
payload = {'param1': '1', 'param2': '2'}
data = requests.get('https://www.lotteon.com/search/search/search.ecn?render=search&platform=pc&q=%ED%96%A5%EC%88%98&mallId=2', params=payload, headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

uls = soup.select('#c201_goods')
key = 0
# for li in uls:
#     a = li.select_one('td.RKtxt > span > a')
#     if a is not None:
#             key += 1
#             title = a.text
#             img_url = li.select_one('.stit > table > tbody > tr > td.RKthumb > a > img')['src']
#             place = li.select_one('.stit > table > tbody > tr > td.Rkdate > a').text
#             period = li.select_one('.stit > table > tbody > tr > td:nth-child(4)').text.strip()
#             baseUrl = 'http://ticket.interpark.com'
#             link_url = li.select_one('.stit > table > tbody > tr > td.RKthumb > a')['href']
#             url = baseUrl + link_url
#             price = '100,000'
#             age = '전체관람가'
#             doc = {
#                 'id' : str(key),
#                 'title': title,
#                 'img_url': img_url,
#                 'url': url,
#                 'place': place,
#                 'period': period,
#                 'price' : price,
#                 'age' : age
#             }
print(soup)
            #db.exhibition.insert_one(doc)
            #c201_goods > ul > li:nth-child(1) > div > a > div > div:nth-child(1) > div.srchProductUnitTitle > strong

#body > table > tbody > tr:nth-child(2) > td:nth-child(3) > div > div > div.con > div > table > tbody > tr:nth-child(1) > td.RKtxt > img
#c201_goods > ul > li:nth-child(1)
import requests
from bs4 import BeautifulSoup

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://www.lotteon.com/search/search/search.ecn?render=search&platform=pc&q=dior&mallId=2', headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

brand = soup.select('#c201_goods > ul > li:nth-child(1) > div > a > div > div:nth-child(1) > div.srchProductUnitTitle > strong')

print(brand)


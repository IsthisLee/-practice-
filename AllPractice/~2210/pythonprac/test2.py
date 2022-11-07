from selenium import webdriver
from bs4 import BeautifulSoup

#webdriver 객체 생성
driver = webdriver.Chrome(executable_path="/Users/isthis/Downloads/chromedriver")
url = 'https://www.lotteon.com/search/search/search.ecn?render=search&platform=pc&q=dior&mallId=2'

#url에 접근
driver.get(url)

# html 소스 가져오기
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')

brand = soup.select('#c201_goods > ul > li:nth-child(1) > div > a > div > div:nth-child(1) > div.srchProductUnitTitle > strong')

print(brand)

driver.quit()



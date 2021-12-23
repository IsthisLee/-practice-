from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By

#webdriver 객체 생성
driver = webdriver.Chrome(executable_path="/Users/isthis/Downloads/chromedriver")
url = 'https://www.lotteon.com/search/search/search.ecn?render=search&platform=pc&q=%ED%96%A5%EC%88%98&mallId=2'

#url에 접근
driver.get(url)

filter1 = driver.find_element(By.XPATH, '//input[@type="checkbox" and @value="p3688"]')
filter1.click()

driver.page_source
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')

uls = soup.select('#c201_goods > ul > li')

for li in uls:
    a = li.select_one('div > a > div > div:nth-child(1) > div.srchProductUnitTitle > strong')
    if a is not None:
        title = li.select_one('div > a > div > div:nth-child(1) > div.srchProductUnitTitle').text
        brand = a.text
        row = {
            'brand': brand,
            'title': title
        }
        print(row)

driver.quit()

#c201_goods > ul > li:nth-child(1) > div > a > div > div:nth-child(1) > div.srchProductUnitTitle > strong
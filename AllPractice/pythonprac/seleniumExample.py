from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By

import time, re, datetime

#webdriver 객체 생성
driver = webdriver.Chrome(executable_path="/Users/isthis/Downloads/chromedriver")
url = 'https://www.lotteon.com/search/search/search.ecn?render=search&platform=pc&q=%ED%96%A5%EC%88%98&mallId=2'

#url에 접근
driver.get(url)

# 향 종류 필터 선택 후 클릭
driver.find_element(By.XPATH,'//*[@id="content"]/div/section/div[1]/section[1]/ul[2]/li[5]/div/ul/li[1]/label/input').click()
# time.sleep(2)
# driver.find_element(By.XPATH,'//input[@value="567062131"]').click()
# time.sleep(2)
# driver.find_element(By.XPATH,'//input[@value="567062132"]').click()
# time.sleep(2)
# driver.find_element(By.XPATH,'//input[@value="567062133"]').click()
# time.sleep(2)
# driver.find_element(By.XPATH,'//input[@value="567062134"]').click()
# time.sleep(2)
# driver.find_element(By.XPATH,'//input[@value="567062136"]').click()
# time.sleep(2)
# driver.find_element(By.XPATH,'//input[@value="567062139"]').click()
# time.sleep(2)
# driver.find_element(By.XPATH,'//input[@value="567062140"]').click()
# time.sleep(2)
# driver.find_element(By.XPATH,'//input[@value="579033777"]').click()
# time.sleep(2)
# driver.find_element(By.XPATH,'//input[@value="602727511"]').click()


# 페이지 로딩 대기
time.sleep(2)

# html 소스 가져오기
html0 = driver.page_source
soup0 = BeautifulSoup(html0, 'html.parser')

pages = soup0.select('#c201_goods > div > a') # 페이지 개수에 맞게 생김.(다음쪽 버튼 덕분)

page = 1
result = []
forCnt = 0
pageCnt = 1

today = datetime.date.today()
m = str(today.month) + '월'

for a in pages:
    time.sleep(2)
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    uls = soup.select('#c201_goods > ul > li')
    for li in uls:
        a = li.select_one('div > a > div > div:nth-child(1) > div.srchProductUnitTitle > strong')
        if a is not None:
            brand = a.text
            # 제목 가져오기
            title = li.select_one('div > a > div > div:nth-child(1) > div.srchProductUnitTitle').text.split("\n")[2].upper()
            originPrice = li.select_one('div')['data-ga-data']
            originPrice = int(originPrice[originPrice.find('price')+9:originPrice.find('price')+18].split(",")[0])

            # 제목 정제 => 배열에 해당 문자 포함디면 해당 배열 제거
            title = title.split(' ')
            titleNum = 0
            for i in title:
                if i.find('NEW') != -1 or i.find('택') != -1 or i.find('공식') != -1 or \
                        i.find('단독') != -1 or i.find('종') != -1 or i.find('증정') != -1 or i.find(f'{m}') != -1:
                    del title[titleNum]
                titleNum = titleNum + 1
            title = " ".join(title) # 배열 다시 합치기(요소 사이에 띄어쓰기)

            # 이상한 문자 제거하기
            title = re.sub("[([\]\+]","",title)

            # 해당 단어가 있으면 상품에서 제외
            if title.find('세트') == -1:
                # 해당 단어가 있어야 상품에 포함
                if title.find('ML') != -1:

                    # ML 용량 검출
                    # if 'ML' in title:
                    #     a = title.index('ML')
                    #     ml = title[a-4:a]
                    #     ml = re.sub("[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]","",ml)
                    #     ml = ml.split(' ')
                    #     cnt = 0
                    #     for i in ml:
                    #         if len(i) < 2:
                    #             del ml[cnt]
                    #         cnt += 1
                    #     ml = float("".join(ml))

                    # ML 용량 부터 내용 날려버리기
                    # if title.find(f'{ml}') != -1:
                    #     a = title.index(f'{ml}') - 1
                    #     title = title[0:a]

                    # 10ml 당 가격 구하기
                    # standardPrice = originPrice / ml * 10

                    row = {
                        'brand' : brand,
                        'title' : title,
                        # 'originPrice' : originPrice,
                        # 'standardPrice' : int(standardPrice),
                        # 'ml' : ml
                    }
                    result.append(row)
        forCnt += 1

    # page css 셀렉터 값 구하기
    # 2페이지 이후에는 4번째 버튼 눌러야함.(전 페이지 버튼 때문에)
    if page == 2:
        page += 1
    page += 1

    # 마지막에는 버튼 누르지 않게
    if page <= len(pages) + 1:
        print(page)
        driver.find_element(By.CSS_SELECTOR, f'#c201_goods > div > a:nth-child({page})').click()

    print(f'페이지 : {pageCnt}')
    pageCnt += 1

print(result)
print(len(result))

driver.quit()

#c201_goods > ul > li:nth-child(1)
#c201_goods > ul > li:nth-child(1) > div > a > div > div:nth-child(1) > div.srchProductUnitTitle > strong
# https://for-it-study.tistory.com/38 ===> img 다운
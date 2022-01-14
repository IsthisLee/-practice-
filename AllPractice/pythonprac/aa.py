filters = soup0.select('#content > div > section > div.srchResultArea > section.srchFilterArea > ul.srchFilterAccordion > li:nth-child(6) > div > ul > li')
for i in range(1, len(filters) + 1):
    concentrationName = driver.find_element(By.CSS_SELECTOR, f'#content > div > section > div.srchResultArea > section.srchFilterArea > ul.srchFilterAccordion > li:nth-child(6) > div > ul > li:nth-child({i}) > label > span > span').text
    driver.find_element(By.CSS_SELECTOR,f'#content > div > section > div.srchResultArea > section.srchFilterArea > ul.srchFilterAccordion > li:nth-child(6) > div > ul > li:nth-child({i}) > label > input').click()
    time.sleep(2) # 페이지 로딩 대기
    if i != 1:
        driver.find_element(By.CSS_SELECTOR,
                            f'#content > div > section > div.srchResultArea > section.srchFilterArea > ul.srchFilterAccordion > li:nth-child(6) > div > ul > li:nth-child({i - 1}) > label > input').click()
        time.sleep(2)
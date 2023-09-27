from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# 크롬 브라우저 실행
driver = webdriver.Chrome()

# 접속할 주소
driver.get("https://www.mangoplate.com/top_lists")
'''
# 중첩된 데이터를 포함하는 ul 요소를 찾아서 접근 - 더보기 버튼을 눌러야지만 다음 데이터를 가져오는 형식이라 원하는 양의 데이터를 가져오지 못한다. 
ul_elements = driver.find_elements(By.XPATH, "/html/body/main/article/section/div/ul")
for ul_element in ul_elements:
    # 각 ul 요소 안에서 모든 li 요소를 찾아서 데이터 추출
    li_elements = ul_element.find_elements(By.XPATH, "./li")
    for li_element in li_elements:
        data = li_element.text
        print("Nested Data:", data)
'''
# 더보기 버튼을 일정 횟수만큼 클릭하면서 데이터를 로드 - /html/body/main/article/section/div/ul/li[1]
click_count = 0
while click_count < 10:
    try:
        # 데이터 요소 가져오기
        data_elements = driver.find_elements(By.XPATH, "/html/body/main/article/section/div/ul/li")
        for data_element in data_elements:
            data = data_element.text
            print("Data:", data)
        
        # 더보기 버튼 클릭
        more_button = driver.find_element(By.XPATH, "/html/body/main/article/section/div/a")
        more_button.click()
        time.sleep(2)  # 적절한 대기 시간 설정
        click_count += 1
    except:
        break  # 더보기 버튼이 없을 경우 반복 중단

# 웹 드라이버 종료
driver.quit()

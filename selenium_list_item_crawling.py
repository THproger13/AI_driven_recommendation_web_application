'''
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# 크롬 브라우저 실행
driver = webdriver.Chrome()

# 접속할 주소
driver.get("https://www.mangoplate.com/top_lists")

def get_list_items():
    # 더보기 버튼을 일정 횟수만큼 클릭하면서 데이터를 로드 - /html/body/main/article/section/div/ul/li[1]
    
    while(True):
        try:
            # 데이터 요소 가져오기
            data_elements = driver.find_elements(By.XPATH, "/html/body/main/article/section/div/ul/li")
            
            for data_element in data_elements:
                #리스트 사진을 버튼 변수로 정의  
                
                data_element.click()
                #리스트 사진을 눌렀을때 정보를 담은 템플릿의 xpath - "//*[@id="contents_list"]/ul"
                items_Data = 
                print("items_Data:", items_Data)
                
            
            # 더보기 버튼 클릭
            more_button = driver.find_element(By.XPATH, "/html/body/main/article/section/div/a")
            more_button.click()
            time.sleep(2)  # 적절한 대기 시간 설정
        except:
            break  # 더보기 버튼이 없을 경우 버튼 클릭 반복 중단
        
        get_list_items()
'''

from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# 크롬 브라우저 실행
driver = webdriver.Chrome()

# 접속할 주소
driver.get("https://www.mangoplate.com/top_lists")

def get_list_items():
    while True:
        try:
            # 데이터 요소 가져오기
            data_elements = driver.find_elements(By.XPATH, "/html/body/main/article/section/div/ul/li")
            
            for data_element in data_elements:
                # 리스트 아이템을 클릭하여 정보를 별도의 요소에서 가져오기
                data_element.click()
                
                # 리스트 사진을 버튼 변수로 정의
                #list_img_button = data_element.find_element(By.XPATH, ".//img")
                #list_img_button.click()
                
                # 정보를 담은 템플릿의 xpath - "//*[@id='contents_list']/ul"  
                items_data_elements = driver.find_elements(By.XPATH, "//*[@id='contents_list']/ul")
                for item_data_element in items_data_elements:
                    item_data = item_data_element.text
                    print("Item Data:", item_data)
                
                # 리스트 아이템 정보를 확인했으면 다시 이전 페이지로 돌아가기
                #driver.back()
                
            # 더보기 버튼 클릭
            more_button = driver.find_element(By.CSS_SELECTOR, "#contents_list > div > button")
            more_button.click()
            time.sleep(2)  # 적절한 대기 시간 설정
        except:
            break  # 더보기 버튼이 없을 경우 버튼 클릭 반복 중단

# 함수 호출
get_list_items()

# 웹 드라이버 종료
#driver.quit()

    
# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from time import sleep
# # from selenium.webdriver import ActionChains
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.common.exceptions import TimeoutException
# browser = webdriver.Firefox()
# # actions = ActionChains(browser)
#
# browser.maximize_window()
#
# #pp login
# browser.get('file:///Users/jamescarter/Desktop/the%20work/komodosign/test/sample2.html')
# browser.save_screenshot('screenshot.png')
# browser.close()
# # # browser.find_element_by_xpath('//*[@id="btnLogin"]').click()

import pdfkit
with open('sample2.html') as f:
    pdfkit.from_file(f, 'out.pdf')

# wkhtmltopdf sample2.html output_file.pdf

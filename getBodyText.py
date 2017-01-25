#coding=utf-8
#python version：2.7
#authon: Karen

import urllib  
from readability import Document


count = 0 
errorNum = 0

# read file and store urls in a list
with open("data/urls_1.txt") as f:
    urls = f.readlines()

urls = [x.strip() for x in urls] 



for url in urls:
	count = count + 1
	print "----------------------------------" + str(count) + "----------------------------------"
	try: 
		html = urllib.urlopen(url).read()  
	except Exception as e:
		errorNum = errorNum + 1
		print(e) 
		pass
	doc = Document(html).summary() # get the main article of the page
	print doc
	
print "---------------------------------- error number: " + str(errorNum) + " ----------------------------------"
	

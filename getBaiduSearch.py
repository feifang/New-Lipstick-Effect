#coding=utf-8
#python version：2.7
#adapted from: sharpdeep http://blog.csdn.net/u010262331/article/details/45921375

import urllib
import urllib2
import re
from bs4 import BeautifulSoup as BS

baseUrl = 'http://www.baidu.com/s'
page = 1 
word = '韩剧+口红'  #keyword for searching
count = 0

for page in range(1,76):
	data = {'wd':word,'pn':str(page-1)+'0','tn':'baidurt','ie':'utf-8','bsst':'1'}
	data = urllib.urlencode(data)
	url = baseUrl+'?'+data
	try:
		request = urllib2.Request(url)
		response = urllib2.urlopen(request)
	except urllib2.HttpError,e:
		print e.code
		exit(0)
	except urllib2.URLError,e:
		print e.reason
		exit(0)
	html = response.read()
	soup = BS(html, "lxml")
	td = soup.find_all(class_='f')
	
	for t in td:
		font_str = t.find_all('font',attrs={'size':'-1'})[0].get_text()
		start = 0 #start
		realtime = t.find_all('div',attrs={'class':'realtime'})
		if realtime:
			realtime_str = realtime[0].get_text()
			start = len(realtime_str)
		end = font_str.find('...')
		arc = {'title': t.h3.a.get_text(), 'url': t.h3.a['href'], 'time': realtime_str, 'sum': font_str[start:end+3] }
		print arc['title']+' $ '+arc['url']+' $ '+arc['time']+' $ '+arc['sum']
		count = count + 1
	
print "count: " + str(count)
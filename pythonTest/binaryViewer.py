#!usr/bin/env python  
# -*- coding:utf-8 _*-  
""" 
@author:51211 
@file: binaryViewer.py 
@time: 2017/08/24 
"""

# UltraEdit

filepath = 'C:\Users\\51211\Desktop\sgim_picface_cloud.bin'
binfile = open(filepath, 'rb')

with open(filepath, 'rb') as f:
    f.seek(0x200, 0)  # 200h
    data = f.read(100)
    print data

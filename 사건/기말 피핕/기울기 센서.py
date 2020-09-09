import os
import smbus
import RPi.GPIO as GPIO
import time
import math

#pip3 install pillow 설치

from PIL import Image

im=Image.open('')
im.save('image.jpeg')
im.show()

bus=smbus.SMBus(1)
address=0x53
x=0x32
y=0x34
z=0x36

def ctrl=l(adr):
    acc0=bus.read_byte_data(address,adr)
    acc1=bus.read_byte_data(address,adr+1)
    acc=(acc1<<8)+acc0
    if acc>0x1FF:
        acc=(65536-acc)*-1
        acc=acc*3.9/1000
        return acc
try:
    bus.write_byte_data(address,0x2D,0x08)
    while 1:
        x1=ctrl(x)
        y1=ctrl(y)
        z1=ctrl(z)
        time.sleep(0.5)

        printf(y1)

        if(y1<-0.8){
            #im=Image.open('')
            #im.save('newimage.jpeg')
            #im.show()
            im=Image.open('black.jpg')
            print(im.size)
            im.save('black2.jpg')
            
except KeyboardInterrupt:
    pass

from sense_hat import SenseHat
import time

s = SenseHat()
s.low_light = True

green = (0, 255, 0)
yellow = (255, 255, 0)
blue = (0, 0, 255)
red = (255, 0, 0)
white = (255,255,255)
nothing = (0,0,0)
pink = (255,105, 180)

def available():
    G = green
    logo = [
    G, G, G, G, G, G, G, G,
    G, G, G, G, G, G, G, G,
    G, G, G, G, G, G, G, G,
    G, G, G, G, G, G, G, G,
    G, G, G, G, G, G, G, G,
    G, G, G, G, G, G, G, G,
    G, G, G, G, G, G, G, G,
    G, G, G, G, G, G, G, G,
    ]
    return logo
    
def busyOn():
    O = red
    logo = [
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    ]
    return logo
    
def busyOff():
    O = nothing
    logo = [
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    ]
    return logo


images = [busyOn, busyOff, busyOn, busyOff]
count = 0

while True: 
    s.set_pixels(images[count % len(images)]())
    time.sleep(.75)
    count += 1

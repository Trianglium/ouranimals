
import os

def mass_rename():
    i=1
    for file in os.listdir():
        src=file
        dst=str(i)+".jpg"
        os.rename(src,dst)
        i+=1


x = []

for n in range(1, 34):
    im = f"images/foxes/{str(n)}.jpg"
    y = {"image": im}
    x.append(y)


print(x)

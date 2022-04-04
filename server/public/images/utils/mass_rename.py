
import os
i=1
for file in os.listdir():
    src=file
    dst=str(i)+".jpg"
    os.rename(src,dst)
    i+=1

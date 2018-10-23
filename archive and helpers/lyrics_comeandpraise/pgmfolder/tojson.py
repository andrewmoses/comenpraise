import os
import json
lisnames = os.listdir('.')
out_list = []
for each in lisnames:
    if not each=='tojson.py' and not each=='extracted.json':
        print(each)
        f = open(each, 'r')
        fda = f.read()
        song = {}
        lines = fda.split('\n')
        song['title'] = lines[0].split('#')[1]
        ch_flag = 0
        w_pass = ""
        for eve in lines[1:]:
            print(eve)
            if eve=='***':
                if ch_flag:
                    w_pass=w_pass+"</i>"
                    ch_flag = 0
                else:
                    w_pass=w_pass+"<i>"
                    ch_flag = 1
            else:
                w_pass = w_pass+eve+"<br>"
        song['lyrics'] = w_pass
        f.close()
        out_list.append(song)
f = open('extracted.json','w')
f.write(json.dumps(out_list))

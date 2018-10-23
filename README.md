# Soli Bible - Bible alone

* Since angularjs route provider is used, we need to serve the angularjs application in a server.
* I usually start the application using python as mentioned below, request you to do the same.
* Navigate to the project directory
```
$ cd solibible
```
* Then, start off a python server
```
$ python -m SimpleHTTPServer 8000
```
* Open up a browser and navigate to http://localhost:8000
* Voila!

# Steps to deploy into cordova app

* In index.html line no.77 (uncomment it) - cordova.js
* line no. 84 (comment it) - bootstrapping angularjs
* Thats all folks!!

json structure
[
  {
    "sno": 1,
    "title": "A King is born this day in Bethlehem",
    "lyrics":"A King is born this day in Bethlehem\\nHallelujah O hallelujah\\\nNo crown in worn but angels worship Him\\nHalle, Hallelujah\\nAlmighty God, so meek, so mild,\\nSalvation comes through this holy Chile\\n\\nA King is born He is in the manger now\\nAKing is born humbly come and humbly bow\\nThe tiny Lord reaching out a tiny hand\\nA King is born this day in Bethlehem"
  },
  {
    "sno": 1,
    "title": "A King is born this day in Bethlehem",
    "lyrics":"A King is born this day in Bethlehem\\nHallelujah O hallelujah\\\nNo crown in worn but angels worship Him\\nHalle, Hallelujah\\nAlmighty God, so meek, so mild,\\nSalvation comes through this holy Chile\\n\\nA King is born He is in the manger now\\nAKing is born humbly come and humbly bow\\nThe tiny Lord reaching out a tiny hand\\nA King is born this day in Bethlehem"
  },
  {
    "sno": 1,
    "title": "A King is born this day in Bethlehem",
    "lyrics":"A King is born this day in Bethlehem\\nHallelujah O hallelujah\\\nNo crown in worn but angels worship Him\\nHalle, Hallelujah\\nAlmighty God, so meek, so mild,\\nSalvation comes through this holy Chile\\n\\nA King is born He is in the manger now\\nAKing is born humbly come and humbly bow\\nThe tiny Lord reaching out a tiny hand\\nA King is born this day in Bethlehem"
  }
]

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

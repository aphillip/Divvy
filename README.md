# Divvy - Share Your Files

Divvy is lets others send and retrieve files from a computer without the need for them to install additional software.
The code was forked from [coligo/file-uploader](https://github.com/coligo-io/file-uploader), but is modified to allow file downloads and QR code scanning.

### Requirements
[Node.js](https://nodejs.org/) must be installed.

### Installation
At the command prompt, run:
```Bash
	git clone https://github.com/aphillip/Divvy.git	
```
Alternatively, download and unzip the files of this repository.

### Start The Sharing Server
At the command prompt, run:
```Bash
	cd Divvy
	npm install	
```

### Sharing Files
At the command prompt, run:
```Bash
	node app.js
```
Then navigate to [localhost:3000/info]("localhost:3000/info") in your web browser.

For the convenience of Windows users, double clicking "Divvy-Server.bat", and then "Divvy-Info.URL" will accomplish the same thing.

<img src="https://github.com/aphillip/Divvy/blob/master/public/images/server-info.png?raw=true"  width="720px">

Use you phone's QR Code reader to scan the QR Code that appears, or navigate to the displayed URL on another device.  The image below is a mobile device.

<img src="https://github.com/aphillip/Divvy/blob/master/public/images/mobile-client.png?raw=true"  width="320px">



### Limitations
* In some instances on Android, the QR Code reader on your mobile device may open the URL in a Webview instead of a browser.  If the permissions of the app are not sufficient, only uploads from locations inside the green box will work.

  <img src="https://github.com/aphillip/Divvy/blob/master/public/images/mobile-file-locations.png?raw=true"  width="320px">


* iOS can only upload images and videos from the Photo app.

* When clicking "View Files" on Windows, the file browser may appear behind other windows.





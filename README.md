# Divvy - Share Your Files

Divvy is lets others send and retrieve files from a computer without the need for them to install additional software.
The code was forked from [coligo/file-uploader](https://github.com/coligo-io/file-uploader), but is modified to allow file downloads and QR code scanning.

### Requirements
[Node.js](https://nodejs.org/) must be installed.

### Installation
```Bash
	git clone https://github.com/aphillip/Divvy.git
	cd Divvy
	npm install	
```

### Start The Sharing Server
```Bash
	node app.js
```
Windows users can also start the server by double clicking "Divvy-Server.bat".

### Sharing Files
Navigate to [localhost:3000/info](localhost:3000/info) in a web browser on the server computer.
Windows users can do this by double clicking "Divvy-info.URL".

<img src="https://github.com/aphillip/Divvy/blob/master/public/images/server-info.png?raw=true"  width="720px">

Connect a second device to the same wifi as the server. Use a QR Code reader on that device to scan the code that appears, or navigate to the URL specified by the server. Below is an example of a mobile device connected to the server.

<img src="https://github.com/aphillip/Divvy/blob/master/public/images/mobile-client.png?raw=true"  width="320px">


### Advanced Configuration
Configuration settings reside in [routes/config.js](https://github.com/aphillip/Divvy/blob/master/routes/config.js).
  * port - The port the server should use.
  * ipStartsWith - If the server machine has more than one active IP address, you can specify which one to use by indicating what it should start with. If there is only one IP address, this option is be ignored.


### Limitations
* In some instances on Android, the QR Code reader may open the URL in a Webview instead of a browser (eg. WeChat).  If the permissions of the app are not sufficient, only uploads from locations inside the green box may work.

  <img src="https://github.com/aphillip/Divvy/blob/master/public/images/mobile-file-locations.png?raw=true"  width="320px">


* iOS can only upload images and videos from the Photo app.

* iOS uploads seem to fail if the the device goes to sleep during transfer.

* When clicking "View Files" on Windows, the file browser may appear behind other windows.


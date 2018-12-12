var express = require('express');
var router = express.Router();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
var qr = require('qrcode');
var config = require("./config.js");
var open = require("open");
var os = require('os');

var uploadDir=path.join(__dirname, '../public/uploads');

/* GET Home Page. */

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../views/index.html'));
});


/* GET Server Info. */
router.get('/info', function(req, res, next) {
	var interfaces = os.networkInterfaces();
	var addresses = [];
	for (var k in interfaces) {
		for (var k2 in interfaces[k]) {
		    var address = interfaces[k][k2];
		    if (address.family === 'IPv4' && !address.internal) {
		        addresses.push(address.address);
		    }
		}
	}
	
	var serverAddress='Unknown';
	if(addresses.length>0)
	{
		if(addresses.length==1)
		{
			serverAddress="http://" + addresses[0] + ":" + config.port;
		}
		else
		{
			for(var i=0;i<addresses.length;i++)
			{
				if(addresses[i].startsWith(config.ipStartsWith))
					serverAddress="http://" + addresses[i] + ":" + config.port;
			}
		}
	}
	qr.toDataURL(serverAddress, { errorCorrectionLevel: 'H' }, function (err, url) {
	  res.render('info', { serverurl: serverAddress, qrcode: url });
	});
});

router.post('/viewfiles', function(req, res){
  open(uploadDir);
  res.send("");
});


router.post('/upload', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;
  
  //Allow for total upload size of 4GB
  form.maxFileSize=4096*1024*1024;
  
  // store all uploads in the /uploads directory
  form.uploadDir = uploadDir;

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);

});

module.exports = router;


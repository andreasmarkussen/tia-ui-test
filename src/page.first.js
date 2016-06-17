var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
 
module.exports = function () {
    main=function(){
      console.log("InMain");   
    },visit=function(){
       console.log('In Visit'); 
        webdriverio
            .remote(options)
            .init()
            .url('http://www.google.com')
            .getTitle().then(function(title) {
                console.log('Title was: ' + title);
            }).end();
    },end=function(){
        
    }
};
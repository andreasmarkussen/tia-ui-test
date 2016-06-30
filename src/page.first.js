"use strict";
var webdriverio = require('webdriverio');
var browser = webdriverio.browser;
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
//        browserName: 'chrome'
    }
};
 
/*module.exports = function () {
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
        console.log("Ending");
    }
};*/

class PageFirst{
    constructor(){console.log("PageFirst contstructued");}
    visit(){
       console.log('In Visit'); 
       console.log(options); 
        webdriverio
            .remote(options)
            .init()
            .url('http://www.google.com')
            .getTitle().then(function(title) {
                console.log('Title was: ' + title);
            });
        return this;
    }
    end(){
        console.log("End");
        return this;
    }
};

module.exports = new PageFirst();
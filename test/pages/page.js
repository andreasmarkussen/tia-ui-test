"use strict";
var page_url="falsee";

function Page () {
}

Page.prototype.open = function (path) {
    browser.url('/' + path)
}

Page.prototype.openUrl = function (path) {
    if(page_url != path){
        browser.url(path);
        page_url = path;
    }
    
}

Page.prototype.break = function(msg) {
    console.log("Break on " + msg);
    var i=0/0;
    i();
//    break();
}

module.exports = new Page();
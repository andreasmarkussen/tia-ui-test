"use strict";
/// <reference path="typings/index.d.ts" />
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

var browser = webdriverio
    .remote(options)
    .init();
var P1 = require('./test/pages/page');
P1.Page.replacementBrowser = browser;
var loginPageModule = require('./test/pages/login.page');
//var loginPage = new require('./test/pages/login.page').LoginPage();
var loginPageClass = loginPageModule.LoginPage ;
var loginPage = new loginPageClass();
var FirstPagePath = 'file:../UnitTest/TestPages/StaticLoginWithLabel.html';
loginPage.open(FirstPagePath);
loginPage.doLogin('foo','bar');

         //.end();
"use strict";
/**
 * This unit test should run without access to a real TIA Server, only using local files
 */
//var PageFirst = require('./src/page.first.js');
/// <reference path="typings/index.d.ts" />

import { Page } from '../../test/pages/page';
//import { Page } from './test/pages/page';

var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function (title) {
        console.log('Title was: ' + title);
    }).end();
var pm =  require('..//..//test//pages//page');
var browser = webdriverio;
var P1 = require('./test/pages/page');
var LoginPageModule = require('..//..//test//pages//login.page');
Page.replacementBrowser = webdriverio.build();
var LoginPage = new LoginPageModule.LoginPage('../UnitTest/TestPages/StaticLoginWithLabel.html');

LoginPage.open();
console.log('HTML '+LoginPage.username.html);
/*PageFirst.visit()
         .end();*/
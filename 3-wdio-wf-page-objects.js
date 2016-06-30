"use strict";
var webdriverio = require('webdriverio');
var browser = webdriverio;
var LocalPage = require('./test/pages/local.page.js');
LocalPage.open().login('foo','bar')
         .end();
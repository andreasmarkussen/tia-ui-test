"use strict";
/// <reference path="myClass.ts" />
/// <reference path="../../typings/globals/chai/index.d.ts" />
/// <reference path="../../typings/globals/chai/index.d.ts" />
/// <reference path="../../typings/index.d.ts" />
/// <reference path="../pages/login.page.ts" />

var expect = require('chai').expect;

var LoginPageModule = require('..\\pages\\login.page');
let LoginPage = new LoginPageModule.LoginPage();
/// <reference path="../pages/login.page.ts" />
//var LocalWF = require('..\\workflows\\local.workflow');

/*var myClass = require('./myClass');
var mc = new myClass.MyClass();
var mci = myClass.MyClass;
var mc2 = new myClass.MyClass();

mc2.sayAge("car");*/

describe('Page Object - auth form', function () {
    it('should have the be able to set user and password', function () {
        LoginPage.open();
        //LoginPage.username.to;
        
    })

    it('should have a submit button with the text Submit', function () {
        LoginPage.open();
        expect(LoginPage.submit).to.be.ok;
        //expect(LoginPage.submit.getValue()).to.contain('Submit');
    })

    it('should have be able to login with with TIA credentials', function () {
        LoginPage.open();
//        LoginPage.open();
        LoginPage.doLogin('tia','NO0T7420');
        expect(LoginPage.isAuthenticated()).to.be.ok;
        expect(LoginPage.result.getText()).to.contain('Authenticated ok');
    });

    it('should deny access with wrong creds', function () {
        LoginPage.open();
        LoginPage.username.setValue('foo');
        LoginPage.password.setValue('bar');
        LoginPage.submit();
        expect(LoginPage.result.getText()).to.contain('Your username is invalid!');
    });

});


describe('Workflow Object - auth form', function () {
   /* it('should be able to login', function () {
        //LocalWF.login('tomsmith','SuperSecretPassword!');
        //expect(LoginPage.isAuthenticated()).to.be.yes;        
    });*/
    /*it('should deny access with wrong creds', function () {
        LoginPage.open();
        LoginPage.username.setValue('foo');
        LoginPage.password.setValue('bar');
        LoginPage.submit();

//        expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
    });* /

    it('should allow access with correct creds', function () {
        LoginPage.open();
        LoginPage.username.setValue('tomsmith');
        LoginPage.password.setValue('SuperSecretPassword!');
        LoginPage.submit();

//        expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');
    });*/
});
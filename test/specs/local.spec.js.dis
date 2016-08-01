"use strict";
var expect = require('chai').expect;
var LocalPage = require('..\\pages\\local.page');
var LocalWF = require('..\\workflows\\local.workflow');

describe('Page Object - auth form', function () {
    it('should have the be able to set user and password', function () {
        LocalPage.open();
        LocalPage.username.setValue('zxy');
        expect(LocalPage.username.getValue())
            .to.contain('zxy');
    })


    it('should have a submit button with the text Submit', function () {
        LocalPage.open();
        expect(LocalPage.submit).to.be.ok;
        //expect(LocalPage.submit.getValue()).to.contain('Submit');
    })

    it('should have be able to login with foo and bar', function () {
        LocalPage.open();
        LocalPage.login('foo','bar');
    });
    it('should deny access with wrong creds', function () {
        LocalPage.open();
        LocalPage.username.setValue('foo');
        LocalPage.password.setValue('bar');
        LocalPage.submit();
        expect(LocalPage.result.getText()).to.contain('Your username is invalid!');
    });

    it('should allow access with correct creds', function () {
        LocalPage.open();
        LocalPage.username.setValue('tomsmith');
        LocalPage.password.setValue('SuperSecretPassword!');
        LocalPage.submit();        
        expect(LocalPage.isAuthenticated()).to.be.ok;
        expect(LocalPage.result.getText()).to.contain('Authenticated ok');
    });
});


describe('Workflow Object - auth form', function () {
    it('should be able to login', function () {
        LocalWF.login('tomsmith','SuperSecretPassword!');
        expect(LocalPage.isAuthenticated()).to.be.yes;        
    })
    /*it('should deny access with wrong creds', function () {
        LocalPage.open();
        LocalPage.username.setValue('foo');
        LocalPage.password.setValue('bar');
        LocalPage.submit();

//        expect(LocalPage.flash.getText()).to.contain('Your username is invalid!');
    });* /

    it('should allow access with correct creds', function () {
        LocalPage.open();
        LocalPage.username.setValue('tomsmith');
        LocalPage.password.setValue('SuperSecretPassword!');
        LocalPage.submit();

//        expect(LocalPage.flash.getText()).to.contain('You logged into a secure area!');
    });*/
});
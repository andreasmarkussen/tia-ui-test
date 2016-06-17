//var expect = require('chai').expect;
var LocalPage = require('..\\pages\\local.page');
var LocalWF = require('..\\workflows\\local.workflow');

describe('auth form', function () {
    it('should have the title MyTitle',function () {
        //LocalWF.login('foo','bar');
        LocalPage.login('foo','bar');
        //LocalPage.open();
        
    })
    /*it('should deny access with wrong creds', function () {
        LocalPage.open();
        LocalPage.username.setValue('foo');
        LocalPage.password.setValue('bar');
        LocalPage.submit();

//        expect(LocalPage.flash.getText()).to.contain('Your username is invalid!');
    });*

    it('should allow access with correct creds', function () {
        LocalPage.open();
        LocalPage.username.setValue('tomsmith');
        LocalPage.password.setValue('SuperSecretPassword!');
        LocalPage.submit();

//        expect(LocalPage.flash.getText()).to.contain('You logged into a secure area!');
    });*/
});

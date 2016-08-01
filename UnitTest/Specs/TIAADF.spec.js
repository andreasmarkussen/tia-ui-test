/**
 * This unit test should run without access to a real TIA Server, only using local files
 */
/// <reference path="../../test/pages/login.page.ts" />
var expect = require('chai').expect;
var LoginPageModule = require('..\\..\\Test\\pages\\login.page');
var webdriverio = require('webdriverio');
//var b = webdriverio.init();
//var browser:Client<void> = webdriverio;
var LoginPage = new LoginPageModule.LoginPage();
var Firstpage = '../TestPages/StaticLoginWithLabels.html';
describe('Access to pages from local folder', () => {
    it('should be able to read and write to the UserName field', () => {
        var random_value = '2412341211';
        LoginPage.open(Firstpage);
        LoginPage.username.value = random_value;
        expect(LoginPage.username.value).to.be.equal(random_value);
    });
});

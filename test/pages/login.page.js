"use strict";
// / <reference path="./page.ts" />
/// <reference path="typings/index.d.ts" />
const tiaadf_1 = require("../../test/pages/tiaadf");
//import { Page } from "../../test/pages/page";
class LoginPage extends tiaadf_1.TIAADF.Page {
    /**
     * define elements
     */
    get Old_username() { return browser.elements('#username'); }
    get Old_password() { return browser.elements('#password'); }
    get username() { return this.elementByLabel('Username'); }
    get password() { return this.elementByLabel('Password'); }
    /** Function to login using username and password */
    doLogin(username, password) {
        let e = new tiaadf_1.TIAADF.LabledInput('Password');
        let PasswordElement = this.password._element_obj;
        //PasswordElement.setValue(password);
        this.password.value = password;
        this.username.value = username;
        //e1.setValue()
        //this.username._element_obj.
        //this.username._element_obj.setValue(username);
        //this.password().setValue(password);
    }
}
exports.LoginPage = LoginPage;
/*
let page = new Page();
var localPage = Object.create(page, {
    /**
     * define elements
     * /
    username: { get: function () { return browser.elements('#username'); } },
    password: { get: function () { return browser.elements('#password'); } },
    submit_form: { get: function () { return browser.elements('button#submit'); } },
    form: { get: function () { return browser.elements('#frmLogin'); } },
    result: { get: function () { return browser.elements('div#result'); } },
    btn2: { get: function () { return browser.elements('button#btn2'); } },
    /**
     * define or overwrite page methods
     * /
    open: { value: function () {
            page.openUrl('http://tia-app53:7005/tiaweb/faces/UIShell','TIA');
            //page.openUrl('http://tia-app53:7005/tiaweb/faces/UIShell','\/TIA\/');
            //page.openUrl.call(this, 'http://tia-app53:7005/tiaweb/faces/UIShell','\/TIA\/');
            //       page.openUrl.call(this, 'file///c:/dev/test.html');
        } },
    submit: { value: function () {
            //this.submit_form.click();
            console.log("####################### - Submitting");
            try {
                //console.log("Browser name",browser.prototype.constructor.name);
                //           console.log("Browser %j ",browser);
                var btns = browser.element('button');
                console.log("BTN text '%s' ", btns.element.name);
//                console.log("BTN JSON '%s' ", JSON.stringify(btns));
                var btn2 = browser.element('button#btn2');
  //              console.log("BTN text '%s' ", btn2.getText());
                console.log("BTN JSON b2 '%s' '%s'  ", JSON.stringify(btn2), page.ElementToString(btn2[0]));
                var btn3 = browser.element('button#btn3');
                console.log("BTN text '%j' '%s'  ", btn3, page.ElementToString(btn3[0]));
                console.log("BTN JSON b3 '%s' ", JSON.stringify(btn3));
                var btn_submit = browser.element('button#submit');
                //console.log("BTN text '%s' ",btn2.getText());
                //console.log("Source" + btns.getSource() );
                //        console.log("btns: " + btns);
                //page.break("Breaking");
                browser.click("#btn2");
            }
            catch (error) {
                console.log(console.log("In ERROR: for B3 - BTN JSON '%s' ", page.ElementToString(btn3[0])));
                console.log(error);
            }
            //this.btn2.click();
            //console.log(this.submit_form.typeOf());
            //page.break("Submitting");
            //this.form.submitForm();
        } },
    isAuthenticated: { value: function () {
            var text = browser.getText('#result').toString();
            //browser.debug();
            //console.log("Is auth "+text);
            //console.log("Type is " + typeof this.result);
            /*if(this.result.getValue().toString().includes('Authenticated ok'))
                return true; * /
            if (String(text).includes('Authenticated ok'))
                return true;
            else
                return false;
        } },
    getResult: { value: function () {
            return this.result.getText();
        } },
    login: { value: function (username, password) {
            this.form.username = username;
            this.form.password = password;
            this.submit();
        }
    }
});
//module.exports = localPage;'*/

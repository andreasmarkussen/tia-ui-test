"use strict";
/// <reference path="typings/index.d.ts" />
import { Page } from "./page";
import  { Client } from "webdriverio";
import  { RawResult } from "webdriverio";
import { Element} from "webdriverio";

let page=new Page();


var localPage = Object.create(page, {
    /**
     * define elements
     */
    username: { get: function () { return browser.elements('#username'); } },
    password: { get: function () { return browser.elements('#password'); } },
    submit_form:     { get: function () { return browser.elements('button#submit'); } },
    form:     { get: function () { return browser.elements('#frmLogin'); } },
    result:    { get: function () { return browser.elements('div#result'); } },
    btn2:     { get: function () { return browser.elements('button#btn2'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.openUrl.call(this, 'http://tia-app53:7005/tiaweb/faces/UIShell');
 //       page.openUrl.call(this, 'file///c:/dev/test.html');
    } },

    submit: { value: function() {
        //this.submit_form.click();
        console.log("####################### - Submitting");
        try
        {
            //console.log("Browser name",browser.prototype.constructor.name);
 //           console.log("Browser %j ",browser);
            var btns = browser.element('button');
         //   console.log("BTN text '%s' ",btns.getText());    
            console.log("BTN JSON '%s' ",JSON.stringify(btns));    
            var btn2 = browser.element('button#btn2');
           // console.log("BTN text '%s' ",btn2.getText());    
            //console.log("BTN JSON b2 '%s' '%s'  ",JSON.stringify(btn2),formatElementStatus(btn2));    
            var btn3 = browser.element('button#btn3');
         //   console.log("BTN text '%j' '%s'  ",btn3.,formatElementStatus(btn3));   
            console.log("BTN JSON b3 '%s' ",JSON.stringify(btn3));    
            var btn_submit = browser.element('button#submit');
            //console.log("BTN text '%s' ",btn2.getText());    
            //console.log("Source" + btns.getSource() );        
    //        console.log("btns: " + btns);
            //page.break("Breaking");
            browser.click("#btn2");
                
        }catch (error) {
            console.log(console.log("In ERROR: for B3 - BTN JSON '%s' ",page.ElementToString(btn3[0])));    
            console.log(error);    
        }
        //this.btn2.click();
        //console.log(this.submit_form.typeOf());
        //page.break("Submitting");
        //this.form.submitForm();
    } },

    isAuthenticated: { value: function() {
        var text = browser.getText('#result').toString();
        //browser.debug();
        //console.log("Is auth "+text);
        //console.log("Type is " + typeof this.result);
        /*if(this.result.getValue().toString().includes('Authenticated ok'))
            return true; */
        if(String(text).includes('Authenticated ok'))
            return true;
        else
            return false;
     } },
    
     getResult: { value: function(){
         return this.result.getText();
     } },

    login: { value: function(username,password){
        this.form.username = username;
        this.form.password = password;
        this.submit();
        }
    }
});

module.exports = localPage

"use strict";
/// <reference path="typings/index.d.ts" />
import { Page as GenericPage } from "../../test/pages/page";

export module TIAADF{

export class Page extends GenericPage {
    elementByLabel(labelName:string){
        return LabledInput.getByLabel(labelName);
    }
};

export class Accordian{

};

export class LabledInput{
    _label: string;
    _element_id: string;
    _element_obj: WebdriverIO.Client<
            WebdriverIO.RawResult<WebdriverIO.Element> >; 
    //WebDriverIO.Client<RawResult<Element>>;
    _browser:WebdriverIO.Client<void>;
    static getByLabel(labelName:string){
        return new LabledInput(labelName); 
    }   

    constructor(labelName:string){
        //Dead ugly most remove this, and take from Page
        //todo: 
/*Task: 
 - make this run via GRUNT
  - Be able to set breakpoints anywhere in the code
 - See new feature on VS */
        var browser:WebdriverIO.Client<void>;
        debugger;
        if(!browser) {
            if(Page.replacementBrowser){
                this._browser = Page.replacementBrowser;
                browser = this._browser;
            }  
            else throw new Error('browser not set');          
        }        
        let labels = this._browser.elements("labels").then(()=>{console.log(labels);})
        //console.log(labels);
        /*labels.forEach(element => {
            console.log('\nElement' + element);
            if (element.id == labelName) {
                this._element_obj = browser.element(this._element_id);
            }
        });*/
        Read this 
        https://ponyfoo.com/articles/understanding-javascript-async-await
        var obj = this._browser.getHTML('body');
        console.log("my object: %o", obj);
        throw new Error(`Label ${labelName} not found` + this._browser.getHTML('body'));
        
    }

    get innerWdioElement(){
        return this._element_obj;
    }

    get id(){
        return this._element_id;
    }

    get value():string{
        var val = this._element_obj.getValue(this._element_id);
        return this.stringJoin(val);
    }
    set value(val: string){
        this._element_obj.setValue(this._element_id,val);
    }

    get html():string{
        return this.stringJoin(this._element_obj.getHTML(this._element_id));
    }

    stringJoin(value: WebdriverIO.Client<string|string[]>):string{
        throw new Error('NotImplemented');
        //return "Joined";
    }
};

};
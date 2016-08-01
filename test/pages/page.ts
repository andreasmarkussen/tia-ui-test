"use strict";
import { Client, Element } from "webdriverio"; 
/// <reference path="typings/index.d.ts" />
var browser;
export class Page{
    allowHostChange:Boolean = false;
    lastRequestedUrl:String;
    lastRequestedHost:String;
    static replacementBrowser:any;

    /** get a safe browser, that can be assigned from Page */
    get browser():WebdriverIO.Client<void>{
        if(browser)
            return browser;
        if(Page.replacementBrowser){
            browser = Page.replacementBrowser;
            console.log('Setting the browser');            
            return Page.replacementBrowser;
        }
        throw new Error("Replacement browser not set on Page");
    }

    open(url:string){
        this.browser.url(url);
    }

    openShort(path: string){
        this.browser.url('/' + path);
        this.browser.debug();
    }

   openUrl(url: string, titlePattern: string  ) {
    let reTitlePattern:RegExp = new RegExp(titlePattern);
    if(this.lastRequestedUrl !== url){
        this.browser.url(url);
        //if(reTitlePattern.test(browser.getTitle()))        
        let browserTitle:string = "My Title";
        browserTitle = ""+this.browser.getTitle();
        if(reTitlePattern.test(browserTitle))
        {
            this.lastRequestedUrl = url;                    
        }
        else
            throw new Error("openUrl('"+url+"') Failed \n" + ' Title pattern ' + titlePattern 
                + ' not matched, it was "' + this.browser.getTitle()+ '"' );
            
    } 
    //browser.debug();
   }


    break(msg) {
    console.log("Break on " + msg);

    //break();
    }

    ElementToString(element: Element){

    }

    ElementsToString(element: Element[]){
        
    }
};



"use strict";
/// <reference path="typings/index.d.ts" />
var browser;
class Page {
    constructor() {
        this.allowHostChange = false;
    }
    /** get a safe browser, that can be assigned from Page */
    get browser() {
        if (browser)
            return browser;
        if (Page.replacementBrowser) {
            browser = Page.replacementBrowser;
            console.log('Setting the browser');
            return Page.replacementBrowser;
        }
        throw new Error("Replacement browser not set on Page");
    }
    open(url) {
        this.browser.url(url);
    }
    openShort(path) {
        this.browser.url('/' + path);
        this.browser.debug();
    }
    openUrl(url, titlePattern) {
        let reTitlePattern = new RegExp(titlePattern);
        if (this.lastRequestedUrl !== url) {
            this.browser.url(url);
            //if(reTitlePattern.test(browser.getTitle()))        
            let browserTitle = "My Title";
            browserTitle = "" + this.browser.getTitle();
            if (reTitlePattern.test(browserTitle)) {
                this.lastRequestedUrl = url;
            }
            else
                throw new Error("openUrl('" + url + "') Failed \n" + ' Title pattern ' + titlePattern
                    + ' not matched, it was "' + this.browser.getTitle() + '"');
        }
        //browser.debug();
    }
    break(msg) {
        console.log("Break on " + msg);
        //break();
    }
    ElementToString(element) {
    }
    ElementsToString(element) {
    }
}
exports.Page = Page;
;

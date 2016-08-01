"use strict";
/// <reference path="typings/index.d.ts" />
const page_1 = require("../../test/pages/page");
var TIAADF;
(function (TIAADF) {
    class Page extends page_1.Page {
        elementByLabel(labelName) {
            return LabledInput.getByLabel(labelName);
        }
    }
    TIAADF.Page = Page;
    ;
    class Accordian {
    }
    TIAADF.Accordian = Accordian;
    ;
    class LabledInput {
        constructor(labelName) {
            //Dead ugly most remove this, and take from Page
            //todo: 
            /*Task:
             - make this run via GRUNT
              - Be able to set breakpoints anywhere in the code
             - See new feature on VS */
            var browser;
            debugger;
            if (!browser) {
                if (Page.replacementBrowser) {
                    this._browser = Page.replacementBrowser;
                    browser = this._browser;
                }
                else
                    throw new Error('browser not set');
            }
            let labels = this._browser.elements("labels").then(() => { console.log(labels); });
            //console.log(labels);
            /*labels.forEach(element => {
                console.log('\nElement' + element);
                if (element.id == labelName) {
                    this._element_obj = browser.element(this._element_id);
                }
            });*/
            Read;
            this;
            https: var obj = this._browser.getHTML('body');
            console.log("my object: %o", obj);
            throw new Error(`Label ${labelName} not found` + this._browser.getHTML('body'));
        }
        static getByLabel(labelName) {
            return new LabledInput(labelName);
        }
        get innerWdioElement() {
            return this._element_obj;
        }
        get id() {
            return this._element_id;
        }
        get value() {
            var val = this._element_obj.getValue(this._element_id);
            return this.stringJoin(val);
        }
        set value(val) {
            this._element_obj.setValue(this._element_id, val);
        }
        get html() {
            return this.stringJoin(this._element_obj.getHTML(this._element_id));
        }
        stringJoin(value) {
            throw new Error('NotImplemented');
            //return "Joined";
        }
    }
    TIAADF.LabledInput = LabledInput;
    ;
})(TIAADF = exports.TIAADF || (exports.TIAADF = {}));
;

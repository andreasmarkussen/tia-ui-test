# tia-ui-test
A prototype of testing TIA with UI - HOBBY PROJECT

based on 
# auto-ui-2016
Example of state-of-the-art Automatic UI testing, that benefits the business, is easy to write and maintain, and shows the right bugs in the system under test.
The three goals above, are prioritized, however, if one of the three fail, then none of the others matter.


I am doing this survey or example, since I want to show that it is posible to do value ensuring business scenario validation. 
In my time as developer, teamlead, head of development and product owner, I have seen many kinds of automatic test, and some added great value, and others where just complex.

# Setting up the basics
## Cucumber, node, etc..'

npm install -g webdriverio jasmine phantomjs jasmine-node
npm install -g cucumber mocha
npm install -g typescript typings

## Installation

```shell
npm install -g webdriverio
```

or if you want to use the wdio test runner

```shell
npm install -g webdriverio
npm install selenium-standalone@latest -g
```

# Repositories that I got inspiration from

https://github.com/webdriverio/webdriverio/
https://github.com/daspec/daspec-js-npm-example/


## Modules and code structure
https://www.typescriptlang.org/docs/handbook/classes.html
https://blog.oio.de/2014/01/31/an-introduction-to-typescript-module-system/ 
https://tc39.github.io/ecma262/#sec-ecmascript-language-modules-and-scripts
http://guybedford.com/practical-workflows-for-es6-modules
https://www.sitepoint.com/transpiling-es6-modules-to-amd-commonjs-using-babel-gulp/ 

http://requirejs.org/docs/commonjs.html
https://www.typescriptlang.org/docs/handbook/module-resolution.html

## Typings

typings install dt~mocha --global
typings install dt~q --global
typings install dt~webdriverio --global





#Build - TODO

Steps
 1. Typescript conversion
 2. ES6 linting
 3. Unittesting with Jasmine (No real browsers - only local files via phanthom)
 4. End to end UI testing with Mocha
 5. End to end UI testing with cuecumber (BDD style english clear text)

https://www.sitepoint.com/introduction-gulp-js/
https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html 

## Testing
https://dzone.com/articles/selenium-nodejs-and-mocha
https://github.com/mhevery/jasmine-node
http://blog.strafenet.com/2014/07/03/end-to-end-javascript-testing-is-easy-the-minimal-way-to-do-it/
https://blog.codeship.com/jasmine-node-js-application-testing-tutorial/
https://medium.com/@adrjohnston/my-first-few-hours-using-webdriver-io-jasmine-phantomjs-804f0fe143b7#.ttrxizjmn
http://seleniumhq.github.io/selenium/docs/api/javascript/
https://github.com/webdriverio/webdriverio
http://engineering.wingify.com/posts/e2e-testing-with-webdriverjs-jasmine/


## Debuggin
https://code.visualstudio.com/docs/runtimes/nodejs

## ADF Coding and Element findings
http://stackoverflow.com/questions/28008494/using-innerhtml-inside-xpath-expression
http://webdriver.io/api/protocol/elements.html
http://stackoverflow.com/questions/4811962/how-to-css-select-element-based-on-inner-html


## JavaScript and Promisses
https://spring.io/understanding/javascript-promises

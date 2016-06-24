"use strict";
var LocalPage = require('..\\pages\\local.page');
var page = LocalPage;
var localWorkflow = Object.create(page, {
    /**
     * define elements
     */
    localPage: { get: function () { return LocalPage; } },

    login: { value: function (user, pass) {
        this.page.open();
        this.page.login(user, pass);
    }}
});

module.exports = localWorkflow.localPage;
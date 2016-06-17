var page = require('./page')

var localPage = Object.create(page, {
    /**
     * define elements
     */
    username: { get: function () { return browser.elements('#username'); } },
    password: { get: function () { return browser.elements('#password'); } },
    form:     { get: function () { return browser.elements('#login'); } },
    flash:    { get: function () { return browser.elements('#flash'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.openUrl.call(this, 'file///c:/dev/test.html');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } },
    
    login: { value: function(username,password){
        this.form.username = username;
        this.form.password = password;
        this.form.submit();
        }
    }
});

module.exports = localPage

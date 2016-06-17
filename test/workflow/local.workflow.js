var LocalPage = require('..\\pages\\local.page');

var localWorkflow = Object.create(page, {
    /**
     * define elements
     */
    localPage: { get: function () { return LocalPage; } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        localPage.open();
        
        
        
        page.openUrl.call(this, 'file///c:/dev/test.html');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = localWorkflow

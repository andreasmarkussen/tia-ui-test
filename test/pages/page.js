function Page () {
}

Page.prototype.open = function (path) {
    browser.url('/' + path)
}

Page.prototype.openUrl = function (path) {
    browser.url(path)
}

module.exports = new Page()

(function (open) {
    XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
        var redirectURL = "https://lazyman-server.shit.city/api/key?url="
        if (url.indexOf('mlb-ws') != -1) {
            rewrittenUrl = redirectURL + url;
        } else if (url.indexOf('svc.nhl') != -1) {
            rewrittenUrl = redirectURL + url;
        } else if (url.indexOf("playback.svcs.mlb.com") != -1) {
            rewrittenUrl = redirectURL + url;
        } else {
            rewrittenUrl = url;
        }
        open.call(this, method, rewrittenUrl, async, user, pass);
    };
})(XMLHttpRequest.prototype.open);

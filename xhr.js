(function (open) {
    XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
        if (url.indexOf('mlb-ws') != -1) { rewrittenUrl = url.replace("https://mlb-ws-mf.media.mlb.com", "https://freegamez.ga"); } else if (url.indexOf('svc.nhl') != -1) { rewrittenUrl = url.replace("https://mf.svc.nhl.com", "https://freegamez.ga"); } else if (url.indexOf("playback.svcs.mlb.com") != -1) { rewrittenUrl = url.replace("https://playback.svcs.mlb.com", "https://freegamez.ga"); } else if (url.indexOf('ha.m3u8') != -1) { rewrittenUrl = url.split('ha.m3u8?url=')[1]; } else { rewrittenUrl = url; }
        open.call(this, method, rewrittenUrl, async, user, pass);
    };
})(XMLHttpRequest.prototype.open);

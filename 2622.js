var TimeLimitedCache = function () {
    obj = {}
    Timerids = {}
}
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let keys = Object.keys(obj);
    for (i of keys) {
        if (i == key) {
            clearTimeout(Timerids[key]);
            obj[key] = value;
            var clearId = setTimeout((key) => {
                delete obj[key];
            }, duration);
            Timerids[key] = clearId;
            return true;
        }
    }
    obj[key] = value;
    var clearId = setTimeout(() => {
        console.log(obj[key])
        delete obj[key];
    }, duration)
    Timerids[key] = clearId;
    return false;

}
TimeLimitedCache.prototype.get = function (key) {
    let keys = Object.keys(obj)
    for (i of keys) {
        if (i == key) {
            return obj[key];
        }
    }
    return -1;
}
TimeLimitedCache.prototype.count = function () {
    let keys = Object.keys(obj);
    return keys.length;
}
let timelimitedcache = new TimeLimitedCache();
console.log(timelimitedcache.set(1, 42, 100));
console.log(timelimitedcache.get(1));
console.log(timelimitedcache.count());
console.log(timelimitedcache.get(1));
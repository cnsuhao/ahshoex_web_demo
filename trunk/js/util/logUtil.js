/**
 * Created by chang on 14/11/1.
 */
define(function(require,exports) {
    var isDebug = true;
    var logUtil = {};

    logUtil.log = function(msg) {
        if(isDebug) {
            console.log(msg);
        } else {
            window.onerror = function(msg,url,l) {
                logUtil.log('捕获全局异常');
                logUtil.log('ERROR:'+msg);
                logUtil.log('URL:'+url);
                logUtil.log('LINE:'+l);
                return true;
            };
        }
    };

    logUtil.error = function(msg) {
        if(isDebug) {
            console.log(msg);
        } else {
            window.onerror = function(msg,url,l) {
                logUtil.log('捕获全局异常');
                logUtil.log('ERROR:'+msg);
                logUtil.log('URL:'+url);
                logUtil.log('LINE:'+l);
                return true;
            };
        }
    };

    exports.logUtil =logUtil;
});
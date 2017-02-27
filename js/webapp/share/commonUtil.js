/**
 * Created by W.J.Chang on 2015/1/15.
 */
layui.define(['layer','logUtil'],function(exports) {
    var commonUtil = {};
    var logUitl = layui.logUtil;
    var layer = layui.layer;

    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = decodeURIComponent(window.location.search).substr(1).match(reg);
        if (r != null) return r[2]; return null;
    }

    commonUtil.getArgs = function(name) {
        return getQueryString(name);
    };

    commonUtil.getDateString = function (date) {
        if(date == null || date == '0000-00-00 00:00:00' || date == "" || date == "1970/1/1") {
            return '';
        }
        var temp = new Date(date);
        return temp.getFullYear() + '/' + (temp.getMonth() + 1) + '/' + temp.getDate();
    };

    commonUtil.getTimeString = function (date) {
        if(date == null || date == '0000-00-00 00:00:00' || date == "" || date == "1970/1/1") {
            return '';
        }

        var temp = new Date(date);
        return temp.getFullYear() + '/' + (temp.getMonth() + 1) + '/' + temp.getDate() + ' ' + temp.getHours() + ':' + temp.getMinutes();
    };

    commonUtil.filter =function(arr) {
        try {
            if(Object.prototype.toString.call(arr) == '[object Array]') { //判断是否为数组
                for(var i=0; i<arr.length; i++) {
                    for(var item in arr[i]) {

                        if(arr[i].hasOwnProperty(item) && (arr[i][item] == 0 || arr[i][item] == null || arr[i][item] == '0000-00-00 00:00:00' || arr[i][item] == "1970/1/1")) {
                            arr[i][item] = '';
                        }
                    }
                }
            } else if(Object.prototype.toString.call(arr) == '[object Object]') { // 判读是否为对象
                for(var item in arr) {

                    if(arr.hasOwnProperty(item) && (arr[item] == 0 || arr[item] == null || arr[item] == '0000-00-00 00:00:00' || arr[item] == "1970/1/1")) {
                        arr[item] = '';
                    }
                }
            } else if(arr == null || arr == undefined || arr == '0000-00-00 00:00:00' || arr == "1970/1/1") {
                arr = ''
            }

            return arr;
        }catch (e){
            logUitl.log(e);
            return '';
        }
    };

    commonUtil.toast = function(msg) {
        layer.msg(msg,{offset:'300px',time:2000});
    };

    commonUtil.uuidFast = function() {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''), uuid = new Array(36), rnd=0, r;
        for (var i = 0; i < 36; i++) {
            if (i==8 || i==13 ||  i==18 || i==23) {
                uuid[i] = '-';
            } else if (i==14) {
                uuid[i] = '4';
            } else {
                if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
                r = rnd & 0xf;
                rnd = rnd >> 4;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
        return uuid.join('');
    };

    commonUtil.isContains = function(arr,item) {
        var flag = false;
        for(var i=0; i<arr.length; i++) {
            if(arr[i] == item) {
                flag = true;
                break;
            }
        }

        return flag;
    };

    commonUtil.htmlDecode = function(s){
        var div = document.createElement('div');
        div.innerHTML = s;
        return div.innerText || div.textContent;
    };

    exports('commonUtil', commonUtil);
});
/**
 * 数据的操作存储以及数据处理
 */
import LogUtils from './../logUtils/index';
/**
 * @description 设置Cookie
 * @param { String } name cookie名称
 * @param { String } value cooke的值
 * @param { Number } exp 过期时间 默认2小时 单位毫秒
 * @example
 * // 设置name为test的值为12345，设置过期时间为1小时
 * setCookie('test', '12345', 60 * 60 * 1000)
 */
export function setCookie(name, value, exp = 60 * 60 * 2 * 1000) {
    const date = new Date();
    date.setTime(date.getTime() + exp);
    document.cookie = `${name}=${escape(value)};expires=${date.toUTCString()}`;
}
/**
 * @description 获取Cookie
 * @param { String } name cookie名称
 * @returns { (Array | Null) } 返回数据
 * @example
 * getCookie('test')
 */
export function getCookie(name) {
    if (name) {
        const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
        const arr = document.cookie.match(reg);
        return arr && arr[2] ? arr[2] : null;
    }
    const getAllCookies = [];
    if (document.cookie.length) {
        const arrCookie = document
            .cookie
            .split('; ');
        for (let k in arrCookie) {
            getAllCookies.push({
                name: `${unescape(arrCookie[k].split('=')[0])}`,
                value: `${unescape(arrCookie[k].split('=')[1])}`
            });
        }
        return getAllCookies;
    }
    else {
        return null;
    }
}
/**
 * @description 删除Cookie
 * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
 * @returns { Array } 是一个伪数组
 * @example
 * removeCookie('test')
 */
export function removeCookie(name) {
    const date = new Date();
    date.setTime(date.getTime() - 1);
    if (name) {
        const cookieInfo = getCookie(name);
        if (cookieInfo !== null) {
            document.cookie = `${name}=${cookieInfo};expires=${date.toUTCString()}`;
        }
        return;
    }
    const allCookies = getCookie();
    for (let k in allCookies) {
        document.cookie = `${allCookies[k].name}=${allCookies[k].value};expires=${date.toUTCString()}`;
    }
}
/**
 * @description 从数组中获取num 个随机不重复的元素
 * @param { Arrary } arr 数组
 * @param { Number } num 取出的数量
 * @returns { Arrary } 返回数组集合
 * @example
 * getRandomDataFromArr([1,2,3,4,5,44,3,2,1,9,0,45,678], 5)
 */
export function randomDataFromArr(arr, num) {
    const newArr = Array.from(new Set(arr));
    const l = newArr.length;
    const resultArr = new Array();
    if (!(num > 0)) {
        LogUtils.logError(`数量必须大于0`, '[d-utils] StoreUtils randomDataFromArr => ');
        return;
    }
    if (newArr) {
        for (let i = 0; i < (num > l ? l : num); i++) {
            let index = ~~(Math.random() * newArr.length);
            resultArr.push(newArr[index]);
            newArr.splice(index, 1);
        }
        return resultArr;
    }
}
/**
 * @description 检索数据类型并返回数据类型名称 object array string undefined bool number null 等等...
 * @param { Any } data 要判断的数据
 * @example
 * checkType('1')   // string
 * @example
 * checkType({})   // object
 * @example
 * checkType([])   // array
 * @example
 * checkType(localStorage)   // storage
 */
export function checkType(data) {
    let str = Object.prototype.toString.call(data);
    return str.match(/\[object (.*?)\]/)[1].toLowerCase();
}
/**
 * @description 深拷贝
 * @param { Object } obj 被拷贝的对象
 * @return { Object } 返回新的对象
 * @example
 * let a = {
 *   a: 1,
 *   b: 2,
 *   c: 3,
 *   d: [1, 2]
 * }
 * let b = deepClone(a)
 * a.d[0] = 3
 * console.log(a)
 * // a: {a: 1, b: 2, c: 3, d: [3, 2]}
 * console.log(b)
 * // b: {a: 1, b: 2, c: 3, d: [1, 2]}
 * // 此时修改a.d[0]的值， a对象变化了，b对象没有随之改变
 */
export function deepClone(obj) {
    const result = {};
    const keys = Object.keys(obj);
    let type;
    for (let k of keys) {
        type = checkType(obj[k]);
        switch (type) {
            case 'object':
                result[k] = deepClone(obj[k]);
                break;
            case 'array':
                result[k] = [].concat(obj[k]);
                break;
            default:
                result[k] = obj[k];
        }
    }
    return result;
}
/**
 * @description extend继承方法 Object.assign(...arg)的包装
 * @param { Any }   参数为object对象
 * @returns { Object } 返回一个新的对象
 * @example
 * extend({a: 1}, {a: 2})   // {a: 1}
 * ⚠️ Object.assign属于浅拷贝,为了后续的操作不影响到之前的数据,最好在extend的第一个参数设置为{}
 */
export function extend(...arg) {
    return deepClone(Object.assign({}, ...arg));
}
/**
 * @description 数组去重
 * @param { Arrary } arr 要去重的arr
 * @return { Array } 返回一个新的数组，不改变原来的数组
 * @example
 * // [1, 2, 3, undefined, "4"]
 * uniqueArray([1,2,3,3,,3,3,'4',"4",'4',])
 */
export function uniqueArray(arr) {
    return [...new Set(arr)];
}
/**
 * @description 文件转成blob流
 * @param { File } dataUrl  单个file
 * @return { Blob } 返回新的文件流  可以append到formdata中
 */
export function dataUrlToBlob(dataUrl) {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
/**
 * @description 返回数组之间的并集
 * @param { Array } args 可以是多个数组，数量不限制
 * @return { Array } 返回数组
 */
export function union(...args) {
    return Array.from(new Set([].concat(...args)));
}
/**
 * @description 返回两个数组之间的交集
 * @param { Array } args 可以是多个数组，两个数组
 * @return { Array } 返回数组
 */
export function intersection(a, b) {
    const setB = new Set(b);
    return a.filter((item) => {
        return setB.has(item);
    });
}
/**
 * @description 返回两个数组之间的差集
 * @param { Array } args 可以是多个数组，两个数组
 * @return { Array } 返回数组
 */
export function diffset(a, b) {
    const setB = new Set(b);
    return a.filter((item) => {
        return !setB.has(item);
    });
}
/**
 * @description 判断元素在数组或者字符串里存在的次数
 * @param { Array | String } target 存在的数组或字符串
 * @param { String | Number | ... } s 目标元素  值类型的元素
 * @return { Number } 数量
 */
export function calcQuantity(target, s) {
    let newTarget = typeof target === 'string' ? target.split('') : target;
    return newTarget.reduce((t, c) => {
        return s === c ? t + 1 : t;
    }, 0);
}

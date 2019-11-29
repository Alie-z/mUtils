import './style.less'
/**
 * @author ifmiss
 * @version 1.1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
// import { DomUtils } from './../dist/lib/index'
// import EventUtils from './lib/eventUtils/index'
import { DeviceUtils } from './lib/index'
import { StoreUtils } from './lib/index'
import { LogUtils, GenericUtils, UrlUtils, WeixinUtils, ExpUtils, HttpRequestUtils, ImageUtils, PerformanceUtils, PromiseUtils } from './lib/index'
import { axiosConfig } from './lib/httpRequestUtils/axiosConfig'
import * as Dutils from './lib/index'
import * as FnUtils from './lib/fnUtils'
import * as DomUtils from './lib/domUtils';
import { rejects } from 'assert';
import EventUtils from './lib/eventUtils';
import PaiXu from './test/paixu'
import ErChaShu from './test/erchashu'
import { combineArray, lengthOfLongestSubstring } from './test/arr'
EventUtils.on('axios-loading', (res) => {
  alert(1)
})
PerformanceUtils.logger()
HttpRequestUtils.init(axiosConfig)
HttpRequestUtils.get('https://www.daiwei.site/php/web_v2_api/home.php', {
  inAjax: 1,
  do: 'getImageByBingJson'
})

let t = 0
setTimeout(() => {
  t = 1
}, 5000)

const log = function (e) {
  console.log('clickHandler', e)
}

const clickHandler = GenericUtils.debounce(function (e) {
  log(e)
}, 1000)

document.getElementById('disc').onclick = clickHandler

async function aaa () {
  console.log('start')
  // const [err, res] = await PromiseUtils.wrap(PromiseUtils.wait(() => {
  //   console.log('t', t)
  //   return t > 0
  // }, 1000, 500).then(() => {
  //   console.log('end')
  // }).catch(e => {
  //   console.log(e)
  // }))
  // console.log(err, res)
  await PromiseUtils.sleep(3000)
  const [err, res] = await PromiseUtils.wrap(HttpRequestUtils.get('https://www.daiwei.site/php/web_v2_api/home.php', {
    inAjax: 1,
    do: 'getImageByBingJson'
  }))
  console.log(err, res)
  console.log('this is realy end')
}
aaa()


DeviceUtils.initRem()
DeviceUtils.checkLayoutOrientation()
console.log('-----------------------')
console.log(GenericUtils.calcStringLength('☮✌☏1{', true))

async function bbb () {
  await PromiseUtils.sleep(5000)
  console.log('bbbbbbbbbbbbbbbbbb')
} 
bbb()

DomUtils.cssFilter(document.body, 'grayscale', '1')

console.log(GenericUtils.base64Encode('hello world!'))
console.log(GenericUtils.base64Decode('aGVsbG8gd29ybGQh'))

WeixinUtils.initWxConfig({
  appId: '11111',
  timestamp: new Date().getTime(),
  nonceStr: '11111',
  signature: '111111',
  jsApiList: ['hideMenuItems', 'showMenuItems']
})


let Person = {
  name: 'Tom',
  say (self = '1111', other) {
    console.log('Person.say')
    console.log(`我叫${this.name}---${self}---${other}`)
  }
}
// Person.say()

let Student = {
  firstName: 'dai',
  lastName: 'wei',
  getName () {
    console.log(`FullName: ${this.firstName} -- ${this.lastName}`)
  }
}

let Person1 = {
  name: 'Tom 1',
  firstName: 'd',
  lastName: 'w',
}


LogUtils.logDefault(UrlUtils.stringifyUrl({a: 1}))
LogUtils.logDefault(UrlUtils.stringifyUrl({}))
LogUtils.logDefault(UrlUtils.stringifyUrl({a: 1, b: '2'}))
LogUtils.logDefault(UrlUtils.stringifyUrl({a: 1, b: '2', c: 3, d: 'c'}))
LogUtils.logDefault(UrlUtils.stringifyUrl({a: 1, b: '2', c: 3, d: 'c', e: 'f'}))

LogUtils.logDefault(UrlUtils.parseUrl('https://www.daiwei.site/?a=1&b=2&url=a.html?b=1&c=1'))

LogUtils.logInfo(UrlUtils.deleteUrlParam(['code', 'name']))

LogUtils.logInfo(StoreUtils.uniqueArray([1, 2, 3, 4, 5, 3, 2, 1, 0]))

LogUtils.logInfo(GenericUtils.strTrim(' asda '))

// GenericUtils.notification()
// FnUtils.compose(alert, GenericUtils.strTrim)(1)

const arr = [1, 3, 44, 22, 0, -1, 9, 56, 99, 87, -5]

LogUtils.logDefault(arr)
console.log('-----------------------')
LogUtils.logInfo(PaiXu.bubbling(arr.slice()), '冒泡排序')
console.log('-----------------------')
LogUtils.logInfo(PaiXu.choice(arr.slice()), '选择排序')
console.log('-----------------------')
LogUtils.logInfo(PaiXu.insert(arr.slice()), '插入排序')
console.log('-----------------------')
LogUtils.logInfo(PaiXu.quickSort(arr.slice()), '快速排序')

const selfTree = new ErChaShu()
selfTree.insert(4)
selfTree.insert(2)
selfTree.insert(3)
selfTree.insert(1)
selfTree.insert(0)
selfTree.insert(5)
selfTree.insert(6)
selfTree.insert(8)
selfTree.insert(9)
selfTree.insert(10)

console.log(selfTree)
console.log('find', selfTree.find(9))
console.log(selfTree.getDeep(selfTree.root, 0))

// 中序
const s = new ErChaShu()
s.insert(2)
s.insert(1)
s.insert(3)
s.insert(0)
s.insert(1)
LogUtils.logInfo(s.frontEach(s.root), '前序遍历')
LogUtils.logInfo(s.midEach(s.root), '中序遍历')
LogUtils.logInfo(s.afterEach(s.root), '后序遍历')
console.log('s.frontEach(2)', s.frontEach(s.root))
// console.log('s.midEachNoRecursion(2)', s.midEachNoRecursion(s.root))
// s.frontEachNoRecursion(s.root)
// console.log(s.afterEachNoRecursion(s.root))
s.showTree()

const a = x => y => z => {
  console.log(x)
  console.log(y)
  console.log(z)
}
a(1)(2)(3)

LogUtils.logInfo(combineArray(['1', '2', '3']), '数组全排列')

LogUtils.logInfo(lengthOfLongestSubstring("vvvcc"), 'lengthOfLongestSubstring')

LogUtils.logInfo(StoreUtils.union([1, 2, 3], [2, 3, 4], 4, '3', '3', ['3']), '----------------')

LogUtils.logInfo(StoreUtils.intersection([2], [2, 3, 4]))
LogUtils.logInfo(StoreUtils.diffset([1, 2, 3], [2, 3, 4]))

function add (a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
console.log(add(2)(3)(4))

LogUtils.logInfo(StoreUtils.calcQuantity([1, 2, 3, 4, 4, 4, 3, 4, 5,2, 1, 3, 4], 1), 'calcCountInArray')

LogUtils.logInfo(StoreUtils.calcQuantity('1234443452134', '1'), 'calcCountInArray')


const testCompose = (name, age) => {
  console.log('this name is: ', name)
  console.log('this age is: ', age)
  return [name, age]
}
const full = (name, age) => {
  console.log(`this is full: ${name} & ${age}`)
}

FnUtils.compose(full, testCompose)('d-utils', 1)

console.log('----------split----------')
const testCur = function (a, b, c) {
  console.log('a - b - c', a - b - c)
}
const c = FnUtils.curry(testCur, 4)
const d = FnUtils.curry(testCur)
c(2)(3);

d(1, 2, 3);

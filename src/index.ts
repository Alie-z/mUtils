import './style.less'
/**
 * @author Aliez
 * @version 1.0.5
 * @description 关于通用js的收录以及整合方便日后使用
 */
import Api from "./lib/requestUtils/http";
import {notification} from './lib/feedbackUtils/index'
// dom操作
// import { DomUtils } from './../dist/lib/index'
import EventUtils from './lib/eventUtils/index'
import {DeviceUtils} from './lib/index'
import {StoreUtils} from './lib/index'
import {
  LogUtils,
  GenericUtils,
  UrlUtils,
  ExpUtils,
  ImageUtils,
  PerformanceUtils,
  PromiseUtils,
  RequestUtils,
  FeedbackUtils
} from './lib/index'
import * as FnUtils from './lib/fnUtils/index';
import * as DomUtils from './lib/domUtils/index';
import PaiXu from './test/paixu'
import ErChaShu from './test/erchashu'
import {combineArray, lengthOfLongestSubstring} from './test/arr'


FeedbackUtils.Toast('toast')
const params = {
  baseURL: 'https://www.uniqorn.vip/api/',
}
const API = new Api(params)

async function Apidemo() {
  const res = await API._getDetail({id: '74501'})
}

Apidemo()

EventUtils.on('axios-loading', (res) => {
  alert(1)
})
PerformanceUtils.logger()


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


DeviceUtils.initRem()
DeviceUtils.checkLayoutOrientation()
console.log('-----------------------')
console.log(GenericUtils.calcStringLength('☮✌☏1{', true))

async function bbb() {
  await PromiseUtils.sleep(5000)
  console.log('bbbbbbbbbbbbbbbbbb')
}

bbb()

DomUtils.cssFilter(document.body, 'grayscale', '.1')

console.log(GenericUtils.base64Encode('hello world!'))
console.log(GenericUtils.base64Decode('aGVsbG8gd29ybGQh'))


LogUtils.logDefault(UrlUtils.stringifyUrl({a: 1}))
LogUtils.logDefault(UrlUtils.stringifyUrl({}))
LogUtils.logDefault(UrlUtils.stringifyUrl({a: 1, b: '2'}))
LogUtils.logDefault(UrlUtils.stringifyUrl({a: 1, b: '2', c: 3, d: 'c'}))
LogUtils.logDefault(UrlUtils.stringifyUrl({a: 1, b: '2', c: 3, d: 'c', e: 'f'}))

LogUtils.logDefault(UrlUtils.parseUrl('https://www.daiwei.site/?a=1&b=2&url=a.html?b=1&c=1'))

LogUtils.logInfo(UrlUtils.deleteUrlParam(['code', 'name']))

LogUtils.logInfo(StoreUtils.uniqueArray([1, 2, 3, 4, 5, 3, 2, 1, 0]))

LogUtils.logInfo(GenericUtils.strTrim(' asda '))

notification()
FnUtils.compose(alert, GenericUtils.strTrim)(1)

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
LogUtils.logInfo(StoreUtils.diffset([1, 2, 3], [2, 3, 4]), '差集----')

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

console.log(add(2)(3)(4))

LogUtils.logInfo(StoreUtils.calcQuantity([1, 2, 3, 4, 4, 4, 3, 4, 5, 2, 1, 3, 4], 1), 'calcCountInArray')

LogUtils.logInfo(StoreUtils.calcQuantity('1234443452134', '1'), 'calcCountInArray')


const testCompose = (name, age) => {
  console.log('this name is: ', name)
  console.log('this age is: ', age)
  return [name, age]
}
const full = (name, age) => {
  console.log(`this is full: ${name} & ${age}`)
}

FnUtils.compose(full, testCompose)('mUtils', 1)

console.log('----------split----------')
const testCur = function (a, b, c) {
  console.log('a - b - c', a - b - c)
}
// const c = FnUtils.curry(testCur, 4)
const c = FnUtils.curry(testCur)
const d = FnUtils.curry(testCur)
c(2)(3);

d(1, 2, 3);

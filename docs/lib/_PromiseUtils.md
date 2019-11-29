# PromiseUtils
PromiseUtils 是关于代码阻塞，执行时的操作

## wait
wait 是一个方法，在一个async函数中，wait代码通过之后才会执行后续的代码，这个在对象存在或者资源存在之后初始化
```ts
/**
 * @description 等待加载
 * @param { funciton } callback 一个停止轮训的while事件  返回值为boolean  返回true的时候则停止阻塞  开始执行后续的代码
 * @param { number } loopTime 单次轮训的时长  默认100毫秒
 * @param { number } timeout 超时的时间   默认10000毫秒  10秒
 * @return Promise
 */
```
##### `Demo`:
```ts
let t = 0
setTimeout(() => {
  t = 1
}, 5000)

async function aaa () {
  console.log('start')
  await PromiseUtils.wait(() => {
    return t > 0
  }, 1000, 10000).then(() => {
    console.log('end')
  }).catch(() => {
    console.log('time out')
  })
  console.log('哈哈哈哈啊哈哈哈哈')
}
aaa()
```

## requestOnLoad
`requestOnLoad` 是一个加载队列的操作，参数为promise数组
```ts
/**
 * @description 加载队列的操作
 * @param { promise[] } requestQueues 一个加载队列  promise的数组
 */
```
##### `Demo`:
```ts
async initData () {
  const promiseLists = []
  promiseLists.push(initOne())
  promiseLists.push(initTwo())
  promiseLists.push(initThree())
  await PromiseUtils.requestOnLoad(promiseLists)
  // todo
}
// initOne initTwo initThree 返回一个promise
```

## sleep
`sleep` 一个睡眠，阻塞async方法内的代码
```ts
/**
 * @description 睡眠
 * @param { number } timer  睡眠时长  执行后续的操作
 * @return promise
 */
```

##### `Demo`:
```ts
async waitTest () {
  await sleep(3000)
  console.log('这个log来自于 waitTest方法执行后的三秒输出')
}
waitTest()
```

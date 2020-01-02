# flexible
移动端rem适配方案

1. $ npm install postcss-pxtorem -S
2. import 'js-utils-m/lib/flexible'
3. 在`postcss.config.js`中
    ```javascript
    module.exports = {
      plugins: {
        'autoprefixer': {
          browsers: ['Android >= 4.0', 'iOS >= 7']
        },
        'postcss-pxtorem': {
          rootValue: 37.5, //可根据自己习惯配置
          propList: ['*']
        }
      }
    }
    ```
> 注意：在配置 postcss-loader 时，应避免 ignore node_modules 目录，这会导致 Vant 的样式无法被编译
>
> 除了rem 也可使用viewport来替代，w的兼容方案可以参阅《[如何在Vue项目中使用vw实现移动端适配](https://blog.csdn.net/ww430430/article/details/78403536)》一文。
>
>[css3新单位vw、vh、vmin、vmax的使用详解](https://www.hangge.com/blog/cache/detail_1715.html)

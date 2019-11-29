/**
 * 一个简单的发布订阅者模式
 */

interface IHandler {
  fn: Function,
  type: string,
  name: string
}

export default class EventUtils {
  /**
   * 键值对 对应事件名称以及数组的值
   */
  static handler = {}

  /**
   * on 方法 添加监听事件
   */
  static on (name: string, handler: Function): EventUtils {
    const i:IHandler = {
      fn: handler,
      type: 'on',
      name: name
    }
    if (Object.keys(EventUtils.handler).includes(name)) {
      EventUtils.handler[name].push(i)
      return EventUtils
    }
    EventUtils.handler[name] = [].concat(i)
    return EventUtils
  }

  /**
   * off 方法 移除监听事件
   */
  static off (name: string, handler: Function): EventUtils {
    const event: any[] = EventUtils.handler[name]
    if (event) {
      for (let i = event.length - 1; i >= 0; i--) {
        if (event[i].fn === handler) {
          event.splice(i, 1)
        }
      }
    }
    return EventUtils
  }

  /**
   * emit 方法 触发监听的事件
   */
  static emit (name: string, ...args: any): EventUtils {
    const event = EventUtils.handler[name]
    let newEvent = []
    event && event.length && event.forEach((item: IHandler, index: number) => {
      item.fn.call(this, ...args)

      // 如果有只监听一次的事件
      if (item.type !== 'once') {
        newEvent.push(event.slice(index, index + 1))
      }
    })

    const hasOnce = event && event.length && event.some((item: IHandler) => {
      return item.type === 'once'
    })

    if (hasOnce) {
      EventUtils.handler[name] = newEvent
    }

    // 这里做一个执行完成之后的 once代码 off 的操作
    return EventUtils
  }

  /**
   * once 方法 添加事件 只会被执行一次
   */
  static once (name: string, handler: Function): void {
    EventUtils.on(name, handler)
    EventUtils.handler[name][0]['type'] = 'once'
  }
}

import { fnTime } from './../lib/decoratorUtils'
export default class PaiXu {
  // 冒泡
  @fnTime
  // 双层循环，相邻的大小排序
  static bubbling (arr: number[]): number[] {
    let i = arr.length, j
    while (i > 0) {
      for (j = 0; j < i - 1; j ++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
      i--
    }
    return arr
  }

  // 选择
  @fnTime
  // 判断所有的元素是否比第j个元素小，小的话替换位置，再次遍历，是否比第j+1个元素小，成立替换，不成立判断是否比j+2小，以此类推
  static choice (arr: number[]): number[] {
    const len: number = arr.length
    for (let i = 0; i < len - 1; i++) {
      for (let j = i; j < len; j ++) {
        if (arr[j] < arr[i]) {
          [arr[i],arr[j]] = [arr[j],arr[i]];
        }
      }
    }
    return arr
  }

  // 插入
  // n+1 和n比较，排序，形成一个部分的有序数组，再n+2和0 - n+1比较符合某一个区间则插入进去，形成有序数组，直到最后
  @fnTime
  static insert (arr: number[]): number[] {
    const len: number = arr.length
    for (let i = 1; i < len; i++) {
      for (let j = i; j > 0; j--) {
        if (arr[j] < arr[j - 1]) {
          [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        } else {
          break
        }
      }
    }
    return arr
  }

  // 快速排序
  // 一份为二，取一个基准值，大于基准值放右边，小于放左边，然后递归执行
  @fnTime
  static quickSort (arr: number[]): number[] {
    const sort = (arr: number[]): number[] => {
      if (arr.length <= 1) {
        return arr
      }
      const left = []
      const right = []
      const current: number = arr.splice(0, 1)[0]
      for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] > current) {
          right.push(arr[i])
        } else {
          left.push(arr[i])
        }
      }
      return sort(left).concat(current, sort(right))
    }
    return sort(arr)
  }
}
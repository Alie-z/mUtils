/**
 * 1分钟内显示刚刚 , 1小时内显示xx分钟前 , 今日的显示时分 , 昨天显示昨天+时分 , 一年内显示月日时分 , 一年外显示年月日 .
 */
const timeChange = {
  //时间戳转换日期 (yyyy-MM-dd HH:mm:ss)
  formatDateTime (timeValue) {
    var date = new Date(timeValue)
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    var d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    var h = date.getHours()
    h = h < 10 ? ('0' + h) : h
    var minute = date.getMinutes()
    var second = date.getSeconds()
    minute = minute < 10 ? ('0' + minute) : minute
    second = second < 10 ? ('0' + second) : second
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
  },

//判断传入日期是否为昨天
  isYestday (timeValue) {
    var date = (new Date()) //当前时间
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() //今天凌晨
    var yestday = new Date(today - 24 * 3600 * 1000).getTime()
    return timeValue < today && yestday <= timeValue
  },

//判断传入日期是否属于今年
  isYear (timeValue) {
    var takeNewYear = formatDateTime(new Date()).substr(0, 4) //当前时间的年份
    var takeTimeValue = formatDateTime(timeValue).substr(0, 4) //传入时间的年份
    return takeTimeValue == takeNewYear
  },

//60000 1分钟
//3600000 1小时
//86400000 24小时
//对传入时间进行时间转换
  timeChange (timeValue) {
    var timeNew = Date.parse(new Date()) //当前时间
    var timeDiffer = timeNew - timeValue //与当前时间误差
    var returnTime = ''

    if (timeDiffer <= 60000) { //一分钟内

      var returnTime = '刚刚'

    } else if (timeDiffer > 60000 && timeDiffer < 3600000) { //1小时内

      var returnTime = Math.floor(timeDiffer / 60000) + '分钟前'

    } else if (timeDiffer >= 3600000 && timeDiffer < 86400000 && isYestday(timeValue) === false) { //今日

      var returnTime = formatDateTime(timeValue).substr(11, 5)

    } else if (timeDiffer > 3600000 && isYestday(timeValue) === true) { //昨天

      var returnTime = '昨天' + formatDateTime(timeValue).substr(11, 5)

    } else if (timeDiffer > 86400000 && isYestday(timeValue) === false && isYear(timeValue) === true) {	//今年

      var returnTime = formatDateTime(timeValue).substr(5, 11)

    } else if (timeDiffer > 86400000 && isYestday(timeValue) === false && isYear(timeValue) === false) { //不属于今年

      var returnTime = formatDateTime(timeValue).substr(0, 10)

    }

    return returnTime
  }

}
export default timeChange

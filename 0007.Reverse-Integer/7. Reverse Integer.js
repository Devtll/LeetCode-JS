/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0
  while (x !== 0) {
    result = result * 10 + (x % 10)
    // 去掉小数位
    x = (x / 10) | 0
  }
  // 判断是否已益处，没有益处就返回result本身否则返回0
  return (result | 0) === result ? result : 0
}

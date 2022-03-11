/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;
  let first = 0;
  let second = 1;
  while (n-- > 1) {
    second += first;
    first = second - first;
  }
  return second;
};
// @lc code=end

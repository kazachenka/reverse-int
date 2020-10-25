module.exports = function reverse (n) {
    n = Math.abs(n);
  let res = (''+n).split('').reverse().join('');
  return res;
}

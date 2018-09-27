module.exports = function getZerosCount(number) {
    let res = 0;
    while (number>0){
      number /= 5;
      res += Math.floor(number);

  }
  return res;
}

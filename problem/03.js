/**
 * [03.js]
 *
 * - closureWithParams 함수 내에 let base = 10이 존재합니다.
 * - closureWithParams 함수는 calc(op, num)를 반환합니다.
 *   1) op === '+'인 경우 base + num
 *   2) op === '-'인 경우 base - num
 *   3) 그 외에는 "invalid"를 반환합니다.
 *   4) base는 오직 calc 내부에서만 접근 가능합니다.
 *
 * @returns {Function} - calc(op, num)
 */

function closureWithParams() {
  let base = 10;

  function calc(op, num) {
    if (op === '+') {
      return base + num;
    } else if (op === '-') {
      return base - num;
    } else
      return "invalid";
  }


  return calc;

}

export { closureWithParams };

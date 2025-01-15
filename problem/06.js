/**
 * [06.js]
 *
 * 1) sum 함수는 인자로 a, b, c를 받아 그 합을 반환합니다.
 * 2) callResult 변수에 sum 함수를 call() 메소드를 사용하여 호출한 결과를 할당하세요.
 * 3) applyResult 변수에 sum 함수를 apply() 메소드를 사용하여 호출한 결과를 할당하세요.
 *
 */

function sum(a, b, c) {
  return a+b+c;
}

// TODO: 아래 코드를 작성하세요.
let callResult = sum.call(null, 1,2,3);
let applyResult = sum.apply(null, [1,2,3]);

export { sum, callResult, applyResult };

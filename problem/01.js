/**
 * [01.js]
 *
 * 1) 전역 변수 global = "Global"을 선언하세요.
 * 2) scopeChainOne 함수 내 지역 변수 b = "Local"을 선언하세요.
 * 3) scopeChainOne 함수 안의 내부 함수 inner()에서 전역 변수 a와 지역 변수 b를 합쳐서 "Global - Local" 을 return하세요.
 * 4) 최종적으로 scopeChainOne 함수에서 inner() 호출 결과를 return하세요.
 *
 * @returns {string} - 예: "Global - Local"
 */

// TODO: 전역 변수 선언
let global = "Global";

function scopeChainOne() {
  let b = "Local";
  function inner() {
    let a = global;
    return  `${a} - ${b}`;
  }

  return inner()

}

export { global, scopeChainOne };

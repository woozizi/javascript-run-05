/**
 * [02.js]
 *
 * 1) closureOne 함수 내에서 let count = 0; 선언
 * 2) closureOne 함수는 내부 함수 increment()를 return해야 함
 * 3) increment()를 호출할 때마다 count가 1씩 증가하고 그 값을 반환
 *
 * @returns {Function} - 클로저 함수
 */
function closureOne() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  return increment;
}

export { closureOne };

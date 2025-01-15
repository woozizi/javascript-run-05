/**
 * [04.js]
 *
 * - person 객체를 const로 선언하고 name과 greet 메서드를 포함하세요.
 * - greet 메서드는 "Hello, my name is " + this.name 을 반환해야 합니다.
 * - implicitBinding 함수는 person.greet()의 결과를 반환하세요.
 *
 * @returns {string} - "Hello, my name is Alice"
 */

const person = {
  name: 'Alice',
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

function implicitBinding() {
  return person.greet();
}

// export 수정 불가
export { person, implicitBinding };

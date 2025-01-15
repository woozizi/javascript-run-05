/**
 * [07.js]
 *
 * 1) Animal 클래스를 작성하세요.
 * 2) Animal 클래스는 name을 인자로 받아 인스턴스를 생성합니다.
 * 3) Animal 클래스는 name을 반환하는 getName 메소드를 가지고 있습니다.
 *  - ex) "My name is Leo"
 *  - ex) "My name is BMO"
 *
 */

class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return `My name is ${this.name}`;
  }
}

export { Animal };

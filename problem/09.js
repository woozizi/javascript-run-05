/**
 * [09.js]
 *
 * [문제 요구사항]
 * 1) Person 클래스를 작성하세요.
 * 2) Person 클래스는 name을 인자로 받아 인스턴스를 생성합니다.
 * 3) Person 클래스는 name을 반환하는 sayHello 메소드를 가지고 있습니다.
 * - ex) "Hello, I'm Alice"
 * - ex) "Hello, I'm Bob"
 * 4) Employee 클래스를 작성하세요.
 * 5) Employee 클래스는 name과 company를 인자로 받아 인스턴스를 생성합니다.
 * 6) Employee 클래스는 name과 company를 반환하는 sayHello 메소드를 가지고 있습니다.
 * - ex) "Hello, I'm Alice, I work at Google"
 * - ex) "Hello, I'm Bob, I work at Apple"
 * 7) Employee 클래스는 Person 클래스를 상속받아야 합니다.
 * 8) Employee 클래스는 Person 클래스의 sayHello 메소드를 오버라이딩합니다.
 *
 */

// TODO: 아래 코드를 작성하세요.
class Person {
  constructor(name){
    this.name = name;
  }

  sayHello() {
    return `Hello, I'm ${this.name}`;
  }
}
class Employee extends Person {
  constructor(name, company){
    super(name);
    this.company = company;
  }


  sayHello() {
    return `Hello, I'm ${this.name}, I work at ${this.company}`;
  }
}

export { Person, Employee };

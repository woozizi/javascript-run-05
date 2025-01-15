/**
 * [05.js]
 *
 * - car 객체 선언하세요.
 * - getBrand() 메소드는 this.brand를 반환해야합니다.
 * - bound() 함수를 호출하면 "Toyota" 반환할 수 있도록 this 를 바인딩하세요.
 *
 */

const car = {
  brand: "Toyota",
  getBrand() {
    return this.brand;
  }
};

let bound = car.getBrand.bind(car);


export { car, bound };

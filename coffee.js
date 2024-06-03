class MakeCoffee {
  constructor (wondoo, water, sugar, milk) {
    this.wondoo= wondoo;
    this.water=water;
    this.sugar=sugar;
    this.milk=milk;
  }
  set wondoo(value) {
    if(typeof(value)==="string") {
      this._wondoo = value; // _(언더바)를 붙이는 이유 : 무언가 세팅을 통과한 값 앞에 붙이는 
    } else {
      console.error("wondoo는 문자열이어야 합니다.")
    }
  }
  get wondoo () {
    return this._wondoo + '산';
  }

  set water(value) {
    if(typeof(value)==="number") {
      this._water = value; // _(언더바)를 붙이는 이유 : 무언가 세팅을 통과한 값 앞에 붙이는 
    } else {
      console.error("water는 숫자이어야 합니다.")
    }
  }
  get water () {
    return this._water + 'ml';
  }

  set sugar(value) {
    if(typeof(value)==="boolean") {
      this._sugar = value; // _(언더바)를 붙이는 이유 : 무언가 세팅을 통과한 값 앞에 붙이는 
    } else {
      console.error("sugar는 단맛입니다.")
    }
  }
  get sugar () {
    if (this._sugar===false) {
      return '쓴맛';
    } else {
      return '단맛';
    }
  }
  set milk(value) {
    if(typeof(value)==="boolean") {
      this._milk = value; // _(언더바)를 붙이는 이유 : 무언가 세팅을 통과한 값 앞에 붙이는 
    } else {
      console.error("milk는 우유입니다.")
    }
  }
  get milk () {
    if (this._milk===true) {
      return '우유로 하기';
    } else {
      return '물로 하기';
    }
  }
  }


let test = new MakeCoffee('대전', 300, false, true);
console.log (test);
console.log (test.wondoo);
console.log (test.water);
console.log (test.sugar);
console.log (test.milk);
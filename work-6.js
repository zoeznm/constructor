class itsMe {
  constructor (name, age, address, email, likething, hatething) {
    this.name= name;
    this.age=age;
    this.address=address;
    this.email=email;
    this.likething=likething;
    this.hatething=hatething;
  }

  set name(value) {
    if(typeof(value)==="string") {
      this._name = value; // _(언더바)를 붙이는 이유 : 무언가 세팅을 통과한 값 앞에 붙이는 
    } else {
      console.error("name는 문자열이어야 합니다.")
    }
  }
  get name () {
    return this._name + '입니다';
  }

  set age(value) {
    if(typeof(value)==="number") {
      this._age = value; // _(언더바)를 붙이는 이유 : 무언가 세팅을 통과한 값 앞에 붙이는 
    } else {
      console.error("age는 숫자이어야 합니다.")
    }
  }
  get age () {
    return this._age + '살';
  }

  set address(value) {
    if(typeof(value)==="string") {
      this._adress = value; // _(언더바)를 붙이는 이유 : 무언가 세팅을 통과한 값 앞에 붙이는 
    } else {
      console.error("address는 문자열입니다.")
    }
  }
  get address () {
    return this._adress + '시';
  }

  set email(value) {
    if(typeof(value)==="string") {
      this._email = value; // _(언더바)를 붙이는 이유 : 무언가 세팅을 통과한 값 앞에 붙이는 
    } else {
      console.error("email는 문자열입니다.")
    }
  }
  get email () {
    return this._email + '입니다.';
  }

  set likething(value) {
    if(typeof(value)==="string") {
      this._likething = value; // _(언더바)를 붙이는 이유 : 무언가 세팅을 통과한 값 앞에 붙이는 
    } else {
      console.error("likething는 문자열입니다.")
    }
  }
  get likething () {
    return this._likething + '입니다.';
  }

  set hatething(value) {
    if(typeof(value)==="string") {
      this._hatething = value; // _(언더바)를 붙이는 이유 : 무언가 세팅을 통과한 값 앞에 붙이는 
    } else {
      console.error("hatething는 문자열입니다.")
    }
  }
  get hatething () {
    return this._hatething + '입니다.';
  }
  }


let test = new itsMe('김보미', 24, '대전','madlife1292@gmail.com','노래', '운동');
console.log (test);
console.log (test.name);
console.log (test.age);
console.log (test.address);
console.log (test.email);
console.log (test.likething);
console.log (test.hatething);
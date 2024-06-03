function old(a,b) {
  this.first = a;
  this.second = b;
}

let test = new old(1,2);
console.log(test);

class NewOld {
  constructor(a,b) {
    this.first = a;
    this.second = b;
  }
}

let newStyle = new old
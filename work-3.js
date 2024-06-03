function workThree(index,name) {
  let local={
    number : index+1,
    name : name
  };

  return local;
};

let test =workThree(1, "김보미");
console.log(test);

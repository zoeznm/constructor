// 분류 규격 : 라면 볶음면 {
//   재료들 (라면종류, 라면 물, 추가재료) {
//     라면 종류 : 라면종류;
//     라면물 : 라면 물;
//     추가 재료 : 추가재료;
//   }
// }

class HyeonRamen {
  constructor(ramenName, ramenWater, addFood) {
    ramenName = ramenName,
    ramenWater = ramenWater,
    addFood = addFood
  }
  set ramenName(ramenName) {
    if (ramenName !== "진라면") {
      console.error('진라면 아니면 안 해');
    }
  }
}

let test = new HyeonRamen('진라면 순한 맛', '300ml', '고추장');
console.log(test);
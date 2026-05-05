import * as name from "./name.js";
import object from "./name.js";
import btn from "./default.js";

console.log(name.myVar);
name.myFunction();
console.log(object);
btn;

// Spread Operator
let soThich = ["Đọc sách", "Du lịch", "Nấu ăn"];
const soThichMoi = "Xem phim";
// soThich.push(soThichMoi);
soThich = [...soThich, soThichMoi];
console.log(soThich);

let user = {
  name: "John",
  age: 30,
};
const userMoi = {
  email: "gmail.com",
};
user = { ...user, ...userMoi };
console.log(user);

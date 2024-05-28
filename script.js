// function addNums(num1 = "clicks", num2 = 1) {
//   console.log(num1 + num2);
// }

var btnclick = 0;
function btnPressed() {
  btnclick += 1;
  clicks.innerHTML = +btnclick;
}

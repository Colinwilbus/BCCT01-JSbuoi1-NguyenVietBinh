// BT1 Tính tiền lương
/**
 * Phân tích
 * xử lý nút button id="salary__bill"
 * input
 *
 * output
 * xuất ra tổng tiền lương ở id id="salary__total"
 */
document.getElementById("salary__bill").onclick = function () {
  var salaryOneDay = document.getElementById("salary__oneday").value;
  var salaryTimeWork = document.getElementById("salary__timework").value;
  var totalSalary = salaryOneDay * salaryTimeWork;
  document.getElementById("salary__total").placeholder =
    totalSalary.toLocaleString("vi-VN");
};

// BT2 Tính trung bình cộng của 5 số thực
/**
 * Phân tích
 * Nghiên cứu làm thế nào để khi click vào nút next thì ô số thực 1 mất số thực 2 xuất hiện
 * 3, 4, 5 cũng tương tự
 */
// item1
document.getElementById("realnumber__next1").onclick = function () {
  console.log("tiếp tục");
  document.getElementById("item1").style.display = "none";
  document.getElementById("item2").style.display = "block";
};

document.getElementById("realnumber__previous1").onclick = function () {
  console.log("Quay lại");
};
// item2
document.getElementById("realnumber__next2").onclick = function () {
  console.log("tiếp tục");
  document.getElementById("item2").style.display = "none";
  document.getElementById("item3").style.display = "block";
};

document.getElementById("realnumber__previous2").onclick = function () {
  console.log("Quay lại");
  document.getElementById("item2").style.display = "none";
  document.getElementById("item1").style.display = "block";
};
//item3
document.getElementById("realnumber__next3").onclick = function () {
  console.log("tiếp tục");
  document.getElementById("item3").style.display = "none";
  document.getElementById("item4").style.display = "block";
};

document.getElementById("realnumber__previous3").onclick = function () {
  console.log("Quay lại");
  document.getElementById("item3").style.display = "none";
  document.getElementById("item2").style.display = "block";
};
//item4
document.getElementById("realnumber__next4").onclick = function () {
  console.log("tiếp tục");
  document.getElementById("item4").style.display = "none";
  document.getElementById("item5").style.display = "block";
};

document.getElementById("realnumber__previous4").onclick = function () {
  console.log("Quay lại");
  document.getElementById("item4").style.display = "none";
  document.getElementById("item3").style.display = "block";
};
//item5
document.getElementById("realnumber__next5").onclick = function () {
  console.log("tiếp tục");
  document.getElementById("realnumber__btn").style.display = "block";
};

document.getElementById("realnumber__previous5").onclick = function () {
  console.log("Quay lại");
  document.getElementById("item5").style.display = "none";
  document.getElementById("item4").style.display = "block";
};
//realnumber__btn
document.getElementById("realnumber__btn").onclick = function () {
  document.getElementById("item5").style.display = "none";
  document.getElementById("item1").style.display = "block";
  var realNumberOne = document.getElementById("realnumber_one").value;
  var realNumberTwo = document.getElementById("realnumber_two").value;
  var realNumberThree = document.getElementById("realnumber_three").value;
  var realNumberFour = document.getElementById("realnumber_four").value;
  var realNumberFive = document.getElementById("realnumber_five").value;
  document.getElementById("realnumber_input").style.display = "inline";
  var realNumberInput1 = document.getElementById("realnumber_input1");
  var realNumberInput2 = document.getElementById("realnumber_input2");
  var realNumberInput3 = document.getElementById("realnumber_input3");
  var realNumberInput4 = document.getElementById("realnumber_input4");
  var realNumberInput5 = document.getElementById("realnumber_input5");
  realNumberInput1.innerHTML = realNumberOne;
  realNumberInput2.innerHTML = realNumberTwo;
  realNumberInput3.innerHTML = realNumberThree;
  realNumberInput4.innerHTML = realNumberFour;
  realNumberInput5.innerHTML = realNumberFive;

  var realNumberAverage =
    (parseFloat(realNumberOne) +
      parseFloat(realNumberTwo) +
      parseFloat(realNumberThree) +
      parseFloat(realNumberFour) +
      parseFloat(realNumberFive)) /
    5;
  document.getElementById("realnumber__average").innerHTML =
    realNumberAverage.toLocaleString("vi-VN");
};
// BT3
/**
 * phân tích
 * xử lý nút Quy đổi currency__btn
 * input currency__input
 * - Số usd cần quy đổi sang VND
 * progress Số USD * 23.000
 * output currency__output
 * - xuất ra giá trị VND đã đc quy đổi
 */
document.getElementById("currency__btn").onclick = function () {
  var currencyInput = document.getElementById("currency__input").value;
  var currencyOutput = document.getElementById("currency__output");
  var exchangeCurrency = currencyInput * 23000;
  currencyOutput.innerHTML = exchangeCurrency.toLocaleString("vi-VN");
};

// BT4
/**
 * phân tích
 * xử lý button : chu vi rectangle__perimeter
 * xử lý button: diện tích rectangle__acreage
 * input rectangle__length(chiều dài), rectangle__width(chiều rộng)
 * progress
 * Chu vi = (dài + rộng) *2
 * Diện tích = dài * rộng
 * output
 * xuất ra màn hình Chu Vi, Diện Tích
 */

document.getElementById("rectangle__perimeter").onclick = function () {
  var rectangleLength = document.getElementById("rectangle__length").value;
  var rectangleWidth = document.getElementById("rectangle__width").value;
  var rectangleOutputP = document.getElementById("rectangle__outputP");
  var perimeter;
  perimeter = (parseFloat(rectangleLength) + parseFloat(rectangleWidth)) * 2;
  rectangleOutputP.innerHTML = perimeter.toLocaleString("vi-VN");
};

document.getElementById("rectangle__acreage").onclick = function () {
  var rectangleLength = document.getElementById("rectangle__length").value;
  var rectangleWidth = document.getElementById("rectangle__width").value;
  var rectangleOutputS = document.getElementById("rectangle__outputS");
  var acreage;
  acreage = parseFloat(rectangleLength) * parseFloat(rectangleWidth);
  rectangleOutputS.innerHTML = acreage.toLocaleString("vi-VN");
};

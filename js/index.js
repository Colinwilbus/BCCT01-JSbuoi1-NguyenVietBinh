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
  document.getElementById("salary__total").placeholder = totalSalary;
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
  var realNumberOne = document.getElementById("realnumber_one").value;
  var realNumberTwo = document.getElementById("realnumber_two").value;
  var realNumberThree = document.getElementById("realnumber_three").value;
  var realNumberFour = document.getElementById("realnumber_four").value;
  var realNumberFive = document.getElementById("realnumber_five").value;
  var realNumberAverage =
    (parseFloat(realNumberOne) +
      parseFloat(realNumberTwo) +
      parseFloat(realNumberThree) +
      parseFloat(realNumberFour) +
      parseFloat(realNumberFive)) /
    5;
  document.getElementById("realnumber__average").innerHTML = realNumberAverage;
};
// BT3

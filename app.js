var increase = document.querySelectorAll("button")[1];
increase.addEventListener("click",function(){
  var value = document.querySelectorAll("p")[0];
  var info = document.querySelectorAll("p")[0].innerText;
  var final = parseInt(info)
  value.innerHTML = final+1;
})

var decrease = document.querySelectorAll("button")[0];
decrease.addEventListener("click", function () {
  var value1 = document.querySelectorAll("p")[0];
  var info1 = document.querySelectorAll("p")[0].innerText;
  var final1 = parseInt(info1)
  value1.innerHTML = final1 - 1;
})
var reset = document.querySelectorAll("button")[2];
reset.addEventListener("click", function () {
  var value11 = document.querySelectorAll("p")[0];
  value11.innerHTML = "0"
})
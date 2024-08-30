
let btn=document.getElementById("btn");
btn.addEventListener("click", alerts1);
function alerts1(){
    var value = document.getElementById("value").value;
    location.href = `https://www.w3schools.com/${value}/default.asp`;
    alert(value)
}
let btn1=document.getElementById("btn1");
btn1.addEventListener("click", alerts2);
function alerts2(){
    var value1 = document.getElementById("val1").value;
    location.href = `https://www.google.co.in/search?q=${value1}`;
    alert(value1)
}

function myFunction(){
var num1 = document.getElementById(num1).value;
//var num2 = document.getElementById(num2).value;
//var num3 = document.getElementById(num3).value;
//var num4 = document.getElementById(num4).value;
//var num5 = document.getElementById(num5).value;

var ch1=document.getElementById("price1").innerHTML;
ch1=parseInt(ch1);
ch1 = Number(ch1);
var res = num1*ch1;
document.getElementById("price1").innerHTML="res";
}

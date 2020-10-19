$(document).ready(function(){

var array = [];

$("#btn1").click(function(){
	array.push($("#btn1").val());
});

$("#btn2").click(function(){
	array.push($("#btn2").val());
});

$("#btn3").click(function(){
	array.push($("#btn3").val());
});

$("#btn4").click(function(){
	array.push($("#btn4").val());
});

$("#btn5").click(function(){
	array.push($("#btn5").val());
});


	$("#btn6").click(function(){
		array.push($("#btn6").val());

	});

$("#btn7").click(function(){
var total = 0;
for(var i = 0 ; i < array.length ; i++){
	total += parseInt(array[i]);
}	
$("#container").append("<h3>Total price = "+total+"jd</h3>")
	});	


	





})
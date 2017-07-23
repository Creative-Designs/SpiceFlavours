$(document).ready(function(){
	$(window).scroll(function(){
		
		if($(this).scrollTop()>100){
			$("#top_btn").fadeIn();
			
		}
		else{
			$("#top_btn").fadeOut();
		}
	});
	
	 $("#top_btn").click(function(){
		$("body,html").animate({scrollTop:0},1000);
		
	});
//--------------------flip panel---------------
	$("#flip").click(function(){
		$("#panel").slideToggle();
		
	});
//============validation===================

$("#send_btn").click(function(){
	var status=true;
	var fname=$("#fname").val().trim();
		if(fname==""){
			status=false;
			$("#fname").css({"border":"1px solid red"});
			$("#fnamerror").text("please enter name").css({"color":"red"});
			
		}
		else{
			$("#fname").css({"border":""});
			$("#fnamerror").text("");
			
		}
		
		
//===================email================

var Email=$("#Email").val().trim();
		if(Email==""){
			status=false;
			$("#Email").css({"border":"1px solid red"});
			$("#emailerror").text("Please enter email").css({"color":"red"})
			
		}
		else{
			$("#Email").css({"border":""});
			$("#emailerror").text("");
			
		}
//===================mobile================
var mobile=$("#mobile").val().trim();
	if(mobile==""){
		status=false;
		$("#mobile").css({"border":"1px solid red"});
		$("#mobileerror").text("Please enter mobile").css({"color":"red"})
		
	}
	
	else{
		$("#mobile").css({"border":""});
		$("#mobileerror").text("");
		
	}
//===================company================

var company=$("#company").val().trim();
	if(company==""){
		status=false;
		$("#company").css({"border":"1px solid red"});
		$("#companyerror").text("please enter compant name").css({"color":"red"});
	}
	
	else{
		$("#company").css({"border":""});
		$("#companyerror").text("");
	}
	
	
	
	
		
	
	
		
			
		
	
	
	
//================address==================	
var addres=$("#addres").val().trim();
if(addres==""){
	status=false;
	$("#addres").css({"border":"1px solid red"});
	$("#addreserror").text("Please enter address").css({"color":"red"});
	
}
else{
	
	$("#addres").css({"border":""});
	$("#addreserror").text("");
}











	
	
});//validation





	
});









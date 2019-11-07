/*
 * Name: Paul Nguyen
 * Date: Fri 01 Nov 2019 04:57:17 PM UTC
 * Class: GIT 418 Fall
 */

"use strict";

function showResults(){
	//array
	var formResults = [];
	//getting radio buttons from page
	var service = document.forms['feedback-form'].elements['sStar'];
	var performance = document.forms['feedback-form'].elements['pStar'];
	var quality = document.forms['feedback-form'].elements['qStar'];
	var speed = document.forms['feedback-form'].elements['spStar'];
	var satisfaction = document.forms['feedback-form'].elements['stStar'];
	//if there is a value add to feedback results and put data in array
	if(service.value){
		document.getElementById("servr").innerHTML = service.value;
		formResults.push(service.value);
	}if(performance.value){
		document.getElementById("perfr").innerHTML = performance.value;
		formResults.push(performance.value);
	}if(quality.value){
		document.getElementById("qualr").innerHTML = quality.value;
		formResults.push(quality.value);
	}if(speed.value){
		document.getElementById("speedr").innerHTML = speed.value;
		formResults.push(speed.value);
	}if(satisfaction.value){
		document.getElementById("satr").innerHTML = satisfaction.value;
		formResults.push(satisfaction.value);
	}
}

//event listener for when something it clicked it activates showResults
function createEventListeners(){
	var radiocheck = document.getElementById("feedback-form");
	if(radiocheck.addEventListener){
		radiocheck.addEventListener("click", showResults, false);
	}else if(radiocheck.attachEvent){
		radiocheck.attachEvent("onclick", showResults);
	}
}

//on load listener
if(window.addEventListener){
	addEventListener("load", createEventListeners, false);
}else if(window.attachEvent){
	attachEvent("onload", createEventListeners);
	}

/* Name: Paul Nguyen
 * Date: Thu 24 Oct 2019 09:35:20 PM UTC
 * Class: GIT-418 Fall
 */

"use strict";

var customerbuild = {
	name: "", 
	cpu: "",
	os: "",
	ram: "",
	disk: "",
	gpu: ""
};

function getInfo(){
	customerbuild.name=document.getElementById("nameinput").value;
	for(var i=0; i<=1; i++){	
		if(document.getElementsByName("cpu")[i].checked){
			customerbuild.cpu=document.getElementsByName("cpu")[i].value;
		}
	}
	for(var n=0; n<=1; n++){
		if(document.getElementsByName("os")[n].checked){
			customerbuild.os=document.getElementsByName("os")[n].value;
		}
	}
	customerbuild.ram=document.getElementById("ram").value;
	customerbuild.disk=document.getElementById("disk").value;
	customerbuild.gpu=document.getElementById("gpu").value;
	insertRow();
}


function insertRow(){
	var newRow = document.createElement("tr");
	var newCell = document.createElement("td");
	var table = document.getElementById("insertrow");
	newCell.innerHTML = customerbuild.name;
	newRow.append(newCell);
	table.appendChild(newRow);
}

function createEventListener(){
	var submit = document.getElementById("previewBtn");
	if(submit.addEventListener){
		submit.addEventListener("click", getInfo, false);
	}else if(submit.attachEvent){
		submit.attachEvent("onclick", getInfo);
	}
}

if(window.addEventListener){
	window.addEventListener("load", createEventListener, false);
}else if(window.attachEvent){
	window.attachEvent("onload", createEventListener);
}

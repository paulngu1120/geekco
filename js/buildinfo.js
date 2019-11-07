/* Name: Paul Nguyen
 * Date: Thu 24 Oct 2019 09:35:20 PM UTC
 * Class: GIT-418 Fall
 */

"use strict";

class Customerbuild {
	constructor(gpu, disk, ram, os, cpu, name){
		this.gpu=gpu;
		this.disk=disk;
		this.ram=ram;
		this.os=os;
		this.cpu=cpu;
		this.name=name;
	}
}
//Template for creating person object

function getInfo(){
	var name=document.getElementById("nameinput").value;
	var ram=document.getElementById("ram").value;
	var disk=document.getElementById("disk").value;
	var gpu=document.getElementById("gpu").value;
	for(var i=0; i<=1; i++){	
		if(document.getElementsByName("cpu")[i].checked){
			var cpu=document.getElementsByName("cpu")[i].value;
		}
	}
	for(var n=0; n<=1; n++){
		if(document.getElementsByName("os")[n].checked){
			var os=document.getElementsByName("os")[n].value;
		}
	}
	//Gather information from form and store in variables for creating person object
	let person = new Customerbuild(gpu, disk, ram, os, cpu, name);
	//person object created here
	var table = document.getElementById("insertrow").insertRow(0);
	var items = Object.values(person);
	//insert new rows with cells and gather values from to be inserted in cells
	for(var i = 0; i<1;i++){
		items.map(value => {table.insertCell(i).innerHTML=(value)});
		//append values in cells
	}
		
}

function createEventListener(){
	var radiocheck = document.querySelector("input[name=radio]");
	if(radiocheck.addEventListener){
		radiocheck.addEventListener("change", getInfo, false);
	}else if(radiocheck.attachEvent){
		radiocheck.attachEvent("onchange", getInfo);
	}
	//event listener for click and insert
}

if(window.addEventListener){
	window.addEventListener("load", createEventListener, false);
}else if(window.attachEvent){
	window.attachEvent("onload", createEventListener);
}
	//on load for event

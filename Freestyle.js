var ham = document.getElementsByClassName("ham");
var drop = document.getElementsByClassName("drop");
var img02 = document.getElementsByClassName("img02");
var name = document.getElementById("name");
var name_info = document.getElementById("name_info");
var info = document.getElementById("info");
var left = document.getElementById("left");
var right = document.getElementById("right");
var marker = document.getElementById("marker");
var marker2 = document.getElementById("marker2");
var left2 = document.getElementById("left2");
var right2 = document.getElementById("right2");


ham[0].addEventListener ("click",myfunc)
left.addEventListener ("click",myfunc1)
right.addEventListener ("click",myfunc2)
left2.addEventListener ("click",myfunc3)
right2.addEventListener ("click",myfunc4)


var a = 0
function myfunc(){
drop[0]	.style.height ="232px"	
drop[0]	.style.width ="auto"
a++;

if (a%2 === 0)	{
drop[0]	.style.height ="0px"	
drop[0]	.style.width ="auto"		
		}	
	}

var arr = ["geek.png", "pic1.png", "pic2.png", "pic3.png"]
var arr2 = [`<h3>Akinjobi Sodiq</h3> He is a giant in the midst of giants. The programming guru. He is Geektutor. He's done alot for us.<br> Thank you so much.`, "<h3>Bami Ogunfemi</h3>A beautiful lady soaring up to the sky. You're a legend. I remember that I make sure I don't miss your classes. <br>I've learnt so much you.", "<h3>Abdullahi Cap</h3> You've inspired us that anybody can do it. Your head is full already but you pretend like you don't know much. You've taught us humility.<br> Thanks to you.", "<h3>Kromate</h3> The genius. What does he not know. I don't know. But I was privileged to attend his class once."]
var arr3 = ["Favourene", "Mustapha", "Omolala", "Geek"]
var arr4 = ["You're absolutely doing your best. But I remember on Day 5 or so, I submitted and he gave me 12!", `I'm satisfied with your grading.<br> Mr Nice. Always commenting 'nice'.`, "Sometimes, I'm not sure if it's you Favourene that marked my work since you both have the same initial 'F'", `Dangerous marker.<br> He can give -1. But he's a good criticizer`]

var a = 0;
function myfunc1(){
if (a <= 0){
a = arr.length
		}
a--;
img02[0].style.backgroundImage = 'url('+ arr[a] + ')'
info.innerHTML = arr2[a]
	}


function myfunc2(){
if (a >= arr.length - 1){
a = -1;
   }
a++;
img02[0].style.backgroundImage = 'url('+ arr[a] + ')'
info.innerHTML = arr2[a]
	}


var b = 0;
function myfunc3(){
if (b <= 0){
b = arr4.length
		}
b--;
marker.innerHTML = arr4[b]
marker2.innerHTML = arr3[b]
	}


function myfunc4(){
if (b >= arr4.length - 1){
b = -1;
   }
b++;
marker.innerHTML = arr4[b]
marker2.innerHTML = arr3[b]
	}


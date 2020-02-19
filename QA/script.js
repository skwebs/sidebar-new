function hide(){
	document.getElementById("loader").style.display="none";
};
window.onload = hide;

var pageUrl= window.location.href;
var d = new Date();
var ts = d.toLocaleString();
var titleText = "Bihar Board Class 9th English Book Question Answer!";
var footerNoteMsg="Printed from <a href=\""+pageUrl+"\">"+pageUrl+"</a> on "+ts+" Created, managed & maintained by Satish (Web Developer)";



var title = document.createElement("title");
var t = document.createTextNode(titleText)
title.appendChild(t);
document.head.appendChild(title);

var contentDiv = document.createElement('div');
document.body.appendChild(contentDiv);





var myObj = class9;
var i,j,k,l,x="";
x+="<div id=\"loader\" ><p>Loading...</p></div>";
x += "<h1 class=\"alert alert-info text-center\">Question Answer</h1>";
x += "<div id=\"fn\" class=\" onlyPrint footNote\" >"+footerNoteMsg+"</div>";
x += "<div id=\"print\"  class=\"noPrint\" >Print</div>";
for (i in myObj.chapter) {
	x += "<h2 class=\"ch\">" + myObj.chapter[i].name + "</h2>";
	for (j in myObj.chapter[i].section) {
		x += "<h4 class=\"section\">"+myObj.chapter[i].section[j].name + "</h4>";
		x +="<table>";
		for (k in myObj.chapter[i].section[j].quesAns) {
			x += "<tr><td class=\"quesSec\">";
			x += "<tr><td class=\"ques\">Q.No. "+myObj.chapter[i].section[j].quesAns[k].quesNum + "</td>";
			x += "<td> : </td><td class=\"ques\">"+myObj.chapter[i].section[j].quesAns[k].ques + "</td></tr>";
			x += "<tr><td>Ans </td><td> : </td><td class=\"ans\">"+myObj.chapter[i].section[j].quesAns[k].ans + "</td><tr>";
			x += "</td></tr>";
		}
		x +="</table>";
		
	}
}
//document.getElementById("content").innerHTML = x;
contentDiv.innerHTML = x;
document.querySelector("#print").addEventListener("click",()=>{
window.print();
})

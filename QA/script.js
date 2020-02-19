var myObj = class9;
var i,j,k,l,x="";

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

function kollasvar(){

var fråga1 = document.quiz.fråga1.value;
var fråga2 = document.quiz.fråga2.value;
var fråga3 = document.quiz.fråga3.value;
var fråga4 = document.quiz.fråga4.value;
var fråga5 = document.quiz.fråga5.value;
var fråga6 = document.quiz.fråga6.value;
var fråga7 = document.quiz.fråga7.value;
var fråga8 = document.quiz.fråga8.value;
var fråga9 = document.quiz.fråga9.value;
var fråga10 = document.quiz.fråga10.value;
var correct= 0;

if (fråga1 == "Hund") {
	correct++;
}
if (fråga2 == "Mjau") {
	correct++;
}
if (fråga3 == "Sex") {
	correct++;
}
if (fråga4 == "Blåval") {
	correct++;
}
if (fråga5 == "två") {
	correct++;
}
if (fråga6 == "ja") {
	correct++;
}
if (fråga7 == "Huggorm") {
	correct++;
}
if (fråga8 == "Gepard") {
	correct++;
}
if (fråga9 == "ja2") {
	correct++;
}
if (fråga10 == "294") {
	correct++;
}


document.getElementById("inskickatsvar").style.visibility="visible";
document.getElementById("antalratt").innerHTML = "Du fick " + correct + " Rätt";
}




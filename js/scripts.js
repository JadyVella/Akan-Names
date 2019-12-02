function validate() {
    var birthDate = document.getElementById("birth");
    // var maleFemale = document.getElementById("sex");
    var birthYear = document.getElementById("age");
 
var CC = parseInt(birthDate.slice(0,2));
var YY = parseInt(birthYear.slice(2));
var MM = parseInt();
var dd = parseInt("birthDate");
var sex = prompt("Enter sex");
//var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//var females = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var day =  Math.ceil( ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + dd )%7);

if (sex = "male"  && day == 0) {
    alert("You were born on Sunday and your Akan name is kwasi");

}
else if (gender = "female" && day == 0) {
    alert("You were born on Sunday and your Akan name is Akosua");
}else if (gender = "male" && day == 1) {
    alert("You were born on Monday and your Akan name is Kwadwo");
}else if (gender = "female" && day == 1) {
    alert("You were born on Monday and your Akan name is Adwoa");
}else if (gender = "male" && day == 2) {
    alert("You were born on Tuesday and your Akan name is Kwabena");
}else if (gender = "female" && day == 2) {
    alert("You were born on Tuesday and your Akan name is Abenaa");
}else if (gender = "male" && day == 3) {
    alert("You were born on Wednesday and your Akan name is Kwaku");
}else if (gender = "female" && day == 3) {
    alert("You were born on Wednesday and your Akan name is Akua");
}else if (gender = "male" && day == 4) {
    alert("You were born on Thursday and your Akan name is Yaw");
}else if (gender = "female" && day == 4) {
    alert("You were born on Thursday and your Akan name is Yaa");
}else if (gender = "male" && day == 5) {
    alert("You were born on Friday and your Akan name is Kofi");
}else if (gender = "female" && day == 5) {
    alert("You were born on Friday and your Akan name is Afua");
}else if (gender = "male" && day == 6) {
    alert("You were born on Saturday and your Akan name is Kwame");
}else if (gender = "female" && day == 6) {
    alert("You were born on Saturday and your Akan name is Ama");
}

}

























































/*if (DaysOfTheWeek == "1") {
    console.log("You were borned on the 1st day of the week");
}
else if (DaysOfTheWeek == "2") {
    console.log("You were borned on the 2nd day of the week");
}
else if (DaysOfTheWeek == "3") {
    console.log("You were borned on the 3rd day of the week");
}
else if (DaysOfTheWeek == "4") {
    console.log("You were borned on the 4th day of the week");
}
else if (DaysOfTheWeek == "5") {
    console.log("You were borned on the 5th day of the week");
}
else if (DaysOfTheWeek == "6") {
    console.log("You were borned on the 6th day of the week");
}
else if (DaysOfTheWeek == "7") {
    console.log("You were borned on the 7th day of the week");
}*/
function validateForm() {
    var birthDate = document.forms["myForm"]["day"].value;
    var birthYear = document.forms["myForm"]["year"].value;
    var monthOfTheYear = document.forms["myForm"]["year"].value;
    var genderInput = document.forms["myForm"]["gender"].value;
    if (genderInput == "") {
        alert("select male or female");
        return;

    if (birthDate <=0 && birthDate > 31) {
         alert("enter a valid date");
    }
 
var CC = parseInt(birthYear.slice(2));
var YY = parseInt(birthYear.slice(0,2));
var MM = parseInt(monthOfTheYear);
var dd = parseInt(birthDate);
// var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var females = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
// var gender = "male, female";
var day =  Math.ceil( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + dd )%7;

if (genderInput == "male"  && day == 0) {
    alert("You were born on Sunday and your Akan name is kwasi");
}else if (genderInput=="female" && day == 0) {
    alert("You were born on Sunday and your Akan name is Akosua");
}else if (genderInput == "male" && day == 1) {
    alert("You were born on Monday and your Akan name is Kwadwo");
}else if (genderInput == "female" && day == 1) {
    alert("You were born on Monday and your Akan name is Adwoa");
}else if (genderInput == "male" && day == 2) {
    alert("You were born on Tuesday and your Akan name is Kwabena");
}else if (genderInput == "female" && day == 2) {
    alert("You were born on Tuesday and your Akan name is Abenaa");
}else if (genderInput == "male" && day == 3) {
    alert("You were born on Wednesday and your Akan name is Kwaku");
}else if (genderInput == "female" && day == 3) {
    alert("You were born on Wednesday and your Akan name is Akua");
}else if (genderInput == "male" && day == 4) {
    alert("You were born on Thursday and your Akan name is Yaw");
}else if (genderInput == "female" && day == 4) {
    alert("You were born on Thursday and your Akan name is Yaa");
}else if (genderInput == "male" && day == 5) {
    alert("You were born on Friday and your Akan name is Kofi");
}else if (genderInput == "female" && day == 5) {
    alert("You were born on Friday and your Akan name is Afua");
}else if (genderInput == "male" && day == 6) {
    alert("You were born on Saturday and your Akan name is Kwame");
}else if (genderInput == "female" && day == 6) {
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
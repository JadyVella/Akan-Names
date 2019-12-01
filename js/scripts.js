function validate() {
    var dateOfBirth = document.getElementById ("birth");
    var peronality = document.getElementById("sex");
    var yearsOfBirth = document.getElementById("age");
};


var dD = parseInt(dateOfBirth);
var gender = "male, female";
var daysOfTheWeek = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;



if (gender == "male"  && dD == 0) {
    alert ("You were born on Sunday and your Akan name is Kwasi");
}

else if (gender == "female" && dD == 0) {
    alert ("you were born on Sunday and your Akan name is Akosua");
}

else if (gender == "male" && dD == 1) {
    alert ("you were born on Monday and your Akan name is Kwadwo");
}

else if (gender == "female" && dD == 1) {
    alert ("you were born on Monday and your Akan name is Adwoa");
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
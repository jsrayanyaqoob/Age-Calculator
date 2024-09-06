    // Age Calculator

    var calcinput1 = document.querySelector("#currentYear");
    var calcinput2 = document.querySelector("#birthYear");
    var display = document.querySelector("#displayAge");

    function calcage() {
        
        var currentYear = calcinput1.value;
        var birthYear = calcinput2.value;
        var age = currentYear - birthYear;

        if (currentYear < birthYear) {
            alert("Birth year cannot be greater than the current year.");
            display.innerHTML = "";
        } else {
            display.innerHTML = "Your age is: " + age + " years old";
        }

        birthYear.value = ""
    }
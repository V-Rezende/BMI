var weight, height, measure, bmi, error;

function calculate() {
        weight = document.getElementById("weight").value;
        height = document.getElementById("height").value;
        error = "Please enter a valid number";
        height /= 100;
        height *= height;
        bmi = weight / height;
        bmi = bmi.toFixed(1);
        
        if (bmi <= 18.4) {
            measure = "Your BMI is " + bmi + ", you are Underweight.";

        }   else if (bmi >= 18.5 && bmi <= 24.9) {
            measure = "Your BMI is " + bmi + ", you are in a great shape!"; 
        }   else if (bmi >= 25 && bmi <= 29.9) {
            measure = "Your BMI is " + bmi + ", you are Overweght.";
        }   else if (bmi >= 30) {
            measure = "Your BMI is " + bmi + ", you are OBESE.";
        }

        if (weight === 0) {
            document.getElementById("res")
            .innerHTML = error;
        }   else if (height === 0) {
            document.getElementById("res")
            .innerHTML = error;
        }   else if (weight < 0) {
            document.getElementById("res")
            .innerHTML = "Negative values is not allowed.";
        }   else {
            document.getElementById("res")
            .innerHTML = measure;
            }

}
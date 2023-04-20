

// Swal.fire('Please enter the height [سینٹی میٹر] and weight [کلوگرام]')

alert("Please enter the height [سینٹی میٹر] and weight [کلوگرام]");

function bmi() {

    var h = document.getElementById("height").value;
    var w = document.getElementById("weight").value;
    var bmi = w / (h / 100 * h / 100);
    var total = bmi.toFixed(2);
    document.getElementById("result").innerHTML = "Your BMI is" + total
}

// let suggestion = ('You Are ');

// if (bmi > 30) {

//     suggestion += `Obese. You need to lose ${WeightToLose} KGs to become normal`;

// } else if (bmi > 25) {
//     suggestion += `OverWeight. You need to lose ${WeightToLose} KGs to become normal`;

// } else if (bmi > 22) {

//     suggestion += `Normal. But optionally you may lose ${WeightToLose} KGs to become ideally fit`;

// } else if (bmi == 22.00) {

//     suggestion += `Perfectly Fit`;

// } else if (bmi >= 18) {

//     suggestion += `Normal. But optionally you may gain ${WeightToGain} KGs to become ideally fit`;

// } else    // (bmi <18.5)
// {

//     suggestion += ` UnderWeight. You need to gain ${WeightToGain} KGs to become normal`;


// }

// console.log(suggestion);

// document.querySelector('#suggestion').innerHTML = suggestion;


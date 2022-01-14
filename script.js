// Very Easy
function min(num1, num2) {

    if (num1 > num2) {

        return num2;
    } else {
        return num1;
    }
}
console.log(min(40, 100));

//Easy

let studenNames = [
    ["Billy", "Bob", "Sam"],
    ["Doe", "Noble", "Escobar"],
    [6, 14, 25]
];

console.log("hello my name is " + studenNames[0][1] + " " + studenNames[1][1] + "and im " + studenNames[2][1] + " years old.");

//Medium
let monthNumber = parseInt(prompt("Enter a number between 1-12."))
console.log(monthNumber);
if (Number.isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    alert("the number you enterd was out of the range");
} else {
    let months = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    console.log(months[monthNumber - 1]);
}

//Hard

const jerryHeight = 10;
const jerryMass = 45;


const tomHeight = 9;
const tomMass = 8;


function bmi(height,mass){
    return mass / (height * height);
}
const jerryBmi = bmi(jerryHeight,jerryMass);
console.log(jerryBmi)

const tomBmi = bmi(tomHeight,tomMass);
console.log(tomBmi)

if (jerryBmi > tomBmi){

    console.log("Is Toms BMI higher than Jerrys? True"  );
    
}else{
    console.log("Is Toms BMI higher than Jerrys? False" );
}
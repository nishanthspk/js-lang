const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));
const num3 = parseFloat(prompt("Enter the third number: "));

let largest;

// compare the three numbers using conditional statements to find the largest number
if (num1 > num2) {
    if (num1 > num3) {
        largest = num1;
    } else {
        largest = num3;
    }
} else {
    if (num2 > num3) {
        largest = num2;
    } else {
        largest = num3;
    }
}

// print the largest number
console.log("The largest number is: " + largest);

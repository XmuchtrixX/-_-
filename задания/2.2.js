const num1 = parseFloat(prompt("Введите 1 число:"));
const num2 = parseFloat(prompt("Введите 2 число:"));

if (num1 > num2) {
console.log("Наибольшее число: " + num1);
} else if (num2 > num1) {
console.log("Наибольшее число: " + num2);
} else {
console.log("Числа равны.");
}
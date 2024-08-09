export function celsiusToFahrenheit() {
    let one = Number (prompt("Введите значение в Цельсиях"));
    let result = ((5/9) * one) + 32;
    alert ( `${result} fahrenheit`);
}

celsiusToFahrenheit();
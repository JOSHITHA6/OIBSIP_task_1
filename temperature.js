const tempInput = document.getElementById('temp-input');
const unitFrom = document.getElementById('unit-from');
const convertBtn = document.getElementById('convert-btn');
const convertedTemp = document.getElementById('converted-temp');

convertBtn.addEventListener('click', function() {
    const tempValue = parseFloat(tempInput.value);
    const unit = unitFrom.value;
    let converted;

    if (unit === 'celsius') {
        if (isNaN(tempValue)) {
            convertedTemp.textContent = 'Please enter a valid number.';
            return;
        }
        converted = tempValue * 9 / 5 + 32;
        convertedTemp.textContent = `${tempValue}°C is equal to ${converted.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        if (isNaN(tempValue)) {
            convertedTemp.textContent = 'Please enter a valid number.';
            return;
        }
        converted = (tempValue - 32) * 5 / 9;
        convertedTemp.textContent = `${tempValue}°F is equal to ${converted.toFixed(2)}°C`;
    } else if (unit === 'kelvin') {
        if (isNaN(tempValue)) {
            convertedTemp.textContent = 'Please enter a valid number.';
            return;
        }
        // Conversion formula for Kelvin
        converted = tempValue + 273.15;
        convertedTemp.textContent = `${tempValue}°K is equal to ${converted.toFixed(2)}°C`;
    } else {
        convertedTemp.textContent = 'Please select a valid unit.';
    }
});
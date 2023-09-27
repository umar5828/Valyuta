// Get the necessary DOM elements
const amountInput = document.getElementById('pulMiqdori');
const currencySelect = document.getElementById('valyutaSelect');
const convertedPul = document.getElementById('convertedPul');
const convertedValyuta = document.getElementById('convertedValyuta');

let valyuta = document.getElementById('valyutaSelect');

// Define the conversion rates
const conversionRates = {
  1: 0.00008156606,// USD to USD
  2: 0.0000777888065,  // USD to EUR
  3: 0.00079188351  // USD to RUB
};

// Function to convert the currency
function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const currency = parseInt(currencySelect.value);

  if (isNaN(amount)) {
    convertedPul.textContent = 'Invalid amount';
    convertedValyuta.textContent = '';
    return;
  }

  if (currency in conversionRates) {
    const convertedAmount = amount * conversionRates[currency];
    convertedPul.textContent = convertedAmount.toFixed(2);
    convertedValyuta.textContent = currencySelect.options[currencySelect.selectedIndex].text;
  } else {
    convertedPul.textContent = 'Invalid currency';
    convertedValyuta.textContent = '';
  }
}

// Add event listener to the conversion button
const otkazishButton = document.getElementById('otkazish');
otkazishButton.addEventListener('click', convertCurrency);
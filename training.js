const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  if (arr.length === 0) {
    return "Нет доступных валют";
  }

  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== missingCurr) {
      result += `${arr[i]}\n`;
    }
  }

  return `Доступные валюты:\n${result}`;
}

function formatTaux(taux) {
  return (taux * 100).toFixed(2) + " %";
}

// Tests
console.log(formatTaux(0.1)); // "10,00 %"
console.log(formatTaux(0.084)); // "8,40 %"
console.log(formatTaux(0.8)); // "80,00 %"

// node testFormatTaux.js

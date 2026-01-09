function formatPrice(price) {
  const formatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
  return formatter.format(price);
}

// Tests
console.log(formatPrice(10)); // doit afficher "10,00 €"
console.log(formatPrice(8.4)); // doit afficher "8,40 €"
console.log(formatPrice(8000)); // doit afficher "8 000,00 €"
console.log(formatPrice(22000000));

// node testFormatPrice.js

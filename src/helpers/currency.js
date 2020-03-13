const formatCurrency = value => {
  const currencyOptions = {
    style: "currency",
    currency: "EUR"
  };

  const formatted = value.toLocaleString("en-NO", currencyOptions);
  let parts;

  if (formatted.indexOf(".") !== -1) {
    parts = formatted.split(".");
  } else {
    parts = formatted.split(",");
  }

  return {
    amount: parts[0],
    cents: parts[1]
  };
};

export { formatCurrency };

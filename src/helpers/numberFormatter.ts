const numberFormatter = (amount: number, currency: "USD" | "EUR") =>
  new Intl.NumberFormat("en-US", {
    currency,
    style: "currency",
  }).format(amount);

export default numberFormatter;

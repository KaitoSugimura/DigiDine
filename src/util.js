export const formatPrice = (price, dontDisplayIfZero = false) => {
  if (dontDisplayIfZero && price == 0) return;
  return `$${price.toFixed(2)}`;
};

export const getPrice = (item) => {
  if (item.priceType) {
    switch (item.selected) {
      case "None":
        return 0;
      case "Lite":
        return item.price;
      case "Reg":
        return item.price * 2.0;
      case "Extra":
        return item.price * 3.0;
    }
  } else if (item.selected == "Extra") {
    return item.price;
  }
  return 0;
};

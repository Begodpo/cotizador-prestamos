export function calculateTotal(quantity, deadline) {
  let totalQuantity;
  if (quantity <= 1000) {
    totalQuantity = quantity * 0.25;
  } else if (quantity > 1000 && quantity <= 5000) {
    totalQuantity = quantity * 0.2;
  } else if (quantity > 5000 && quantity <= 10000) {
    totalQuantity = quantity * 0.15;
  } else {
    totalQuantity = quantity * 0.1;
  }

  let totalDeadline = 0;
  switch (deadline) {
    case 3:
      totalDeadline = quantity * 0.05;
      break;
    case 6:
      totalDeadline = quantity * 0.1;
      break;
    case 12:
      totalDeadline = quantity * 0.15;
      break;
    case 24:
      totalDeadline = quantity * 0.2;
      break;

    default:
      break;
  }
  return totalDeadline + totalQuantity + quantity;
}

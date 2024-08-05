import { Product, taxCalculation } from "./06_funtion-destructuring";

const shoppingCart: Product[] = [
  {
    description: "Nokia",
    price: 100,
  },
  {
    description: "Ipad pro",
    price: 150,
  },
];

const [total, tax] = taxCalculation({
  products: shoppingCart,
  tax: 0.15,
});

console.log("Total", total);
console.log("Tax", tax);

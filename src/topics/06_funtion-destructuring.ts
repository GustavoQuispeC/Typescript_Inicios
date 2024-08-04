interface Product {
  description: string;
  price: number;
}
const phone: Product = {
  description: "Samsung s9",
  price: 1234,
};

const tablet: Product = {
  description: "Ipad Pro",
  price: 3040.2,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

//function taxCalculation(options: TaxCalculationOptions): [number,number] {
function taxCalculation(options: TaxCalculationOptions): [number,number] {
    const {tax} =options;
  let total = 0;
  options.products.forEach(({price}) => {
    total += price;
  });
  return [total, total * tax];
}



const shoppingCart = [phone, tablet];

const tax = 0.234;



const [total,TotalTax]= taxCalculation({
  products: shoppingCart,
  tax: tax,
});


console.log("Total", total);
console.log("Tax", TotalTax);

export {};

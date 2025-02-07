const orders = [
  {
    orderId: "123",
    customerId: "123",
    deliveryDate: "01-01-2020",
    delivered: true,
    items: [
      { productId: "123", price: 55 },
      { productId: "234", price: 30 },
    ],
  },
  {
    orderId: "234",
    customerId: "234",
    deliveryDate: "01-02-2020",
    delivered: false,
    items: [{ productId: "234", price: 30 }],
  },
  {
    orderId: "345",
    customerId: "234",
    deliveryDate: "05-01-2020",
    delivered: true,
    items: [
      { productId: "567", price: 30 },
      { productId: "678", price: 80 },
    ],
  },
  {
    orderId: "456",
    customerId: "345",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "789", price: 12 },
      { productId: "890", price: 90 },
    ],
  },
  {
    orderId: "578",
    customerId: "456",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "901", price: 43 },
      { productId: "123", price: 55 },
    ],
  },
];

console.log(
  orders.filter(
    (order) => order.customerId === "234" && order.delivered === false
  )
);

console.log("----------------------------------------------------------------");
/*The reduce() method in JavaScript is a powerful tool that is used to reduce an array to a single value by executing a reducer
 function on each element of the array. 
The reduce() method applies the reducer function to each element of the array (from left to right) and accumulates the results into a single value.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
*/

console.log(
  orders.map((order) => ({
    ...orders,
    totalPrice: order.items.reduce((acc, item) => acc + item.price, 0),
  }))
);

console.log("----------------------------------------------------------------");
/*every c'est comme filter sauf quel retourne soit true si la condition est valide ou false sinon */
console.log(orders.every((order) => order.delivered));

console.log("----------------------------------------------------------------");
// 4) Has the customer with ID '123' made any orders?

/*some c'est presque comme every sauf quel s'applique pour un seul element */
console.log(orders.some((order) => order.customerId === "123"));

console.log("----------------------------------------------------------------");
// 5) Have any products with an id of 123 been sold?
console.log(orders.some((order) => order.orderId === "123"));

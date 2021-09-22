/*
Liskov substitution principle

If ϕ(x) is a provable property of objects x of type T. Then ϕ(y)
must be true for objects y of type S where S is a subtype of T.

Simpler: Subtypes need to be substitutable for their base types.

Even simpler: If my program expects an Animal, something like that
Dog (which inherits from Animal) must serve as any other Animal.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Shirt', 49.5));
shoppingCart.addItem(new Product('Pen', 15.5));
shoppingCart.addItem(new Product('Pencil', 5.5));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

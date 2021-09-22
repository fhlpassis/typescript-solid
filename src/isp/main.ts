/*
Interface segregation principle
clients should not be forced to depend on types, interfaces or members abstracts that they do not use.
*/
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Bruce', 'Wayne', '0001');
const enterpriseCustomer = new EnterpriseCustomer('Wayne Enterprises', '000-1');
const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Shirt', 49.5));
shoppingCart.addItem(new Product('Pen', 15.5));
shoppingCart.addItem(new Product('Pencil', 5.5));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

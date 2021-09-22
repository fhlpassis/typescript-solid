import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Shirt', 49.5));
shoppingCart.addItem(new Product('Pen', 15.5));
shoppingCart.addItem(new Product('Pencil', 5.5));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscout(0.5));
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

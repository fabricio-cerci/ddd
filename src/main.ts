import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order-item";
import Address from "./value-object/address";

let customer = new Customer("123", "Fabrício Cerci");
const address = new Address("Rua dois", 2, "12345-678", "Cuiabá");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("1", "Item 2", 15);
const order = new Order("1", "123", [item1, item2]);
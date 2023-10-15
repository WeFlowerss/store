import { Bucket } from "./bucket";
import { Orders } from "./orders";
import { Wishlist } from "./wishlist";
import { Products } from "./products";
import { Store } from "./store";
import { User } from "./user";

export class FlowersAPI {
  bucket = new Bucket();
  orders = new Orders();
  wishlist = new Wishlist();
  products = new Products();
  store = new Store();
  user = new User();
}

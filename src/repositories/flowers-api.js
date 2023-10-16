import { Bucket } from "./bucket";
import { Orders } from "./orders";
import { Wishlist } from "./wishlist";
import { Products } from "./products";
import { Store } from "./store";
import { User } from "./user";

export class FlowersAPI {
  bucket = Bucket;
  orders = Orders;
  wishlist = Wishlist;
  products = Products;
  store = Store;
  user = User;
}

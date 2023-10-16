import { Bucket } from "./bucket";
import { Orders } from "./orders";
import { Wishlist } from "./wishlist";
import { Products } from "./products";
import { Store } from "./store";
import { User } from "./user";

export class FlowersAPI {
  static bucket = Bucket;
  static orders = Orders;
  static wishlist = Wishlist;
  static products = Products;
  static store = Store;
  static user = User;
}

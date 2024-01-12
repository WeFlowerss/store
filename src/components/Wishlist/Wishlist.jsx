/* eslint-disable */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Empty } from "antd-mobile";
import { ShopbagOutline } from "antd-mobile-icons";
import {
  fetchWishlist,
  deleteItemFromWishlist,
} from "../../store/wishlist/actions";
import { WishlistItem } from "./WishlistItem/WishlistItem";
import style from "./Wishlist.module.css";

export const Wishlist = () => {
  const user = useSelector((state) => state.userReducer.user);
  const products = useSelector((state) => state.wishlistReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWishlist(user?.id));
  }, []);

  const onDeleteClick = (index) => {
    dispatch(deleteItemFromWishlist(products, user?.id, index));
  };

  if (!products.length) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Empty
          image={
            <ShopbagOutline
              style={{
                color: "var(--adm-color-light)",
                fontSize: 80,
              }}
            />
          }
          description="Кошик порожній"
        />
      </div>
    );
  }

  return (
    <div>
      <ul className={style.list}>
        {products?.map((product, index) => (
          <WishlistItem
            product={product}
            key={index}
            onDelete={() => {
              onDeleteClick(index);
            }}
          />
        ))}
      </ul>
      <div className={style.footer}>
        <h1 className={style.title}>
          Загальна вартість:{" "}
          {products?.reduce((acc, product) => acc + +product.price, 0)}
        </h1>
      </div>
    </div>
  );
};

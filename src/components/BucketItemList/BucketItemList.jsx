/* eslint-disable */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Empty } from "antd-mobile";
import { ShopbagOutline } from "antd-mobile-icons";
import { fetchBucket, deleteItemFromBucket } from "../../store/bucket/actions";
import { BucketItem } from "./BucketItem/BucketItem";
import style from "./BucketList.module.css";

export const BucketItemList = () => {
  const user = useSelector((state) => state.userReducer.user);
  const products = useSelector((state) => state.bucketReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBucket(user?.id));
  }, []);

  const onDeleteClick = (index) => {
    dispatch(deleteItemFromBucket(products, user?.id, index));
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
          <BucketItem
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

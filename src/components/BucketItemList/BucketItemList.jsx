/* eslint-disable */
import React, { useEffect } from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBucket, deleteItemFromBucket } from "../../store/bucket/actions";
import { BucketItem } from "../BucketItem/BucketItem";
import style from "./BucketList.module.css";

export const BucketItemList = () => {
  const tg = window.Telegram.WebApp;
  const user = useSelector((state) => state.userReducer.user);
  const products = useSelector((state) => state.bucketReducer.products);
  const dispatch = useDispatch();

  const onBtnClick = useCallback(() => {
    const data = {
      user,
      products,
    };
    tg.sendData(JSON.stringify(data));
  }, []);

  useEffect(() => {
    dispatch(fetchBucket(user?.id));
    /* tg.onEvent("mainButtonClicked", onBtnClick);
    tg.mainButton.show();
    tg.mainButton.setParams({
      text: "Зробити замовлення",
      color: "#045661",
    }); */
    return () => {
      // tg.offEvent("mainButtonClicked", onBtnClick);
    };
  }, []);

  const onDeleteClick = (index) => {
    dispatch(deleteItemFromBucket(products, user?.id, index));
  };

  return (
    <div>
      <p>{JSON.stringify(tg)}</p>
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

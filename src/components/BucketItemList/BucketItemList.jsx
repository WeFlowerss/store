/* eslint-disable */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBucket } from "../../store/bucket/actions";
import { BucketItem } from "../BucketItem/BucketItem";

export const BucketItemList = () => {
  const user = useSelector((state) => state.userReducer.user);
  const products = useSelector((state) => state.bucketReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBucket(user?.userId));
  }, []);

  return (
    <div>
      <ul>
        {products?.map((product, index) => (
          <BucketItem product={product} key={index} />
        ))}
      </ul>
    </div>
  );
};

import React from "react";
import style from "./FlowerItem.module.css";
import { Skeleton } from "antd-mobile";

export const FlowerSkeleton = () => {
  const arr = [];
  arr.length = 10;
  arr.fill(0);
  return (
    <div>
      {arr.map((el, i) => {
        return (
          <div className={style.skeleton} key={i}>
            <div>
              <Skeleton.Title animated />
              <Skeleton.Paragraph lineCount={2} animated />
            </div>
            <Skeleton animated className={style.skeletonImage} />
          </div>
        );
      })}
    </div>
  );
};

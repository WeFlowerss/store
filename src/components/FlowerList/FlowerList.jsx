import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlowers } from "../../store/flowers/actions";
import { FlowerItem } from "../FlowerItem/FlowerItem";
import { Button } from "../Button/Button";
import style from "./FlowerList.module.css";

export const FlowerList = () => {
  const [page, updatePage] = useState(1);
  const flowers = useSelector((state) => state.flowersReducer.flowers);
  const dispatch = useDispatch();

  const onLoadPageClick = () => {
    updatePage(page + 1);
    dispatch(fetchFlowers(page));
  };

  return (
    <div className={style["flowers-component"]}>
      <ul className={style["flower-list"]}>
        {flowers?.map((flower, index) => (
          <FlowerItem key={index} flower={flower} />
        ))}
      </ul>
      <Button isPrimary={true} callback={onLoadPageClick}>
        Load More
      </Button>
    </div>
  );
};

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlowers } from "../../store/flowers/actions";
import { updateModalStatus } from "../../store/backdrop/actions";
import { FlowerItem } from "../FlowerItem/FlowerItem";
import { Button } from "../Button/Button";
import { Backdrop } from "../Backdrop/Backdrop";
import { Modal } from "../Modal/Modal";
import { FlowerInfo } from "../FlowerInfo/FlowerInfo";

import style from "./FlowerList.module.css";

export const FlowerList = () => {
  const [page, updatePage] = useState(1);
  const [currentBouquet, updateBouquet] = useState({});

  const flowers = useSelector((state) => state.flowersReducer.flowers);
  const dispatch = useDispatch();

  const onLoadPageClick = () => {
    updatePage(page + 1);
    dispatch(fetchFlowers(page));
  };

  const onShowInfoClick = (item) => {
    dispatch(updateModalStatus(true));
    updateBouquet(item);
  };

  return (
    <div className={style["flowers-component"]}>
      <ul className={style["flower-list"]}>
        {flowers?.map((flower, index) => (
          <FlowerItem
            key={index}
            flower={flower}
            showModal={() => {
              onShowInfoClick(flower);
            }}
          />
        ))}
      </ul>
      <Button isPrimary={true} callback={onLoadPageClick}>
        Load More
      </Button>

      <Backdrop>
        <Modal>
          <FlowerInfo item={currentBouquet} />
        </Modal>
      </Backdrop>
    </div>
  );
};

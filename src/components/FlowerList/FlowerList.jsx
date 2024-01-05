/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlowers } from "../../store/flowers/actions";
import { updateModalStatus } from "../../store/backdrop/actions";
import { resetPage } from "../../store/global/actions";
import { FlowerItem } from "../FlowerItem/FlowerItem";
import { Backdrop } from "../Backdrop/Backdrop";
import { Modal } from "../Modal/Modal";
import { FlowerInfo } from "../FlowerInfo/FlowerInfo";

import style from "./FlowerList.module.css";

export const FlowerList = () => {
  const [currentBouquet, updateBouquet] = useState({});

  const page = useSelector((state) => state.globalReducer.page);
  const flowers = useSelector((state) => state.flowersReducer.flowers);
  const dispatch = useDispatch();

  const onShowInfoClick = (item) => {
    dispatch(updateModalStatus(true));
    updateBouquet(item);
  };

  const onObserve = (entries) => {
    const { isIntersecting } = entries[0];
    if (!isIntersecting) return;
    dispatch({ type: "INCREMENT_PAGE_QUERY" });
  };

  useEffect(() => {
    dispatch(resetPage(-1));
    const targetBox = document.querySelector(".targetElem");
    const observer = new IntersectionObserver(onObserve, {
      rootMargin: "50px",
    });
    observer.observe(targetBox);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    dispatch(fetchFlowers(page));
    console.log(page);
  }, [page]);

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
      <div className="targetElem"></div>
      <Backdrop>
        <Modal>
          <FlowerInfo item={currentBouquet} />
        </Modal>
      </Backdrop>
    </div>
  );
};

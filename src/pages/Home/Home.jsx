import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/user/actions";
import { FlowerList } from "../../components/FlowerList/FlowerList";
import { fetchFlowers } from "../../store/flowers/actions";
import { Header } from "../../components/Header/Header";
export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleDispatchAction = (data) => {
      dispatch(updateUser(data));
    };
    const tg = window.Telegram.WebApp;
    tg.expand();
    const data = tg.initData || { userId: "123134234" };
    handleDispatchAction(data);
    dispatch(fetchFlowers(0));
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <FlowerList />
    </div>
  );
};

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/user/actions";
export const Home = () => {
  const dispatch = useDispatch();
  const handleDispatchAction = (data) => {
    dispatch(updateUser(data));
  };

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand();
    const data = tg.initData || { userId: "123134234" };
    handleDispatchAction(data);
  });

  return (
    <div>
      <h1>Home1</h1>
    </div>
  );
};

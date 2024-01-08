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
    const query =
      "query_id=AAHeDN4ZAAAAAN4M3hlMa1SY&user=%7B%22id%22%3A433982686%2C%22first_name%22%3A%22Volodymyr%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22pashchenko_v_r%22%2C%22language_code%22%3A%22uk%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1704729253&hash=855898a790e7d93286a71a8b29a6bc5eed21b12e765951a48629d749b7ef83";
    const data = tg.initData || query;
    handleDispatchAction(data);
    dispatch(fetchFlowers(0));
  });

  return (
    <div className="container">
      <Header />
      <FlowerList />
    </div>
  );
};

import React, { useEffect } from "react";
import { FlowerList } from "../../components/FlowerList/FlowerList";
import { fetchFlowers } from "../../store/flowers/actions";
import { Header } from "../../components/Header/Header";
import useUserHook from "../../hooks/userHook";
import { useSelector, useDispatch } from "react-redux";
import UserInfo from "../../components/UserInfo/UserInfo";

export const Home = () => {
  const dispatch = useDispatch();
  const [user, updateUser] = useUserHook();

  useEffect(() => {
    dispatch(fetchFlowers(0));
  }, []);

  return (
    <div className="container">
      <Header />
      <UserInfo user={user} />
      <FlowerList />
    </div>
  );
};

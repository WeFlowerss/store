import React, { useEffect } from "react";
import { FlowerList } from "../../components/FlowerList/FlowerList";
import { fetchFlowers } from "../../store/flowers/actions";
import { Header } from "../../components/Header/Header";
import useUserHook from "../../hooks/userHook";
import { useDispatch } from "react-redux";
// import UserInfo from "../../components/UserInfo/UserInfo";

export const Home = () => {
  const dispatch = useDispatch();
  useUserHook();

  useEffect(() => {
    dispatch(fetchFlowers(0));
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      {/* <UserInfo user={user} /> */}
      <FlowerList />
    </div>
  );
};

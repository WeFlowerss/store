import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser as updateUserAction } from "../store/user/actions";

const useUserHook = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const updateUser = (data) => {
    const obj = updateUserAction(data);
    dispatch(obj);
  };

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg?.expand();
    const query =
      "query_id=AAHeDN4ZAAAAAN4M3hlMa1SY&user=%7B%22id%22%3A433982686%2C%22first_name%22%3A%22Volodymyr%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22pashchenko_v_r%22%2C%22language_code%22%3A%22uk%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1704729253&hash=855898a790e7d93286a71a8b29a6bc5eed21b12e765951a48629d749b7ef83";
    const data = tg.initData || query;
    updateUser(data);
  }, []);

  return [user, updateUser];
};

export default useUserHook;

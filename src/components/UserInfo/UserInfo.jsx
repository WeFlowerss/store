import style from "./UserInfo.module.css";
const name = ({ user }) => {
  return (
    <div className={style["user-info"]}>
      <p>id: {user?.id}</p>
      <p>first_name: {user?.first_name}</p>
      <p>last_name: {user?.last_name}</p>
      <p>username: {user?.username}</p>
      <p>language_code: {user?.language_code}</p>
    </div>
  );
};

export default name;

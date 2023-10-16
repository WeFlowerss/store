import { Telegram } from "../../helpers/telegram";
import style from "./FlowerInfo.module.css";
export const FlowerInfo = ({ item }) => {
  const data = Telegram.data;

  const onClick = () => {
    try {
      console.log(123);
    } catch (err) {
      Telegram.tg.showAlert(JSON.stringify(err));
    }
  };

  return (
    <div className={style["flower-info"]}>
      {/* <h1>{item.name}</h1> */}
      <h1>{Telegram.data.user.id}</h1>
      <p className={style.text}>{JSON.stringify(data)}</p>
      <button onClick={onClick}>Show</button>
    </div>
  );
};

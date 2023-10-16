import { Telegram } from "../../helpers/telegram";
import { decodeQueryString } from "../../helpers/services";
import style from "./FlowerInfo.module.css";
export const FlowerInfo = ({ item }) => {
  const data = decodeQueryString(Telegram.data);

  const onClick = () => {
    try {
      Telegram.tg.showAlert(JSON.stringify(data));
    } catch (err) {
      Telegram.tg.showAlert(JSON.stringify(err));
    }
  };

  return (
    <div className={style["flower-info"]}>
      {/* <h1>{item.name}</h1> */}
      <p className={style.text}>{JSON.stringify(data)}</p>
      <button onClick={onClick}>Show</button>
    </div>
  );
};

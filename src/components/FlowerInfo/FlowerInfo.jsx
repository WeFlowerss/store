import { Telegram } from "../../helpers/telegram";
import { decodeQueryString } from "../../helpers/services";
import style from "./FlowerInfo.module.css";
export const FlowerInfo = ({ item }) => {
  const data = decodeQueryString(Telegram.tg.initData);

  const onClick = () => {
    try {
      Telegram.tg.showAlert(JSON.stringify(data));
    } catch (err) {
      Telegram.tg.showAlert(JSON.stringify(err));
    }
  };

  return (
    <div>
      {/* <h1>{item.name}</h1> */}
      <p className={style.text}>{JSON.stringify(data.user)}</p>
      <button onClick={onClick}>Show</button>
    </div>
  );
};

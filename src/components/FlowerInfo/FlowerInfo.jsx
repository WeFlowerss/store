import { Telegram } from "../../helpers/telegram";
export const FlowerInfo = ({ item }) => {
  const onClick = () => {
    try {
      console.log(Telegram.tg);
      console.log(Telegram.tg.initData);
      console.log(Telegram.tg.initDataUnsafe);
      console.log(Telegram.tg);
    } catch (err) {
      Telegram.tg.showAlert(JSON.stringify(err));
    }
  };

  return (
    <div>
      {/* <h1>{item.name}</h1> */}
      <p>{Telegram.tg.initData.split("\\n").join("\n")}</p>
      <button onClick={onClick}>Show</button>
    </div>
  );
};

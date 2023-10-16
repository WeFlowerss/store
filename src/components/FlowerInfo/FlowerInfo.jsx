import { Telegram } from "../../helpers/telegram";
export const FlowerInfo = ({ item }) => {
  const onClick = () => {
    try {
      console.log(item);
      // Telegram.tg.showAlert("Hello world");
      // Telegram.tg.showAlert(JSON.stringify(Telegram.tg.WebAppUser));
      Telegram.tg.showAlert(JSON.stringify(Telegram.tg));
    } catch (err) {
      Telegram.tg.showAlert(JSON.stringify(err));
    }
  };

  return (
    <div>
      {/* <h1>{item.name}</h1> */}
      <button onClick={onClick}>Show</button>
    </div>
  );
};

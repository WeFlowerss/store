import { Telegram } from "../../helpers/telegram";
export const FlowerInfo = ({ item }) => {
  const onClick = () => {
    try {
      console.log(item);
      Telegram.tg.showAlert("Hello world");
    } catch {}
  };

  return (
    <div>
      {/* <h1>{item.name}</h1> */}
      <button onClick={onClick}>Show</button>
    </div>
  );
};

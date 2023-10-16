import { Telegram } from "../../helpers/telegram";
export const FlowerInfo = ({ item }) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{JSON.stringify(Telegram.data)}</p>
    </div>
  );
};

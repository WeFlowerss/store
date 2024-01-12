import style from "./WishlistItem.module.css";
import { Button } from "../../Button/Button";
import { Image } from "antd-mobile";
import { DeleteOutline } from "antd-mobile-icons";
import { Telegram } from "../../../helpers/telegram";
import { FlowersAPI } from "../../../repositories/flowers-api";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const WishlistItem = ({ product, onDelete }) => {
  let { image, price, name, _id } = product;
  name = name.replace("Букет", "").slice(2, -1);

  const addToBucket = async () => {
    try {
      FlowersAPI.bucket.addToBucket(+Telegram.data.user.id, _id.toString());
      Notify.success("Успішно додано до кошика");
    } catch {
      Notify.failure("На жаль сталася помилка");
    }
  };

  return (
    <div className={style.item}>
      <div className={style.image}>
        <Image src={image} />
      </div>
      <div>
        <h1 className={style.title}>{name}</h1>
        <p>Вартість: {price}</p>
        <Button callback={addToBucket}>Додати до кошика</Button>
      </div>
      <div>
        <DeleteOutline fontSize={20} onClick={onDelete} />
      </div>
    </div>
  );
};

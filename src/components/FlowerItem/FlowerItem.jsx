import { Button } from "../Button/Button";
import style from "./FlowerItem.module.css";
import { Telegram } from "../../helpers/telegram";
import { FlowersAPI } from "../../repositories/flowers-api";
import { Notify } from "notiflix/build/notiflix-notify-aio";

Notify.init({
  position: "center-center",
  distance: "10px",
});

export const FlowerItem = ({ flower, showModal }) => {
  const { name, image, id, price } = flower;

  const addToBucket = async () => {
    try {
      await FlowersAPI.bucket.addToBucket(Telegram.data.userId, id);
      Notify.success("Успішно додано до кошика");
    } catch {
      Notify.failure("На жаль сталася помилка");
    }
  };

  return (
    <div className={style["flower-item"]} data-id={id}>
      <div className={style["flower-body"]}>
        <div>
          <h3>{name}</h3>
          <h4>Вартість - {price}грн</h4>
        </div>
        <div className={style["flower-buttons"]}>
          <Button callback={showModal}>Show Info</Button>
          <Button callback={addToBucket}>Add To Cart</Button>
        </div>
      </div>
      <div className={style["flower-img"]}>
        <img
          className="lazyload"
          src="https://www.partyperfect.my/wp-content/uploads/2023/04/1.jpg"
          data-src={image}
          alt="bouquet"
        />
      </div>
    </div>
  );
};

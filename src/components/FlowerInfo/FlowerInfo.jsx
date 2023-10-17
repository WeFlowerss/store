import { Telegram } from "../../helpers/telegram";
import { FlowersAPI } from "../../repositories/flowers-api";
import { Button } from "../Button/Button";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import style from "./FlowerInfo.module.css";

Notify.init({
  position: "center-center",
  distance: "10px",
});

export const FlowerInfo = ({ item }) => {
  const { user } = Telegram.data;

  const saveToBucket = async () => {
    FlowersAPI.bucket.addToBucket(+user.id, item._id);
    Notify.success("Успішно додано до кошика");
  };
  const saveToWishList = async () => {
    FlowersAPI.wishlist.saveToWishlist(+user.id, item._id);
    Notify.success("Успішно додано до списку бажань");
  };

  return (
    <div className={style["flower-info"]}>
      <div className={style["flower-img"]}>
        <img
          className="lazyload"
          src="https://www.partyperfect.my/wp-content/uploads/2023/04/1.jpg"
          data-src={item.image}
          alt="bouquet"
        />
      </div>

      <h3 className={style["flower-title"]}>
        {item.name.replace("Букет", "")}
      </h3>

      <div className={style["flower-compounds"]}>
        Склад:
        {item.compound.split("\n").map((el, i) => (
          <p key={i}>{el}</p>
        ))}
      </div>
      <p className={style["flower-desc"]}>{item.description}</p>
      <p className={style["flower-desc"]}>Вартість: {item.price} грн.</p>

      <Button callback={saveToWishList}>Додати до списку бажань</Button>
      <Button isPrimary={true} callback={saveToBucket}>
        Додати до кошика
      </Button>
    </div>
  );
};

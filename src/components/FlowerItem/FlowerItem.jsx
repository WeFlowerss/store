import { Button } from "../Button/Button";
import style from "./FlowerItem.module.css";

export const FlowerItem = ({ flower }) => {
  //   const { id, name, image, price, description, compound } = flower;
  const { name, image, id, price } = flower;
  return (
    <div className={style["flower-item"]} data-id={id}>
      <div className={style["flower-body"]}>
        <div>
          <h3>{name}</h3>
          <h4>Вартість - {price}грн</h4>
        </div>

        <Button>Add To Cart</Button>
      </div>
      <div className={style["flower-img"]}>
        <img src={image} alt="bouquet" />
      </div>
    </div>
  );
};

import { Button } from "../Button/Button";
import style from "./FlowerItem.module.css";

export const FlowerItem = ({ flower, showModal }) => {
  //   const { id, name, image, price, description, compound } = flower;
  const { name, image, id, price } = flower;
  return (
    <div className={style["flower-item"]} data-id={id}>
      <div className={style["flower-body"]}>
        <div>
          <h3>{name}</h3>
          <h4>Вартість - {price}грн</h4>
        </div>
        <div className={style["flower-buttons"]}>
          <Button callback={showModal}>Show Info</Button>
          <Button>Add To Cart</Button>
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

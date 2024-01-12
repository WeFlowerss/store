import style from "./WishlistItem.module.css";
import { Image } from "antd-mobile";
import { DeleteOutline } from "antd-mobile-icons";
export const WishlistItem = ({ product, onDelete }) => {
  console.log(product);
  let { image, price, name } = product;
  name = name.replace("Букет", "").slice(2, -1);
  return (
    <div className={style.item}>
      <div className={style.container}>
        <div className={style.image}>
          <Image src={image} />
        </div>
        <div>
          <h1 className={style.title}>{name}</h1>
          <p>Вартість: {price}</p>
        </div>
      </div>
      <div>
        <DeleteOutline fontSize={20} onClick={onDelete} />
      </div>
    </div>
  );
};

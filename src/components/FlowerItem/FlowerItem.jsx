import style from "./FlowerItem.module.css";

export const FlowerItem = ({ flower }) => {
  //   const { id, name, image, price, description, compound } = flower;
  const { name, image, id, description } = flower;
  return (
    <div className={style["flower-item"]} data-id={id}>
      <div className={style["flower-body"]}>
        <h3>{name}</h3>
        <p>{description}</p>
        <button>Add To Cart</button>
      </div>
      <div className={style["flower-img"]}>
        <img src={image} alt="bouquet" />
      </div>
    </div>
  );
};

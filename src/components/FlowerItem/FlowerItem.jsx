import style from "./FlowerItem.module.css";

export const FlowerItem = ({ flower }) => {
  //   const { id, name, image, price, description, compound } = flower;
  const { name } = flower;
  return (
    <div className={style["flower-item"]}>
      <h1>{name}</h1>
    </div>
  );
};

import style from "./Button.module.css";
export const Button = ({ onCLick, children }) => {
  return (
    <button className={style.button} onClick={onCLick}>
      {children}
    </button>
  );
};

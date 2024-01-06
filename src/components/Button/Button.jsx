import style from "./Button.module.css";

export const Button = ({ callback, children, isPrimary = false }) => {
  return (
    <button
      className={style[isPrimary ? "primary-button" : "button"]}
      onClick={callback}
    >
      {children}
    </button>
  );
};

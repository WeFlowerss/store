import style from "./Modal.module.css";
export const Modal = ({ children }) => {
  return <div className={style.modal}>{children}</div>;
};

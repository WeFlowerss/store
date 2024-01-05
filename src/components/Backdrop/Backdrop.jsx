import style from "./Backdrop.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateModalStatus } from "../../store/backdrop/actions";

export const Backdrop = ({ children }) => {
  const showModal = useSelector((state) => state.backdropReducer.showModal);
  const dispatch = useDispatch();
  const closeBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(updateModalStatus(false));
    }
  };

  if (!showModal) {
    document.body.style.overflow = "scroll";
    return <></>;
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <div onClick={closeBackdrop} className={style.backdrop}>
      {children}
    </div>
  );
};

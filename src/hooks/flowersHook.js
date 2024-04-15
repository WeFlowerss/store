import { useSelector, useDispatch } from "react-redux";
import { fetchFlowers as fetchFlowersAction } from "../store/flowers/actions";

const useFlowersHook = () => {
  const dispatch = useDispatch();
  const flowers = useSelector((state) => state.flowersReducer.flowers);
  const fetchFlowers = (page) => {
    const obj = fetchFlowersAction(page);
    dispatch(fetchFlowersAction(page));
  };
  return [flowers, fetchFlowers];
};

export default useFlowersHook;

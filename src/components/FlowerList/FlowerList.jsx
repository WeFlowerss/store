import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlowers } from "../../store/flowers/actions";

export const FlowerList = () => {
  const flowers = useSelector((state) => state.flowersReducer.flowers);
  const loading = useSelector((state) => state.flowersReducer.loading);
  const error = useSelector((state) => state.flowersReducer.error);
  const dispatch = useDispatch();
  console.log(flowers);

  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Flower List</h1>
      <ul>
        {flowers?.map((flower, index) => (
          <li key={index}>{flower.name}</li>
        ))}
      </ul>
    </div>
  );
};

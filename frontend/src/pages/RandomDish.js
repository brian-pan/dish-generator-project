import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyDishes, reset } from "../features/dishes/dishSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function RandomDish() {
  const { dishes, isLoading, isSuccess, isError } = useSelector(
    (state) => state.dishes
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("effect");
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getMyDishes());
  }, [dispatch]);

  const dish = dishes[Math.floor(Math.random() * dishes.length)];
  if (!!dish) {
    navigate(`/my-dishes/${dish._id}`);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return <></>;
}

export default RandomDish;

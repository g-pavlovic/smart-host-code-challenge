import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { fetchGuests } from "../../redux/actions";

export const useGuestsState = () => useSelector(({
  hotelReducer: { guests }
}: RootState) => guests);

export const useFetchGuestsAction = () => {
  const dispatch = useDispatch();
  return () => dispatch(fetchGuests());
};

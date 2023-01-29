import { Dispatch } from "redux";
import { HOTEL_ACTIONS } from "../action-types";
import guests from "../../data/test.json";

export const fetchGuests = () => (dispatch: Dispatch) => {
  dispatch({
    type: HOTEL_ACTIONS.SET_GUESTS,
    payload: guests,
  });
};

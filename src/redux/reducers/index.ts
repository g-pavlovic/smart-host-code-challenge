import { combineReducers } from "redux";
import hotelReducer, { HotelState } from "./hotel.reducer";

export interface RootState {
  hotelReducer: HotelState;
}

const rootReducer = combineReducers<RootState>({
  hotelReducer,
});

export default rootReducer;

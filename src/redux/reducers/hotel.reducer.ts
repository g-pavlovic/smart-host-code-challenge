import { HOTEL_ACTIONS } from "../action-types";

export interface HotelState {
  guests: number[];
}

const initialState: HotelState = {
  guests: []
};

const hotelReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HOTEL_ACTIONS.SET_GUESTS: {
      return {
        ...state,
        guests: action.payload
      };
    }

    default:
      return state;
  }
};

export default hotelReducer;

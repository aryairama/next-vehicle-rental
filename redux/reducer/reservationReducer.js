const initialState = {
  reservation: {},
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RESERVATION':
      return {
        ...state,
        reservation: action.payload,
      };
    case 'CLEAR_RESERVATION':
      return {
        ...state,
        reservation: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;

const initialState = {
  show: false,
  bg: 'bg-white',
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHOW':
      return {
        ...state,
        show: action.payload.show,
        bg: action.payload.bg,
      };
    default:
      return state;
  }
};

export default loaderReducer;

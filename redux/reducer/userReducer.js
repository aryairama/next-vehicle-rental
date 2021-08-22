const initialState = {
  user: {},
  auth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        auth: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: action.payload,
        auth: false,
      };
    default:
      return state;
  }
};

export default userReducer;

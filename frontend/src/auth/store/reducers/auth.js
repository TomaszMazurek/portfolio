import * as actionTypes from "../actions";

const initialState = {
  token: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      state.error = null;
      state.loading = true;
      break;
    case actionTypes.AUTH_SUCCESS:
      state.token = action.token;
      state.error = null;
      state.loading = false;
      break;
    case actionTypes.AUTH_FAIL:
      state.error = action.error;
      state.loading = false;
      break;
    case actionTypes.AUTH_LOGOUT:
      state.token = null;
      break;
    default:
  }
  return state;
};

export default reducer;

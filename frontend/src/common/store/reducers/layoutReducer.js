import * as actionTypes from "../actions";

const initialState = {
  contentWidth: null,
  contentHeight: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CONTENT_DIMENSIONS:
      state.contentWidth = action.contentWidth || initialState.contentWidth;
      state.contentHeight = action.contentHeight || initialState.contentHeight;
      break;
    default:
  }
  return state;
}

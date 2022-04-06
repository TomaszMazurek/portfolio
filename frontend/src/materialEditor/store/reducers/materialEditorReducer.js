import * as actionTypes from "../actions";

const initialState = {
  rerender: false,
  scene: null,
  meshUUID: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RE_RENDER:
      state.rerender = !state.rerender;
      break;
    case actionTypes.SCENE:
      state.scene = action.scene;
      break;
    case actionTypes.MESH_UUID:
      state.meshUUID = action.meshUUID;
      break;
    default:
  }
  return state;
};

export default reducer;

import * as actionTypes from "./index";

export const reRender = () => {
  return {
    type: actionTypes.RE_RENDER,
  };
};
export const setScene = (scene) => {
  return {
    type: actionTypes.SCENE,
    scene: scene,
  };
};
export const setMeshUUID = (meshUUID) => {
  return {
    type: actionTypes.MESH_UUID,
    meshUUID,
  };
};

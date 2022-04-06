import * as actionTypes from "./index";

export const setLayoutDimensions = ({ width, height }) => {
  return {
    type: actionTypes.CONTENT_DIMENSIONS,
    contentWidth: width,
    contentHeight: height,
  };
};

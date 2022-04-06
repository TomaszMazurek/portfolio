import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useScene } from "../hooks/useScene";
import {getMaterialEditorState} from "../../store/selectors/mEditorSelectors";

function Canvas() {
  const { contentWidth, contentHeight } = useSelector((state) =>
      getMaterialEditorState(state)
  );

  const { renderScene, removeScene } = useScene(contentWidth, contentHeight);

  useEffect(() => {
    (async () => {
      await renderScene();
    })();
      console.log('MEditor canvas useEffect')

    return () => {
      if (removeScene) removeScene();
    };
  }, [removeScene, renderScene]);

  return (
    <div
      id="scene-canvas"
      style={{
        flexBasis: "auto",
        width: `${contentWidth}px`,
        height: `${contentHeight}px`,
      }}
    />
  );
}

export default Canvas;

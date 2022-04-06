import useScene from "../../scene/hooks/useScene";
import {useMaterial} from "../../object/material/useMaterial";

const useShapeMaterial = () => {
  
  const { getMaterial } = useMaterial();
  const { getScene } = useScene();
  const applyMaterial = (newMaterial) => {
    const scene = getScene();
    const [mesh] = scene.children.filter((child) => child.type === "Mesh");
    if (mesh.material) {
      mesh.geometry = newMaterial;
      mesh.material.needsUpdate = true;
    }
  };
  const setPhongMaterial = () => {
    applyMaterial(getMaterial());
  };
  return { setPhongMaterial };
};

export default useShapeMaterial;

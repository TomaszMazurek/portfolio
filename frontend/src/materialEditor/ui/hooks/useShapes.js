import useGeometry from "../../object/geometry/useGeometry";
import {
  boxParameters,
  octahedronParameters,
  sphereParameters,
  tetrahedronParameters,
} from "../../object/geometry/parameters";
import useScene from "../../scene/hooks/useScene";

const useShapes = () => {
  const {
    getSphereGeometry,
    getBoxGeometry,
    getTetrahedronGeometry,
    getOctahedronGeometry,
  } = useGeometry();
  const { getScene } = useScene();

  const applyGeometry = (newGeo) => {
    const scene = getScene();
    const [mesh] = scene.children.filter((child) => child.type === "Mesh");
    if (mesh.geometry) {
      mesh.geometry.dynamic = true;
      mesh.geometry = newGeo;
      mesh.geometry.verticesNeedUpdate = true;
    }
  };
  const setSphereShape = () => {
    applyGeometry(getSphereGeometry({ ...sphereParameters }));
  };
  const setCubeShape = () => {
    applyGeometry(getBoxGeometry({ ...boxParameters }));
  };
  const setTetrahedronShape = () => {
    applyGeometry(getTetrahedronGeometry({ ...tetrahedronParameters }));
  };
  const setOctahedronShape = () => {
    applyGeometry(getOctahedronGeometry({ ...octahedronParameters }));
  };

  return {
    setSphereShape,
    setCubeShape,
    setTetrahedronShape,
    setOctahedronShape,
  };
};

export default useShapes;

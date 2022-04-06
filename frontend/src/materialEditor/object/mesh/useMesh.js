import * as THREE from "three";
import { useMaterial } from "../material/useMaterial";
import { useDispatch } from "react-redux";
import { setMeshUUID } from "../../store/actions/actionsCreators";
import useGeometry from "../geometry/useGeometry";
const mesh = new THREE.Mesh();

export const useMesh = () => {
  const { getMaterial } = useMaterial();
  const { getBoxGeometry } = useGeometry();
  const dispatch = useDispatch();
  dispatch(setMeshUUID(mesh.uuid));

  const createMesh = async () => {
    const meshMaterial = await getMaterial();
    const meshGeo = getBoxGeometry({ x: 1, y: 1, z: 1 });
    mesh.material = meshMaterial;
    mesh.geometry = meshGeo;
    return { mesh };
  };

  const getMesh = () => mesh;
  return { createMesh, getMesh };
};

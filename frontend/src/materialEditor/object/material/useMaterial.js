import * as THREE from "three";
import { textures2D } from "../textures/constants";

import useTextures from "../textures/useTextures";
export const useMaterial = () => {
  const { getTexture } = useTextures();
  const getMaterial = async () => {
    const texture = await getTexture(textures2D.Wood4);
    return new THREE.MeshPhongMaterial({ map: texture });
  };
  return { getMaterial };
};

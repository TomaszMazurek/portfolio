import * as THREE from "three";
import {
  boxParameters,
  octahedronParameters,
  sphereParameters,
  tetrahedronParameters,
} from "./parameters";

const useGeometry = () => {
  const getBoxGeometry = (dims = { ...boxParameters }) =>
    new THREE.BoxGeometry(dims.x, dims.y, dims.z);

  const getSphereGeometry = (dims = { ...sphereParameters }) =>
    new THREE.SphereGeometry(
      dims.radius,
      dims.segmentWidth,
      dims.segmentHeight
    );
  const getTetrahedronGeometry = (dims = { ...tetrahedronParameters }) =>
    new THREE.TetrahedronGeometry(dims.radius, dims.details);

  const getOctahedronGeometry = (dims = { ...octahedronParameters }) =>
    new THREE.OctahedronGeometry(dims.radius, dims.details);

  return {
    getBoxGeometry,
    getSphereGeometry,
    getTetrahedronGeometry,
    getOctahedronGeometry,
  };
};

export default useGeometry;

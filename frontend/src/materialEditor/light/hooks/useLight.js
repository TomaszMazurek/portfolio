import { DirectionalLight, PointLight } from "three";
import * as THREE from "three";

const useLight = () => {
  const getPointLights = () => {
    const pointLights = [];
    pointLights[0] = new PointLight(0xffffff, 0.5, 0);
    pointLights[1] = new PointLight(0xffffff, 0.5, 0);
    pointLights[2] = new PointLight(0xffffff, 0.5, 0);
    pointLights[0].position.set(0, 200, 0);
    pointLights[1].position.set(100, 200, 100);
    pointLights[2].position.set(-100, -200, -100);
    return pointLights;
  };

  const getDirectionalLight = () => {
    const color = 0xffffff;
    const intensity = 0.5;

    const directionalLight = new DirectionalLight(color, intensity);
    directionalLight.position.set(150, 100, 150);
    directionalLight.target.position.set(-5, 0, 0);
    return directionalLight;
  };

  const getAmbientLight = () => {
    const color = 0xffffff;
    const intensity = 0.3;

    return new THREE.AmbientLight(color, intensity);
  };

  const getLights = async () => {
    const pointLights = getPointLights();
    const directionalLight = getDirectionalLight();
    const ambientLight = getAmbientLight();
    return { pointLights, directionalLight, ambientLight };
  };

  return { getLights };
};

export default useLight;

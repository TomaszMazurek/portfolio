import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useDispatch, useSelector } from "react-redux";
import { getMaterialEditorState } from "../../store/selectors/mEditorSelectors";
import { useMesh } from "../../object/mesh/useMesh";
import useLight from "../../light/hooks/useLight";
import { setScene } from "../../store/actions/actionsCreators";
import useSkybox from "./useSkybox";

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);

const sceneCanvas = {
  camera: null,
  light: null,
  controls: null,
};

export const useScene = () => {
  const { contentWidth, contentHeight } = useSelector((state) =>
      getMaterialEditorState(state)
  );
  const dispatch = useDispatch();
  const { createMesh } = useMesh();
  const { getLights } = useLight();
  const { getSkyBox } = useSkybox();
  const addObjectToScene = (object) => {
    scene?.add(object);
  };

  function onWindowResize() {
    sceneCanvas.camera.aspect = window.innerWidth / window.innerHeight;
    sceneCanvas.camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  const renderScene = async () => {
    const { mesh } = await createMesh();
    const { pointLights, ambientLight } = await getLights();
    const { skyBox } = await getSkyBox();
    scene.background = skyBox;
    pointLights.forEach((light) => scene.add(light));
    scene.add(ambientLight);
    //ADD CAMERA
    sceneCanvas.camera = new THREE.PerspectiveCamera(
      75,
      contentWidth / contentHeight,
      0.1,
      1000
    );

    sceneCanvas.camera.position.z = 2;
    sceneCanvas.camera.position.x = 3;
    //ADD RENDERER
    renderer.setClearColor("#dcdcdc"); // === sceneCanvas.scene.background = new THREE.Color(0xdcdcdc);
    renderer.setSize(contentWidth, contentHeight);
    sceneCanvas.canvasMount = document.getElementById("scene-canvas");
    sceneCanvas.canvasMount.appendChild(renderer.domElement);
    sceneCanvas.controls = new OrbitControls(
      sceneCanvas.camera,
      sceneCanvas.canvasMount
    );
    sceneCanvas.controls.target.set(0, 0, 0);
    sceneCanvas.controls.update();
    window.addEventListener("resize", onWindowResize, false);

    addObjectToScene(mesh);

    dispatch(setScene(scene.toJSON()));

    const animate = (time) => {
      mesh.rotation.x = time / 3000;
      mesh.rotation.y = time / 3000;

      renderer.render(scene, sceneCanvas.camera);
    };
    console.log('MEditor render scene')
    return renderer.setAnimationLoop(animate);
  };
  const removeScene = () => {
    sceneCanvas.canvasMount.removeChild(renderer.domElement);
    scene.clear();
  };

  const getScene = () => scene;

  return { renderScene, removeScene, getScene };
};

export default useScene;

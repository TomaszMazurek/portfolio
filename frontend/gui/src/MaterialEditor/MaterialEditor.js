import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class MaterialEditor extends React.Component {
  //state = {  }
  scene = null;
  camera = null;
  renderer = null;
  controls = null;
  mount = null;
  directionalLight = null;
  hemisphereLight = null;
  ambientLight = null;
  content = null;
  footer = null;
  parent = null;
  root = null;

  componentDidMount() {
    this.init();
    this.addSelectedObjects();
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.root.removeChild(this.renderer.domElement);
    this.parent.appendChild(this.content);
    this.parent.appendChild(this.footer);
  }

  init = () => {
    this.root = document.getElementById("root");
    const header = document.getElementById("header");
    const width = window.innerWidth;
    const height = window.innerHeight - header.clientHeight * 1.1; //- this.root.offsetHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setClearColor(new THREE.Color("white"), 1);

    camera.position.x = 100;
    camera.position.y = 100;
    camera.position.z = 100;

    renderer.setSize(width, height);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.controls = new OrbitControls(camera, renderer.domElement);
    this.controls.enableZoom = true;

    this.content = document.getElementById("content");
    this.footer = document.getElementById("footer");
    this.parent = this.content.parentNode;

    this.parent.removeChild(this.footer);
    this.parent.removeChild(this.content);

    this.root.appendChild(this.renderer.domElement);

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.createHemisphereLight(0xffffff, 0x080820);
    this.createAmbientLight(new THREE.Color(0x666666), 0.55);
    this.createDirectionalLight(
      0xffffff,
      new THREE.Vector3(1000, 2500, 0),
      0.7
    );
    //this.createPointLight(0xffffff, new THREE.Vector3(500, 500, 500), 0.55);
    //this.createPointLight(0xffffff, new THREE.Vector3(-500, 500, -500), 0.55);
  };

  addSelectedObjects = () => {
    let positionArray;

    if (window.localStorage.test) {
      let newArray;
      let data = [];
      data = window.localStorage.test.split(",");
      newArray = new Float32Array(data.length);
      for (let i = 0; i < data.length; i++) {
        newArray[i] = parseFloat(data[i]);
      }
      positionArray = newArray;
    } else {
      positionArray = new Float32Array();
    }

    const material = new THREE.MeshPhongMaterial({
      color: 0x4ad7ff,
      shininess: 130,
    });

    const geometry = new THREE.BoxGeometry(50, 50, 50);

    const mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);
    //window.me = { mesh: mesh };
  };

  createDirectionalLight = (_color, _position, intensity) => {
    var color = _color ? _color : 0xffffff;
    var position = _position ? _position : new THREE.Vector3(300, 300, 300);

    this.directionalLight = new THREE.DirectionalLight(
      color,
      intensity || 0.55
    );
    this.directionalLight.position.set(position.x, position.y, position.z);
    /*

    this.directionalLight.castShadow = true;

    this.directionalLight.shadow.mapSize.width = 1024;
    this.directionalLight.shadow.mapSize.height = 1024;

    this.directionalLight.shadow.camera.near = this.near;
    this.directionalLight.shadow.camera.far = this.far;
    this.directionalLight.shadow.camera.fov = this.fov;

    this.directionalLight.shadow.camera.left = -this.shadowDiameter;
    this.directionalLight.shadow.camera.right = this.shadowDiameter;
    this.directionalLight.shadow.camera.top = this.shadowDiameter;
    this.directionalLight.shadow.camera.bottom = -this.shadowDiameter;
*/

    /*        this.directionalLight.shadow.bias = 0.001;*/
    this.directionalLight.intensity = 0.4;
    this.scene.add(this.directionalLight);
  };
  createAmbientLight = (_color, intensity) => {
    var color = _color ? _color : 0x404040;
    this.ambientLight = new THREE.AmbientLight(color, intensity || 0.55);
    this.scene.add(this.ambientLight);
  };

  createHemisphereLight = (_color, ground) => {
    var color = _color ? _color : 0xffffff;
    this.hemisphereLight = new THREE.HemisphereLight(color, ground, 0.5);
    this.scene.add(this.hemisphereLight);
  };

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.controls.update();
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return <div></div>;
  }
}

export default MaterialEditor;

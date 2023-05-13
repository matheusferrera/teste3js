import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Threeasy from "threeasy";

const app = new Threeasy(THREE, {alpha: true });

var loader = new GLTFLoader();

/* You must download your own .gltf model and reference it below.
   If you do not see it, the model may be too small, try to adjust
   the scale values below. */
let modelUrl = 'out.glb'

loader.load( modelUrl, function ( gltf ) {

    console.log(gltf.scene);
    gltf.scene.scale.x = 5
    gltf.scene.scale.y = 5
    gltf.scene.scale.z = 5

    gltf.scene.rotation.x = 1
    gltf.scene.rotation.y = .4
    gltf.scene.rotation.z = 0

    app.scene.add( gltf.scene );
    console.log(app.camera)
    window.addEventListener('scroll', onScroll);

    function onScroll() {
      const scrollY = window.scrollY;
      console.log(scrollY)
      const rotationSpeed = 0.001;
      gltf.scene.rotation.x = scrollY * rotationSpeed;
      gltf.scene.rotation.y = scrollY * rotationSpeed;
      app.camera.position.set(0, 0, scrollY/100);
    }
  
  }, undefined, function ( e ) {
    console.error( e );
  });

const light = new THREE.AmbientLight( 0xffffff ); // soft white light
light.intensity = 3;

app.scene.add(light);
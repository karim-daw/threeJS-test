import './style.css'
import * as THREE from 'three';

// importing scene and cameria
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera (
  75 , window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

// creating render scene settings
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);

// creating box material
const geometry = new THREE.BoxGeometry(16,4,8)
const material = new THREE.MeshStandardMaterial({
  color: 0xFF9347
});

// creating light
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)
scene.add(pointLight);






// function that builds basic building
function buildBuilding(floorCount) {
  
  let floorHeight = -5;


  for (let i = 0; i < floorCount; i++) {
    const box = new THREE.Mesh(geometry, material);
    box.position.y = floorHeight;
    scene.add(box);
    animate(box)
    floorHeight += 4.2
  }
  //renderer.render(scene, camera);
}

function animate(myBox) {
  requestAnimationFrame( animate );

  myBox.rotation.x += 0.04;
  myBox.rotation.y += 0.34;
  renderer.render(scene, camera);
}

buildBuilding(4);

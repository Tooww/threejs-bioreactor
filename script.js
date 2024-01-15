import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const texture = new THREE.TextureLoader().load( "./myce.jpg" );

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 15);

// Import the canvas element
const canvas = document.getElementById('canvas');

// Create a WebGLRenderer and set its width and height
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    // Antialiasing is used to smooth the edges of what is rendered
    antialias: true,
    // Activate the support of transparency
    alpha: true
});

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );

const loader = new GLTFLoader();

loader.load( './poly.glb', function ( gltf ) {

    gltf.scene.scale.set(100, 100, 100)

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

// Create the controls
const controls = new OrbitControls(camera, canvas);

// Handle the window resize event
window.addEventListener('resize', () => {
    // Update the camera
    camera.aspect =  window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update the renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
});


const textureLoader = new THREE.TextureLoader();

// Adding a background
let textureEquirec = textureLoader.load( 'background.jpg' );
textureEquirec.mapping = THREE.EquirectangularReflectionMapping;
textureEquirec.colorSpace = THREE.SRGBColorSpace;

scene.background = textureEquirec;

// Add a light
const light = new THREE.PointLight( 0xffffff, 1, 0, 0 );
light.position.set( 0, 105,  0 );
scene.add( light );   

//add abient light
const ambientLight = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( ambientLight );


// Create a a box 
const box_geo = new THREE.BoxGeometry( 6, 3, 10 );
const box_mat = new THREE.MeshBasicMaterial( { 
    
    color: 0xffffff,
    map: texture,
    envMapIntensity: 1.0,
    ior: 1.25,
    iridescence: 0.8,
    metalness: 0,
    roughness: 0.2,
    thickness: 5.0,
    transmission: 1.0,
    //opacity: 0.1,
} );
const box_mesh = new THREE.Mesh(box_geo, box_mat);
box_mesh.position.set(0, 17, 0);
scene.add(box_mesh);

// Create another shere
const box_geo2 = new THREE.OctahedronGeometry( 1, 0 );
const box_mat2 = new THREE.MeshLambertMaterial( {
    clearcoat: 0.3,
    clearcoatRoughness: 0.25,
    color: 0x39f7f7,
    
    envMapIntensity: 1.0,
    ior: 1.25,
    iridescence: 0.8,
    metalness: 0,
    roughness: 0.2,
    thickness: 5.0,
    transmission: 1.0,
} );
const box_mesh2 = new THREE.Mesh(box_geo2, box_mat2);
box_mesh2.position.set(-2, 19.5, 5);
scene.add(box_mesh2);


// Create another shere
const box_geo3 = new THREE.OctahedronGeometry( 1, 0 );
const box_mat3 = new THREE.MeshLambertMaterial( {
    clearcoat: 0.3,
    clearcoatRoughness: 0.25,
    color: 0x39f7f7,
    
    envMapIntensity: 1.0,
    ior: 1.25,
    iridescence: 0.8,
    metalness: 0,
    roughness: 0.2,
    thickness: 5.0,
    transmission: 1.0,
} );
const box_mesh3 = new THREE.Mesh(box_geo2, box_mat2);
box_mesh3.position.set(0, 78.7, -3);
scene.add(box_mesh3);


// Create another shere
const box_geo4 = new THREE.OctahedronGeometry( 1, 0 );
const box_mat4 = new THREE.MeshLambertMaterial( {
    clearcoat: 0.3,
    clearcoatRoughness: 0.25,
    color: 0x39f7f7,
    
    envMapIntensity: 1.0,
    ior: 1.25,
    iridescence: 0.8,
    metalness: 0,
    roughness: 0.2,
    thickness: 5.0,
    transmission: 1.0,
} );
const box_mesh4 = new THREE.Mesh(box_geo2, box_mat2);
box_mesh4.position.set(0, 78.7, -3);
scene.add(box_mesh4);

// Create another shere
const box_geo5 = new THREE.OctahedronGeometry( 1, 0 );
const box_mat5 = new THREE.MeshLambertMaterial( {
    clearcoat: 0.3,
    clearcoatRoughness: 0.25,
    color: 0x39f7f7,
    
    envMapIntensity: 1.0,
    ior: 1.25,
    iridescence: 0.8,
    metalness: 0,
    roughness: 0.2,
    thickness: 5.0,
    transmission: 1.0,
} );
const box_mesh5 = new THREE.Mesh(box_geo2, box_mat2);
box_mesh5.position.set(-6, 78.7 - 9, 4.5);
scene.add(box_mesh5);


// Create another shere
const box_geo6 = new THREE.OctahedronGeometry( 1, 0 );
const box_mat6 = new THREE.MeshLambertMaterial( {
    clearcoat: 0.3,
    clearcoatRoughness: 0.25,
    color: 0x39f7f7,
    
    envMapIntensity: 1.0,
    ior: 1.25,
    iridescence: 0.8,
    metalness: 0,
    roughness: 0.2,
    thickness: 5.0,
    transmission: 1.0,
} );
const box_mesh6 = new THREE.Mesh(box_geo2, box_mat2);
box_mesh6.position.set(6, 78.7 - 9, -11);
scene.add(box_mesh6);

// Create another shere
const box_geo7 = new THREE.BoxGeometry( 15, 1, 1 );
const box_mat7 = new THREE.MeshLambertMaterial( {
    clearcoat: 0.3,
    clearcoatRoughness: 0.25,
    color: 0xe6490b,
    
    envMapIntensity: 1.0,
    ior: 1.25,
    iridescence: 0.8,
    metalness: 0,
    roughness: 0.2,
    thickness: 5.0,
    transmission: 1.0,
} );
const box_mesh7 = new THREE.Mesh(box_geo7, box_mat7);
box_mesh7.position.set(0, 15, -14);
scene.add(box_mesh7);

// Create another shere
const box_geo8 = new THREE.OctahedronGeometry( 1, 0 );
const box_mat8 = new THREE.MeshLambertMaterial( {
    clearcoat: 0.3,
    clearcoatRoughness: 0.25,
    color: 0x39f7f7,
    
    envMapIntensity: 1.0,
    ior: 1.25,
    iridescence: 0.8,
    metalness: 0,
    roughness: 0.2,
    thickness: 5.0,
    transmission: 1.0,
} );
const box_mesh8 = new THREE.Mesh(box_geo8, box_mat8);
box_mesh8.position.set(0, 16.5, -14);
scene.add(box_mesh8);










// Create the box
/*const box_geo = new THREE.BoxGeometry( 5, 32, 32 );
const box_mat = new THREE.MeshPhysicalMaterial( {
    clearcoat: 0.3,
    clearcoatRoughness: 0.25,
    color: 0xf73939,
    envMap: textureEquirec,
    envMapIntensity: 1.0,
    ior: 1.25,
    iridescence: 0.8,
    metalness: 0,
    roughness: 0.2,
    thickness: 5.0,
    transmission: 1.0,
    //opacity: 0.1,
} );
const box_mesh = new THREE.Mesh(box_geo, box_mat);
scene.add(box_mesh);

// Create another box
const box_geo2 = new THREE.BoxGeometry( 5, 32, 32 );
const box_mat2 = new THREE.MeshPhysicalMaterial( {
    clearcoat: 0.3,
    clearcoatRoughness: 0.25,
    color: 0x39f7f7,
    envMap: textureEquirec,
    envMapIntensity: 1.0,
    ior: 1.25,
    iridescence: 0.8,
    metalness: 0,
    roughness: 0.2,
    thickness: 5.0,
    transmission: 1.0,
} );
const box_mesh2 = new THREE.Mesh(box_geo2, box_mat2);
box_mesh2.position.set(30, 0, 0);
scene.add(box_mesh2);

// Create another box
const box_geo3 = new THREE.BoxGeometry( 5, 32, 32 );
const box_mat3 = new THREE.MeshPhysicalMaterial( {
    clearcoat: 0.3,
    clearcoatRoughness: 0.25,
    color: 0x16f51d,
    envMap: textureEquirec,
    envMapIntensity: 1.0,
    ior: 1.25,
    iridescence: 0.8,
    metalness: 0,
    roughness: 0.2,
    thickness: 5.0,
    transmission: 1.0,
} );
const box_mesh3 = new THREE.Mesh(box_geo3, box_mat3);
box_mesh3.position.set(60, 0, 0);
scene.add(box_mesh3);

//create a capsule
const capsule_geo = new THREE.CapsuleGeometry( 2, 22, 1, 20 );
const capsule_mat = new THREE.MeshBasicMaterial( {
    color: 0x000000,
    wireframe: false,
    envMap: textureEquirec,
    envMapIntensity: 1.0,
    ior: 1.25,
    iridescence: 0.8,
    
     

} );
const capsule_mesh = new THREE.Mesh(capsule_geo, capsule_mat);
capsule_mesh.position.set(-60, 0, 0);
// rotate the capsule to look like a pill
capsule_mesh.rotation.set(0, 0, 3.14/2);

scene.add(capsule_mesh);

const scene2 = new THREE.Scene();
scene2.fog = new THREE.Fog( 0xcccccc, 10, 15 );

*/

// Create a Torus Knot 
//const knot_geo = new THREE.TorusKnotGeometry( 1, 0.4); 
//const knot_mat = new THREE.MeshNormalMaterial( { color: 0xffff00 } ); 
//const knot_mesh = new THREE.Mesh( knot_geo, knot_mat ); 
//knot_mesh.position.set(0, 0, 0);
//scene.add( knot_mesh );

// Create the animation loop
const animate = () => {
    // Call animate recursively
    requestAnimationFrame(animate);

    // Update the controls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

// Call animate for the first time
animate(); 
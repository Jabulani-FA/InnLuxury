import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { DecalGeometry } from 'three/examples/jsm/geometries/DecalGeometry';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const BulletMarkSphere = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Light
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    // Camera position
    camera.position.z = 5;

    // Sphere with bumpy surface
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const positionAttribute = geometry.attributes.position;
    for (let i = 0; i < positionAttribute.count; i++) {
      const vector = new THREE.Vector3().fromBufferAttribute(positionAttribute, i);
      const length = 1 + Math.random() * 0.2; // Make the sphere bumpy
      vector.normalize().multiplyScalar(length);
      positionAttribute.setXYZ(i, vector.x, vector.y, vector.z);
    }
    geometry.attributes.position.needsUpdate = true;

    const material = new THREE.MeshStandardMaterial({
      color: 0x0077ff,
      flatShading: true,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Load decal texture
    const textureLoader = new THREE.TextureLoader();
    const decalTexture = textureLoader.load('bullet-hole.png'); // Replace with your texture path

    const decalMaterial = new THREE.MeshStandardMaterial({
      map: decalTexture,
      transparent: true,
      depthTest: true,
      depthWrite: false,
    });

    // Add bullet mark function
    const addBulletMark = (position, normal, size) => {
      const decalGeometry = new DecalGeometry(
        sphere,
        position,
        normal,
        new THREE.Vector3(size, size, size)
      );
      const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);
      scene.add(decalMesh);
    };

    // Raycasting for mouse clicks
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleClick = (event) => {
      // Convert mouse position to normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Raycast to find intersection
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(sphere);

      if (intersects.length > 0) {
        const intersect = intersects[0];
        const { point, face } = intersect;

        // Add bullet mark
        const normal = face.normal.clone().transformDirection(sphere.matrixWorld);
        addBulletMark(point, normal, 0.2); // Adjust size of bullet mark
      }
    };

    window.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('click', handleClick);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default BulletMarkSphere;

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Cube = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.05;

      // Render the scene with the camera
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // Clean up on unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Cube;

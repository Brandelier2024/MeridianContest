"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff1dc, 2.2);
    dirLight.position.set(5, 7, 5);
    scene.add(dirLight);

    const redRimLight = new THREE.PointLight(0xdc1e43, 3.5, 15);
    redRimLight.position.set(-5, -2, 3);
    scene.add(redRimLight);

    const goldPointLight = new THREE.PointLight(0xffb703, 3.0, 15);
    goldPointLight.position.set(4, 3, 2);
    scene.add(goldPointLight);

    // 3. Central 3D Group: Meridian Ice Cream Tub & Golden Prize Orb
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Tub Body (Cylinder with taper)
    const tubGeometry = new THREE.CylinderGeometry(1.6, 1.3, 2.5, 48);
    const tubMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.18,
      metalness: 0.08,
      clearcoat: 0.4,
      clearcoatRoughness: 0.1,
    });
    const tubMesh = new THREE.Mesh(tubGeometry, tubMaterial);
    tubMesh.position.y = -0.2;
    mainGroup.add(tubMesh);

    // Tub Brand Ribbon (Meridian Crimson Red)
    const ribbonGeo = new THREE.CylinderGeometry(1.61, 1.45, 1.2, 48);
    const ribbonMat = new THREE.MeshStandardMaterial({
      color: 0xdc1e43,
      roughness: 0.25,
      metalness: 0.15,
    });
    const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
    ribbonMesh.position.y = -0.2;
    mainGroup.add(ribbonMesh);

    // Gold Trim Ring (shared geometry to avoid memory leaks)
    const ringGeo = new THREE.TorusGeometry(1.62, 0.04, 16, 64);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.85,
      roughness: 0.15,
    });
    const topRing = new THREE.Mesh(ringGeo, goldMat);
    topRing.rotation.x = Math.PI / 2;
    topRing.position.y = 0.4;
    mainGroup.add(topRing);

    const bottomRing = new THREE.Mesh(ringGeo, goldMat);
    bottomRing.rotation.x = Math.PI / 2;
    bottomRing.position.y = -0.8;
    bottomRing.scale.set(0.92, 0.92, 0.92);
    mainGroup.add(bottomRing);

    // Tub Lid with Meridian Blue Accent
    const lidGeometry = new THREE.CylinderGeometry(1.72, 1.7, 0.35, 48);
    const lidMaterial = new THREE.MeshStandardMaterial({
      color: 0x046bd2,
      roughness: 0.15,
      metalness: 0.2,
    });
    const lidMesh = new THREE.Mesh(lidGeometry, lidMaterial);
    lidMesh.position.y = 1.15;
    mainGroup.add(lidMesh);

    // Floating Golden Prize Seal / Coin
    const medalGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.1, 32);
    const medalMesh = new THREE.Mesh(medalGeo, goldMat);
    medalMesh.rotation.x = Math.PI / 2;
    medalMesh.position.set(0, -0.2, 1.58);
    mainGroup.add(medalMesh);

    // 4. Floating 3D Sparkle Crystals & Golden Orbs
    const particleCount = 28;
    const particlesGroup = new THREE.Group();
    scene.add(particlesGroup);

    const gemGeo = new THREE.OctahedronGeometry(0.12, 0);
    const gemMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.9,
      roughness: 0.1,
    });

    const gems: { mesh: THREE.Mesh; speed: number; phase: number; radius: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const scale = 0.6 + Math.random() * 0.9;
      const mesh = new THREE.Mesh(gemGeo, gemMat);
      mesh.scale.set(scale, scale, scale);

      const radius = 2.4 + Math.random() * 2.2;
      const phase = Math.random() * Math.PI * 2;
      const speed = (0.2 + Math.random() * 0.3) * (Math.random() > 0.5 ? 1 : -1);

      mesh.position.set(
        Math.cos(phase) * radius,
        (Math.random() - 0.5) * 4.5,
        Math.sin(phase) * radius
      );

      particlesGroup.add(mesh);
      gems.push({ mesh, speed, phase, radius });
    }

    // 5. Interactive Cursor Movement & Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.45;
      targetY = y * 0.35;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. Responsive Window Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 7. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth cursor parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        // Subtle rotational spin + float
        mainGroup.rotation.y = elapsedTime * 0.45 + mouseX;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.8) * 0.08 + mouseY;
        mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;

        // Orbit particles
        gems.forEach((gem) => {
          gem.phase += gem.speed * delta;
          gem.mesh.position.x = Math.cos(gem.phase) * gem.radius;
          gem.mesh.position.z = Math.sin(gem.phase) * gem.radius;
          gem.mesh.rotation.x += 0.02;
          gem.mesh.rotation.y += 0.03;
        });

        // Dynamic light follow
        goldPointLight.position.x = 4 + mouseX * 2;
        goldPointLight.position.y = 3 + mouseY * 2;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Robust Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      scene.clear();
      tubGeometry.dispose();
      tubMaterial.dispose();
      ribbonGeo.dispose();
      ribbonMat.dispose();
      ringGeo.dispose();
      goldMat.dispose();
      lidGeometry.dispose();
      lidMaterial.dispose();
      medalGeo.dispose();
      gemGeo.dispose();
      gemMat.dispose();
      renderer.forceContextLoss?.();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="img"
      className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Meridian Ice Cream Festive Tub Showcase"
    />
  );
}

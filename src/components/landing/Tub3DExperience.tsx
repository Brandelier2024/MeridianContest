"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as THREE from "three";
import { Sparkles, RotateCw, Check, QrCode } from "lucide-react";

interface FlavorOption {
  id: string;
  name: string;
  flavorColor: string;
  lidColor: string;
  badge: string;
  tagline: string;
  imageFallback: string;
}

const FLAVORS: FlavorOption[] = [
  {
    id: "honey-nut",
    name: "Honey Nut Crunch",
    flavorColor: "#fef3c7",
    lidColor: "#046bd2",
    badge: "Official Contest Star",
    tagline: "Roasted Almonds & Golden Honey",
    imageFallback: "/images/sec_02.png",
  },
  {
    id: "alphonso-mango",
    name: "Real Alphonso Mango",
    flavorColor: "#fed7aa",
    lidColor: "#045cb4",
    badge: "100% Ratnagiri Pulp",
    tagline: "Pure Dairy Churned Mango",
    imageFallback: "/images/sec_00.png",
  },
  {
    id: "sitaphal",
    name: "Real Sitaphal",
    flavorColor: "#dcfce7",
    lidColor: "#046bd2",
    badge: "Pune Heritage Favorite",
    tagline: "Fresh Custard Apple & Malai",
    imageFallback: "/images/sec_04.png",
  },
  {
    id: "belgian-chocolate",
    name: "Belgian Chocolate",
    flavorColor: "#3e2723",
    lidColor: "#1e293b",
    badge: "Rich Bittersweet Cocoa",
    tagline: "Decadent Choco Shavings",
    imageFallback: "/images/sec_08.png",
  },
];

function generateTubTexture(flavor: FlavorOption): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  // Base background
  ctx.fillStyle = flavor.flavorColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Top and bottom decorative borders
  ctx.fillStyle = flavor.lidColor;
  ctx.fillRect(0, 0, canvas.width, 36);
  ctx.fillRect(0, canvas.height - 36, canvas.width, 36);

  // Gold accent pinstripes
  ctx.fillStyle = "#f59e0b";
  ctx.fillRect(0, 36, canvas.width, 8);
  ctx.fillRect(0, canvas.height - 44, canvas.width, 8);

  // Repeat label twice around the 360 cylinder
  for (let offset = 0; offset < canvas.width; offset += canvas.width / 2) {
    const cx = offset + canvas.width / 4;

    // Oval crest background
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, 160, 68, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#f59e0b";
    ctx.stroke();
    ctx.restore();

    // Meridian Brand Name
    ctx.fillStyle = flavor.lidColor;
    ctx.font = "bold 44px 'Baloo Da 2', 'Nunito', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("MERIDIAN", cx, 160);

    ctx.fillStyle = "#da0e2f";
    ctx.font = "bold 18px 'Nunito', sans-serif";
    ctx.letterSpacing = "4px";
    ctx.fillText("ICE CREAMS • EST. 1999", cx, 185);

    // Flavor Title banner
    ctx.fillStyle = flavor.lidColor === "#1e293b" ? "#ffffff" : "#1e293b";
    ctx.font = "bold 34px 'Baloo Da 2', sans-serif";
    ctx.fillText(flavor.name, cx, 275);

    // Tagline & dairy seal
    ctx.fillStyle = "#da0e2f";
    ctx.font = "600 20px 'Nunito', sans-serif";
    ctx.fillText(flavor.tagline, cx, 315);

    ctx.fillStyle = "#045cb4";
    ctx.font = "bold 16px 'Nunito', sans-serif";
    ctx.fillText("★ 100% PURE DAIRY MILK • NO VEG OIL ★", cx, 360);

    // Contest QR callout badge on tub
    ctx.fillStyle = "#f59e0b";
    ctx.beginPath();
    ctx.roundRect(cx - 150, 400, 300, 48, 24);
    ctx.fill();

    ctx.fillStyle = "#111111";
    ctx.font = "bold 18px 'Nunito', sans-serif";
    ctx.fillText("SCAN UNDER LID TO WIN", cx, 432);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;
  return texture;
}

export function Tub3DExperience() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorOption>(FLAVORS[0]);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const tubMeshRef = useRef<THREE.Group | null>(null);
  const tubBodyMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const tubLidMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);

  // Check WebGL availability
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setWebGLSupported(false);
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    if (!webGLSupported || !mountRef.current) return;

    const mountNode = mountRef.current;
    const width = mountNode.clientWidth;
    const height = mountNode.clientHeight || 420;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setWebGLSupported(false);
      return;
    }

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 8.5);

    // 2. Renderer settings
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const domCanvas = renderer.domElement;
    mountNode.appendChild(domCanvas);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.2);
    keyLight.position.set(5, 7, 6);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x046bd2, 1.8);
    rimLight.position.set(-6, 2, -4);
    scene.add(rimLight);

    const bottomFillLight = new THREE.PointLight(0xffbc7d, 1.2, 12);
    bottomFillLight.position.set(0, -3, 3);
    scene.add(bottomFillLight);

    // 4. Create 3D Tub Model
    const tubGroup = new THREE.Group();

    // Tub Body: tapered cylinder
    const tubBodyGeo = new THREE.CylinderGeometry(2.1, 1.65, 3.2, 48, 1, true);
    const tubBodyTexture = generateTubTexture(selectedFlavor);
    const tubBodyMat = new THREE.MeshStandardMaterial({
      map: tubBodyTexture,
      roughness: 0.35,
      metalness: 0.08,
    });
    tubBodyMaterialRef.current = tubBodyMat;

    const tubBody = new THREE.Mesh(tubBodyGeo, tubBodyMat);
    tubBody.castShadow = true;
    tubBody.receiveShadow = true;
    tubGroup.add(tubBody);

    // Tub Bottom Base Plate
    const bottomGeo = new THREE.CircleGeometry(1.65, 48);
    const bottomMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.5,
    });
    const bottomMesh = new THREE.Mesh(bottomGeo, bottomMat);
    bottomMesh.rotation.x = Math.PI / 2;
    bottomMesh.position.y = -1.6;
    tubGroup.add(bottomMesh);

    // Tub Lid: slightly wider cylinder on top
    const lidGeo = new THREE.CylinderGeometry(2.22, 2.22, 0.42, 48);
    const lidMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(selectedFlavor.lidColor),
      roughness: 0.25,
      metalness: 0.15,
    });
    tubLidMaterialRef.current = lidMat;

    const lidMesh = new THREE.Mesh(lidGeo, lidMat);
    lidMesh.position.y = 1.65;
    lidMesh.castShadow = true;
    tubGroup.add(lidMesh);

    // Gold Foil Lip Ring
    const goldLipGeo = new THREE.TorusGeometry(2.23, 0.045, 16, 64);
    const goldLipMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.85,
      roughness: 0.2,
    });
    const goldLipMesh = new THREE.Mesh(goldLipGeo, goldLipMat);
    goldLipMesh.rotation.x = Math.PI / 2;
    goldLipMesh.position.y = 1.45;
    tubGroup.add(goldLipMesh);

    // Subtle shadow disc below tub
    const shadowGeo = new THREE.PlaneGeometry(5, 5);
    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext("2d");
    if (sCtx) {
      const grad = sCtx.createRadialGradient(64, 64, 5, 64, 64, 60);
      grad.addColorStop(0, "rgba(4, 107, 210, 0.35)");
      grad.addColorStop(0.5, "rgba(4, 92, 180, 0.15)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -2.2;
    scene.add(shadowMesh);

    // Floating Golden Particle Halo
    const particleCount = 28;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2.8 + Math.random() * 1.4;
      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 4.5;
      particlePositions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.12,
      transparent: true,
      opacity: 0.75,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(particlePoints);

    // Default angle for aesthetic display
    tubGroup.rotation.x = 0.18;
    tubGroup.rotation.y = -0.4;
    scene.add(tubGroup);
    tubMeshRef.current = tubGroup;

    // 5. Touch & Drag Interaction (WITHOUT capturing page scroll)
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationY = -0.4;
    let targetRotationX = 0.18;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging || !tubMeshRef.current) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      targetRotationY += deltaX * 0.009;
      targetRotationX = Math.max(-0.2, Math.min(0.4, targetRotationX + deltaY * 0.005));
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    domCanvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // 6. IntersectionObserver: Stop RAF loop completely when off-screen
    let animationFrameId: number;
    let isLoopRunning = false;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isLoopRunning) return;
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();

      // Gentle auto-rotation when not user-dragging
      if (!isDragging) {
        targetRotationY += delta * 0.45;
      }

      if (tubMeshRef.current) {
        tubMeshRef.current.rotation.y += (targetRotationY - tubMeshRef.current.rotation.y) * 0.1;
        tubMeshRef.current.rotation.x += (targetRotationX - tubMeshRef.current.rotation.x) * 0.1;

        // Subtle floating bobbing
        tubMeshRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.08;
      }

      particlePoints.rotation.y += delta * 0.15;
      renderer.render(scene, camera);
    };

    const startLoop = () => {
      if (isLoopRunning) return;
      isLoopRunning = true;
      clock.start();
      animationFrameId = requestAnimationFrame(animate);
    };

    const stopLoop = () => {
      isLoopRunning = false;
      cancelAnimationFrame(animationFrameId);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(mountNode);

    // 7. Resize Handler
    const handleResize = () => {
      if (!mountNode) return;
      const newWidth = mountNode.clientWidth;
      const newHeight = mountNode.clientHeight || 420;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 8. Full GPU Memory Cleanup on Component Unmount
    return () => {
      observer.disconnect();
      stopLoop();
      window.removeEventListener("resize", handleResize);
      domCanvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      // Dispose geometries
      tubBodyGeo.dispose();
      bottomGeo.dispose();
      lidGeo.dispose();
      goldLipGeo.dispose();
      shadowGeo.dispose();
      particleGeo.dispose();

      // Dispose textures
      tubBodyTexture.dispose();
      shadowTex.dispose();

      // Dispose materials
      tubBodyMat.dispose();
      bottomMat.dispose();
      lidMat.dispose();
      goldLipMat.dispose();
      shadowMat.dispose();
      particleMat.dispose();

      renderer.dispose();

      if (mountNode.contains(domCanvas)) {
        mountNode.removeChild(domCanvas);
      }
    };
  }, [webGLSupported]);

  // Update tub texture and lid color on flavor change with explicit GPU disposal
  useEffect(() => {
    if (!tubBodyMaterialRef.current || !tubLidMaterialRef.current) return;

    const oldTexture = tubBodyMaterialRef.current.map;
    const newTexture = generateTubTexture(selectedFlavor);
    tubBodyMaterialRef.current.map = newTexture;
    tubBodyMaterialRef.current.needsUpdate = true;

    // Free previous GPU texture from VRAM
    if (oldTexture) {
      oldTexture.dispose();
    }

    tubLidMaterialRef.current.color.set(selectedFlavor.lidColor);
    tubLidMaterialRef.current.needsUpdate = true;
  }, [selectedFlavor]);

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-b from-[#F0F5FA] to-white border border-[#D1D5DB]/60 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        
        {/* Left: 3D Canvas / WebGL Fallback */}
        <div className="w-full lg:w-7/12 relative flex flex-col items-center">
          
          {/* Badge */}
          <div className="absolute top-2 left-2 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm text-xs font-bold text-[#046bd2]">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Interactive 3D Tub Inspector</span>
          </div>

          {/* WebGL Canvas Mount Container */}
          {webGLSupported ? (
            <div
              ref={mountRef}
              className="w-full h-[380px] sm:h-[440px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
              aria-label="Interactive 3D Meridian Ice Cream Tub"
            />
          ) : (
            <div className="w-full h-[380px] sm:h-[440px] flex items-center justify-center">
              <div className="relative w-72 h-72">
                <Image
                  src={selectedFlavor.imageFallback}
                  alt={selectedFlavor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}

          {/* Interactive Hint */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#64748b] bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs mt-2">
            <RotateCw className="w-3.5 h-3.5 text-[#046bd2] animate-spin" style={{ animationDuration: "8s" }} />
            <span>Drag to rotate 360° • Secret QR code is located beneath the lid</span>
          </div>
        </div>

        {/* Right: Flavor Controller & Contest Info */}
        <div className="w-full lg:w-5/12 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#da0e2f]/10 text-[#da0e2f] text-xs font-bold uppercase tracking-wider mb-2">
              <Check className="w-3.5 h-3.5" />
              <span>{selectedFlavor.badge}</span>
            </span>
            <h3 className="text-3xl font-black text-[#1e293b] font-display">
              {selectedFlavor.name}
            </h3>
            <p className="text-sm text-[#334155] mt-1 font-medium">
              {selectedFlavor.tagline}
            </p>
            <p className="text-xs text-[#64748b] mt-3 leading-relaxed">
              Every official Meridian 500ml and 1L tub carries a unique participating QR code inside the seal. Scan your tub or enter the code online to enter the lucky draw.
            </p>
          </div>

          {/* Accessible Flavor Selection Buttons */}
          <div role="group" aria-labelledby="flavor-selector-heading">
            <span
              id="flavor-selector-heading"
              className="text-xs font-bold uppercase tracking-wider text-[#1e293b] block mb-3"
            >
              Switch 3D Flavour:
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {FLAVORS.map((flavor) => (
                <button
                  key={flavor.id}
                  type="button"
                  aria-pressed={selectedFlavor.id === flavor.id}
                  onClick={() => setSelectedFlavor(flavor)}
                  className={`px-3.5 py-2.5 rounded-xl text-left border text-xs font-bold transition-all flex items-center justify-between ${
                    selectedFlavor.id === flavor.id
                      ? "bg-[#046bd2] text-white border-[#046bd2] shadow-sm"
                      : "bg-white text-[#1e293b] border-slate-200 hover:border-[#046bd2]/50 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{flavor.name}</span>
                  {selectedFlavor.id === flavor.id && (
                    <span className="w-2 h-2 rounded-full bg-[#f59e0b] shrink-0 ml-1.5" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="pt-2">
            <a
              href="#register"
              className="w-full min-h-[44px] inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#046bd2] hover:bg-[#045cb4] shadow-md transition-all gap-2"
            >
              <QrCode className="w-4 h-4 text-[#ffbc7d]" />
              <span>Enter Lucky Draw with {selectedFlavor.name}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

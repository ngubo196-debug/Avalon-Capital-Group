'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export default function AdaParticleMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 25 : 55;
    const mouseEnabled = !isMobile;
    const connectionDistance = 130;
    const repelRadius = 130;
    const repelForce = 0.065;
    const maxVelocity = 0.65;
    const damping = 0.99;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
    }
    resize();

    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * maxVelocity * 2,
      vy: (Math.random() - 0.5) * maxVelocity * 2,
      r: 1.2 + Math.random() * 1.2,
    }));

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    window.addEventListener('resize', resize);
    if (mouseEnabled) window.addEventListener('mousemove', handleMouseMove);

    function tick() {
      ctx!.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (mouseEnabled) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < repelRadius && dist > 0.01) {
            const force = (repelRadius - dist) / repelRadius;
            n.vx += (dx / dist) * force * repelForce;
            n.vy += (dy / dist) * force * repelForce;
          }
        }

        n.vx *= damping;
        n.vy *= damping;
        n.vx = Math.max(-maxVelocity, Math.min(maxVelocity, n.vx));
        n.vy = Math.max(-maxVelocity, Math.min(maxVelocity, n.vy));

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const alpha = 0.2 * (1 - dist / connectionDistance);
            ctx!.strokeStyle = `rgba(27,58,143,${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      ctx!.fillStyle = 'rgba(27,58,143,0.20)';
      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      animationFrame = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      if (mouseEnabled) window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

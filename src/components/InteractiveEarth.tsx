import { useEffect, useRef, useState } from 'react';

const InteractiveEarth = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.3;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.3;
      setRotation({ x: y, y: x });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      for (let i = 0; i < 150; i++) {
        const x = (i * 137.508) % canvas.width;
        const y = (i * 197.362) % canvas.height;
        const size = Math.random() * 1.5;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Earth - maintaining perfect circular shape
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3; // Reduced from 0.35 for better responsiveness


      // Apply rotation offset
      const offsetX = rotation.y * 50;
      const offsetY = rotation.x * 50;

      // Earth glow
      const gradient = ctx.createRadialGradient(
        centerX + offsetX,
        centerY + offsetY,
        radius * 0.8,
        centerX + offsetX,
        centerY + offsetY,
        radius * 1.3
      );
      gradient.addColorStop(0, 'rgba(70, 130, 180, 0)');
      gradient.addColorStop(0.7, 'rgba(70, 130, 180, 0.3)');
      gradient.addColorStop(1, 'rgba(36, 92, 223, 0.1)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX + offsetX, centerY + offsetY, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Earth sphere
      const earthGradient = ctx.createRadialGradient(
        centerX + offsetX - radius * 0.3,
        centerY + offsetY - radius * 0.3,
        radius * 0.1,
        centerX + offsetX,
        centerY + offsetY,
        radius
      );
      earthGradient.addColorStop(0, '#4a90e2');
      earthGradient.addColorStop(0.5, '#2563eb');
      earthGradient.addColorStop(1, '#1e3a5f');
      ctx.fillStyle = earthGradient;
      ctx.beginPath();
      ctx.arc(centerX + offsetX, centerY + offsetY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Add continents (simplified) - maintaining circular proportions
      ctx.fillStyle = 'rgba(34, 139, 34, 0.6)';
      for (let i = 0; i < 30; i++) {
        const angle = (i * 0.3 + rotation.y * 2) % (Math.PI * 2);
        const dist = radius * (0.3 + Math.random() * 0.5);
        const x = centerX + offsetX + Math.cos(angle) * dist;
        const y = centerY + offsetY + Math.sin(angle) * dist;
        const size = radius * 0.05 * (1 + Math.random());
        
        ctx.beginPath();
        // Changed to maintain circular shape instead of ellipse
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Atmosphere rim
      ctx.strokeStyle = 'rgba(135, 206, 250, 0.5)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX + offsetX, centerY + offsetY, radius, 0, Math.PI * 2);
      ctx.stroke();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [rotation]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)' }}
    />
  );
};

export default InteractiveEarth;

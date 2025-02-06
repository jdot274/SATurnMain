import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function FlashcardBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const numParticles = 200;

    function createParticles() {
      particles.length = 0;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }

    function drawWave(offset: number, amplitude: number, frequency: number, opacity: number) {
      const time = Date.now() * 0.001;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin(x * frequency + time + offset) * amplitude + canvas.height / 2;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = `rgba(30, 64, 175, ${opacity})`;
      ctx.stroke();
    }

    function animate() {
      // Create deep royal blue gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1e3a8a'); // Royal blue dark
      gradient.addColorStop(0.5, '#1e40af'); // Royal blue medium
      gradient.addColorStop(1, '#1e3a8a'); // Royal blue dark
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw multiple waves with different parameters
      ctx.lineWidth = 2;
      for (let i = 0; i < 5; i++) {
        drawWave(
          i * 0.5,
          40 + i * 20,
          0.002 - i * 0.0002,
          0.15 - i * 0.02
        );
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        const particleGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        particleGradient.addColorStop(0, `rgba(219, 234, 254, ${particle.opacity})`);
        particleGradient.addColorStop(1, 'rgba(219, 234, 254, 0)');

        ctx.beginPath();
        ctx.fillStyle = particleGradient;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ 
        WebkitBackdropFilter: 'blur(100px)',
        backdropFilter: 'blur(100px)'
      }}
    />
  );
}
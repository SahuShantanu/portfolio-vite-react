import { useRef, useEffect } from 'react';
import './Animated3D.css';

export default function Animated3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const r = 80 + 40 * Math.sin(t);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t / 2);
      ctx.beginPath();
      for (let i = 0; i < 360; i += 5) {
        const rad = (i * Math.PI) / 180;
        const x = Math.cos(rad) * r + Math.sin(t + rad) * 20;
        const y = Math.sin(rad) * r + Math.cos(t + rad) * 20;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = '#61dafb';
      ctx.lineWidth = 4;
      ctx.shadowColor = '#61dafb';
      ctx.shadowBlur = 20;
      ctx.stroke();
      ctx.restore();
      t += 0.02;
      animationFrameId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="animated-3d-container">
      <canvas ref={canvasRef} width={320} height={320} />
    </div>
  );
}

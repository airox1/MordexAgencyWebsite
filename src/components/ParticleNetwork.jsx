import React, { useEffect, useRef } from 'react';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];
    let isVisible = true; // Track visibility
    
    // The Mordex color palette for the particles
    const colors = ['#00A3FF', '#ffffff', '#005b8f'];
    
    // Mouse tracking to create the interactive "Simulator" effect
    let mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resize);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      
      update() {
        // Bounce off edges smoothly
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
        
        // Move particle slowly to create a sophisticated, relaxed feel
        this.x += this.directionX;
        this.y += this.directionY;
        
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Responsive particle count based on screen size
      const numberOfParticles = (canvas.height * canvas.width) / 12000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 1.5) + 0.5; // Very fine dots
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.5) - 0.25; // Slow movement
        let directionY = (Math.random() * 0.5) - 0.25;
        let color = colors[Math.floor(Math.random() * colors.length)];
        
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                         ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                         
          // Connect particles to each other
          if (distance < (canvas.width / 10) * (canvas.height / 10)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(0, 163, 255, ${opacityValue * 0.15})`; // Very faint cyan lines
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
        
        // Dynamic "Simulator" connection to the user's mouse cursor
        if (mouse.x && mouse.y) {
          let dx = mouse.x - particlesArray[a].x;
          let dy = mouse.y - particlesArray[a].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // The closer the mouse, the brighter the connection
            const mouseOpacity = 1 - (distance / mouse.radius);
            ctx.strokeStyle = `rgba(0, 163, 255, ${mouseOpacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!isVisible) return; // Pause calculation if off-screen
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    
    // Performance Fix: Only animate when the canvas is actually visible on screen
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!isVisible) {
          isVisible = true;
          animate();
        }
      } else {
        isVisible = false;
        cancelAnimationFrame(animationFrameId);
      }
    }, { threshold: 0 });
    
    observer.observe(canvas);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none', // Let clicks pass through to buttons
        zIndex: 0,
        opacity: 0.8 
      }} 
    />
  );
};

export default ParticleNetwork;

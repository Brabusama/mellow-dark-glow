import { useEffect, useState } from 'react';

const CursorLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const updateCursor = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);

      // Add trail point
      setTrails(prev => {
        const newTrails = [...prev, { ...newPosition, id: trailId++ }];
        return newTrails.slice(-8); // Keep last 8 trail points
      });
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  // Clean up old trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prev => prev.slice(1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main cursor light */}
      <div
        className="cursor-light"
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />
      
      {/* Trail effects */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            opacity: (index + 1) / trails.length * 0.7,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
    </>
  );
};

export default CursorLight;
import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimFeTurbulence = animated('feTurbulence');
const AnimFeDisplacementMap = animated('feDisplacementMap');

export default function WaveText() {
  // Set the initial state to true to trigger the animation on mount
  const [open, setOpen] = useState(true);

  // Optionally, use useEffect to ensure the animation starts on mount
  useEffect(() => {
    setOpen(true);
  }, []);

  const [{ freq, factor, scale, opacity }] = useSpring(() => ({
    reverse: open,
    from: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
    to: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
    config: { duration: 3000 },
  }));

  return (
    <div className="flex items-center justify-center h-full">
      <animated.svg
        className="w-[350px]"
        style={{ scale, opacity }}
        viewBox="0 0 1278 446"
      >
        <defs>
          <filter id="waves">
            <AnimFeTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves="2"
              result="TURB"
              seed="8"
            />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <g filter="url(#waves)">
          {/* Replace this path with your desired SVG path */}
          <path
  d="M20,100 L80,100 Q100,50 120,100 L180,100 L180,150 L120,150 Q100,200 80,150 L20,150 Z 
     M200,100 L240,100 L240,150 L200,150 Z
     M260,100 L300,100 L300,150 L260,150 Z
     M320,100 L400,100 L400,120 L340,120 L340,130 L380,130 L380,150 L320,150 Z
     M420,100 L460,100 L460,150 L420,150 Z
     M480,100 L520,100 L520,150 L480,150 Z"
  fill="#ffffff"
/>

          {/* Replace this path with your desired SVG path */}
        </g>
      </animated.svg>
    </div>
  );
}
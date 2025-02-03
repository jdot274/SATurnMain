import React from 'react';

const ProgressTracker: React.FC = () => {
  return (
    <>
      <style>
        {`
          /* Outer container with glow behind the whole component */
          .progress-tracker-container {
            position: relative;
            width: 100%;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          /* Glass-like "thermometer" with a white→blue gradient outline */
          .glass-thermometer {
            position: relative;
            width: 90%;
            max-width: 800px;
            height: 80px;
            /* Add white-blue gradient outline */
            border: 1px solid;
            border-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.4),
              rgba(59, 130, 246, 0.4),
              rgba(255, 255, 255, 0.4)
            ) 1;
            /* Subtle radial gradient inside the thermometer */
            background: radial-gradient(
              circle at 50% 50%,
              rgba(255, 255, 255, 0.3) 0%,
              rgba(255, 255, 255, 0.1) 100%
            );
            border-radius: 50px;

            /* Subtle 3D/blur effect inside */
            box-shadow:
              inset 0 0 30px rgba(255, 255, 255, 0.1),
              0 4px 10px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            overflow: hidden;
          }

          /* Emphasize the bevel outline via a subtle pulse (optional) */
          .glass-thermometer::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50px;
            pointer-events: none;
            box-shadow: 
              inset 0 0 10px rgba(255, 255, 255, 0.25),
              0 0 15px rgba(59, 130, 246, 0.2);
            animation: bevelPulse 3s infinite;
          }

          @keyframes bevelPulse {
            0% {
              box-shadow: 
                inset 0 0 5px rgba(255, 255, 255, 0.15),
                0 0 10px rgba(59, 130, 246, 0.1);
            }
            50% {
              box-shadow: 
                inset 0 0 15px rgba(255, 255, 255, 0.4),
                0 0 20px rgba(59, 130, 246, 0.3);
            }
            100% {
              box-shadow: 
                inset 0 0 5px rgba(255, 255, 255, 0.15),
                0 0 10px rgba(59, 130, 246, 0.1);
            }
          }

          /* The progress line (static gradient from left to right) */
          .progress-line {
            position: absolute;
            top: 50%; /* center vertically */
            left: 0;
            transform: translateY(-50%);
            width: 100%;
            height: 8px;
            /* Match theme colors from project icons */
            background: linear-gradient(
              to right, 
              #3b82f6 0%, 
              #8b5cf6 50%, 
              #22c55e 100%
            );
            border-radius: 2px;
            /* Subtle glow around the line */
            box-shadow: 0 0 20px 10px rgba(0, 255, 255, 0.05);
            z-index: 1;
          }

          /* Container for the five pulsing dots (positioned along the line) */
          .dots-container {
            position: absolute;
            top: 50%; /* center vertically with the line */
            left: 0;
            width: 100%;
            transform: translateY(-50%);
            z-index: 2;
          }

          /* Generic style for each dot */
          .dot {
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #041C83;
            transform: translateX(-50%);
            /* Center dot vertically with line */
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
            box-shadow: 0 0 15px #041C83;
          }

          /* Positions for the five dots (equally spaced horizontally) */
          .dot--1 { left: 10%; }
          .dot--2 { left: 30%; }
          .dot--3 { left: 50%; }
          .dot--4 { left: 70%; }
          .dot--5 { left: 90%; }

          /* 3D sphere on the right with a rotating ring (Saturn-like) */
          .end-planet {
            position: absolute;
            right: 0;
            top: 50%; /* center vertically */
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            /* Simple radial gradient for a 3D-like effect */
            background: radial-gradient(
              circle at 30% 30%,
              #041C83 0%,
              #041C83 30%,
              #111 90%
            );
            box-shadow: 0 0 10px #041C83, 0 0 30px #041C83;
            z-index: 3;
            perspective: 1000px; /* so ring can rotate in 3D */
          }

          /* The ring around the sphere, rotating in 3D */
          .end-planet::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60px;
            height: 16px;
            border-radius: 50%;
            background: linear-gradient(
              to right,
              rgba(4, 28, 131, 0.8),
              rgba(4, 28, 131, 0.3),
              rgba(4, 28, 131, 0.8)
            );
            transform-origin: center;
            animation: ringOrbit 3s linear infinite;
          }

          @keyframes ringOrbit {
            0% {
              transform: translate(-50%, -50%) rotateX(60deg) rotateY(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotateX(60deg) rotateY(360deg);
            }
          }
        `}
      </style>

      <div className="progress-tracker-container">
        {/* Glassy thermometer-like bubble with a white→blue gradient outline */}
        <div className="glass-thermometer">
          {/* Static gradient progress line */}
          <div className="progress-line"></div>

          {/* Five pulsing dots across the line */}
          <div className="dots-container">
            <div className="dot dot--1 dot--completed"></div>
            <div className="dot dot--2 dot--completed"></div>
            <div className="dot dot--3 dot--completed"></div>
            <div className="dot dot--4 dot--current end-planet"></div>
            <div className="dot dot--5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressTracker;
import { useEffect } from "react";

const MouseFollower = () => {
    useEffect(() => {
        const cursor = document.querySelector(".custom-cursor");
        const dot = document.querySelector(".custom-cursor-dot");

        const moveCursor = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            // Apply translate with center offset
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            {/* Cursor Elements */}
            <div className="custom-cursor-dot"></div>
            <div className="custom-cursor"></div>

            {/* Component CSS */}
            <style>{`
        .custom-cursor-dot {
          width: 6px;
          height: 6px;
          background-color: #0253A0;
          border-radius: 50%;
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
        }

        .custom-cursor {
          width: 30px;
          height: 30px;
          border: 2px solid #0253A0;
          border-radius: 50%;
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: transform 0.15s ease-out;
          z-index: 9998;
        }
      `}</style>
        </>
    );
};

export default MouseFollower;

import { useEffect, useState } from "react";
const MouseFollower = () => {
    const [hasMouse, setHasMouse] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(pointer: fine)");
        setHasMouse(mediaQuery.matches);
        const handleChange = (e) => {
            setHasMouse(e.matches);
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);
    useEffect(() => {
        if (!hasMouse) return;
        const cursor = document.querySelector(".custom-cursor");
        const dot = document.querySelector(".custom-cursor-dot");
        const moveCursor = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [hasMouse]);
    if (!hasMouse) return null;
    return (
        <>
            <div className="custom-cursor-dot"></div>
            <div className="custom-cursor"></div>
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
                    border: 2px solid #F36C03;
                    border-radius: 50%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    transform: translate(-50%, -50%);
                    z-index: 9998;
                }
            `}</style>
        </>
    );
};
export default MouseFollower;
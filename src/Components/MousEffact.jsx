import React, { useEffect, useRef } from "react";
const MousEffact = () => {
    const canvasRef = useRef(null);
    const ripples = [];
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        class Ripple {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = 0;
                this.opacity = 0.6;
            }
            update() {
                this.radius += 2;      // tez expand
                this.opacity -= 0.01;  // dheere fade out
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(2, 83, 160, ${this.opacity})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ripples.forEach((r, i) => {
                r.update();
                r.draw();
                if (r.opacity <= 0) {
                    ripples.splice(i, 1);
                }
            });
            requestAnimationFrame(animate);
        };
        // 🔹 Mouse move par ripple
        const handleMouseMove = (e) => {
            ripples.push(new Ripple(e.clientX, e.clientY));
        };
        // 🔹 Click par bhi ripple
        const handleClick = (e) => {
            ripples.push(new Ripple(e.clientX, e.clientY));
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);
        animate();
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
        };
    }, []);
    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
};
export default MousEffact;
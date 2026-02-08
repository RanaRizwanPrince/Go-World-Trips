import { useEffect, useState } from "react";

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    const launchDate = new Date("2026-06-01T00:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        days: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // 🔹 Preloader OFF
        const loaderTimer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        // 🔹 Countdown logic
        const countdownTimer = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor(
                (distance % (1000 * 60 * 60 * 24 * 30)) /
                (1000 * 60 * 60 * 24)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ months, days, minutes, seconds });
        }, 1000);

        return () => {
            clearTimeout(loaderTimer);
            clearInterval(countdownTimer);
        };
    }, []);

    // 🔹 PRELOADER VIEW
    if (loading) {
        return (
            <div className="preloader">
                <img src="https://ik.imagekit.io/uvsjit70p/lpng?updatedAt=1769515179360" />
                <h2>Go World Trips</h2>
                <p>Preparing your journey...</p>
            </div>
        );
    }
};

export default Preloader;

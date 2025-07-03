import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const total = Date.parse(targetDate) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = getTimeLeft();
      if (newTimeLeft.total <= 0) {
        clearInterval(timer);
      }
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div
          key={unit}
          style={{
            backgroundColor: "#e6194b",
            color: "#fff",
            fontSize: "20px",
            padding: "10px 15px",
            borderRadius: "8px",
            fontWeight: "bold",
            minWidth: "50px",
            textAlign: "center",
          }}
        >
          {String(timeLeft[unit]).padStart(2, "0")}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

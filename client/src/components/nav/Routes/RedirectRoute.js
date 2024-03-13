// components/routes/RedirectRoute.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectRoute() {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    // redirect once count is equal to 0
    count === 0 && navigate("/login");
    // cleanup
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ marginTop: "-7%" }}
    >
      <h2>Redirecting in {count} second.</h2>
    </div>
  );
}
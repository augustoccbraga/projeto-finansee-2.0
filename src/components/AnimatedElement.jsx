import React, { useEffect, useState } from "react";

const AnimatedElement = ({
  className,
  style,
  children,
  delay,
  isRegistering,
}) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [delay, isRegistering]); // Adicionado isRegistering como dependência

  return (
    <div
      key={key}
      className={`transform opacity-0 transition-all duration-300 ease-in-out ${className}`}
      style={{
        animationName: "fadeSlideIn",
        animationDuration: "300ms",
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;

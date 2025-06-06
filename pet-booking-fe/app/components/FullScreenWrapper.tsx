import React from "react";

interface FullScreenWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

const FullScreenWrapper: React.FC<FullScreenWrapperProps> = ({ children, className = "", style, id }) => {
  return (
    <div
      id={id}
      className={`min-h-screen w-full ${className}`}
      style={{
        minHeight: "100vh",
        width: "100vw",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FullScreenWrapper;
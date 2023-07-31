import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
    className="text-sm   bg-transparent  text-blue-700 hover:-translate-y-1 transition-all duration-300 hover:text-blue-900 font-semibold"
    onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

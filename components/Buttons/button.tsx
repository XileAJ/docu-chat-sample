import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
    className="text-sm  border-2 shadow-md  border-blue-700   text-blue-600 hover:-translate-y-1 transition-all duration-300 hover:text-blue-700 font-bold py-3 px-6 mb-5 rounded"
    onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

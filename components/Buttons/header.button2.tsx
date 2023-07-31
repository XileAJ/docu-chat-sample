import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="mt-5 ml-5 align-middle hover:-translate-y-1 transition-all duration-300  font-bold py-3 px-8 mb-5 rounded text-sm bg-transparent hover:bg-gray-500 hover:bg-opacity-20 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

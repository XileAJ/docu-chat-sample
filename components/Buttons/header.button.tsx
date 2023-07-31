import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
    className="text-sm bg-transparent border-2 border-white-500 text-white-500  mt-5  ml-5 align-middle hover:-translate-y-1 transition-all duration-300 hover:text-gray-100 font-bold py-3 px-8 mb-5 rounded"
    onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

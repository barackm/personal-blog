import React from 'react';

type EditorButton = {
  type?: string;
  label?: string;
  onClick?: () => void;
  isActive: any;
  className?: string;
  icon?: () => JSX.Element;
  children: JSX.Element;
};

const Button = (props: EditorButton) => {
  const { children, onClick, isActive } = props;
  return (
    <button
      onClick={onClick}
      className={`p-1 flex justify-center align-middle rounded-sm ${
        isActive ? 'bg-secondary' : 'bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

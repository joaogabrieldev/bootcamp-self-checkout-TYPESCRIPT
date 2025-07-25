import type { FunctionComponent, ReactNode } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => null;
  children?: ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({ onClick, text }) => {
  return <div onClick={onClick}>{text}</div>;
};

export default Button;

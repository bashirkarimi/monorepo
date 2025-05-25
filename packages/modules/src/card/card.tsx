import {HTMLAttributes} from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  body: string;
}

const Card = ({title, body, ...props}: CardProps) => {
  return (
    <div {...props}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export {Card};

import { ReactNode } from "react";

interface IProps {
  title: string;
  children: ReactNode;
}

const Home = ({ children, title }: IProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Home;

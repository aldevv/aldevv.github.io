import { FC } from "react";
import { cv } from "../assets/cv_backend_eng.pdf";

interface Props {}
const Nav: FC<Props> = () => {
  return (
    <div className="bg-gray-800 w-full h-14 text-2xl flex justify-center items-center gap-4">
      <a href="/">home</a>
      <a href="/src/assets/cv_backend_eng.pdf" download>
        cv
      </a>
      <a href="/contact">contact</a>
      <a href="/about">about</a>
      {
        // <a href="/projects/">projects</a>
      }
    </div>
  );
};

export default Nav;

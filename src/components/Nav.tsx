import { FC } from "react";
import { cv } from "../assets/cv_backend_eng.pdf";

interface Props {}
const Nav: FC<Props> = () => {
  const buttonStyle = "hover:text-pink-500 hover:transition hover:ease-in-out hover:scale-110";
  return (
    <div className="bg-gray-800 w-full h-14 text-2xl flex justify-center items-center gap-4">
      <a className={buttonStyle} href="/">
        home
      </a>
      <a className={buttonStyle} href="/src/assets/cv_backend_eng.pdf" download>
        cv
      </a>
      <a className={buttonStyle} href="/contact">
        contact
      </a>
      <a className={buttonStyle} href="/about">
        about
      </a>
      {
        // <a href="/projects/">projects</a>
      }
    </div>
  );
};

export default Nav;

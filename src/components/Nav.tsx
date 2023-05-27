import { FC } from "react";

interface Props {}
const Nav: FC<Props> = () => {
  return (
    <div className="bg-gray-800 w-full h-8 flex justify-center items-center gap-4">
      <a href="/cv/">cv</a>
      <a href="/cv/">contact</a>
      <a href="/cv/">projects</a>
      <a href="/about/">about</a>
    </div>
  );
};

export default Nav;

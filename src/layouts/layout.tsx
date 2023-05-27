import type { FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-mybg bg-no-repeat text-green-400 h-screen bg-cover bg-center">
      <div className="flex justify-center items-center text-3xl backdrop-blur-md w-full h-full text-white ">
        {children}
      </div>
    </div>
  );
};

export default Layout;

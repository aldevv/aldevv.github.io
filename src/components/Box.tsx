import type { FC } from "react";
import "../../box.css";
import clsx from "clsx";
interface Props {}
const Box: FC<
  Props
> = () => {
  const zoomStyle =
    "hover:transition-all hover:duration-500 hover:ease-in-out hover:transform hover:bg-center hover:bg-cover";

  return (
    <>
      <div className="card-zoom flex justify-center items-center text-3xl backdrop-blur-md w-full h-full text-white ">
        <div
          className={clsx(
            "h-2/4 w-2/4 rounded-2xl border-4 border-white shadow-blue-800 shadow-lg bg-cover bg-mybg bg-center",
            zoomStyle
          )}
        >
          my
          boiz
          000000000000000000000000000000
        </div>
      </div>
    </>
  );
};

export default Box;

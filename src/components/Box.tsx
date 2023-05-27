import type { FC } from "react";
import clsx from "clsx";
interface Props {}
const Box: FC<
  Props
> = () => {
  const zoomStyle =
    "hover:scale-185 hover:ease-in-out";

  return (
    <>
      <div className="flex justify-center items-center text-3xl backdrop-blur-md w-full h-full text-white ">
        <div
          className={clsx(
            "h-2/4 w-2/4 overflow-hidden rounded-2xl border-4 border-white shadow-blue-800 shadow-lg"
          )}
        >
          <div
            className={clsx(
              "w-full h-full bg-cover bg-mybg bg-center ",
              zoomStyle
            )}
          ></div>
          my
          boiz
          000000000000000000000000000000
        </div>
      </div>
    </>
  );
};

export default Box;

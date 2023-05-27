import type { FC } from "react";
import clsx from "clsx";
interface Props {}
const Box: FC<Props> = () => {
  const zoomStyle = "hover:scale-185 hover:ease-in-out";

  return (
    <>
      {
        //TODO: get this div to the layout
      }
      <div className="flex justify-center items-center text-3xl backdrop-blur-md w-full h-full text-white ">
        {
          // BOX
        }
        <div
          className={clsx("h-2/4 w-2/4 overflow-hidden rounded-2xl border-4 border-white shadow-blue-800 shadow-lg")}
        >
          {
            // IMAGE
          }
          <div className={clsx("w-full h-full bg-cover bg-mybg bg-center ", zoomStyle)}>
            {
              // FILTER
            }
            <div className="w-full h-full grid grid-cols-2">
              <span className="h-full w-full col-span-2 col-start-1 row-span-full z-10 flex justify-center items-center">
                no sirve
              </span>
              <div className="h-full w-full bg-black opacity-70 col-span-2 col-end-3 row-span-full"> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;

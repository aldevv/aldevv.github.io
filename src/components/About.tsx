import type { FC } from "react";
import clsx from "clsx";
interface Props {}
const About: FC<Props> = () => {
  const transition = "hover:transition hover:ease-in-out hover:delay-150 hover:duration-1000 hover:scale-195";

  return (
    <>
      {
        // BOX
      }
      <div className={clsx("h-2/4 w-2/4 overflow-hidden rounded-2xl border-2 border-white shadow-blue-800 shadow-lg")}>
        {
          // IMAGE
        }
        <div className={clsx("grid grid-cols-2 w-full h-full bg-cover bg-mybg bg-center ", transition)}>
          {
            // FILTER
          }
          <div className="row-span-full col-span-2 col-start-1 w-full h-full bg-black opacity-70"></div>
          <div className="row-span-full col-span-2 col-end-3 h-full w-full z-10 flex flex-col justify-center items-center ">
            <p>I write code for a living</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

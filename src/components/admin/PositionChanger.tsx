"use client"
import { useEffect, useRef, useState } from "react";

const PositionChanger = ({isHere}:{isHere:boolean} ) => {
  const [isHereState, setIsHere] = useState(isHere);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!rootRef.current) return;

    rootRef.current.focus();

    const handleChange = async () => {

      setIsHere(prevState => !prevState);
    };

    const currentRef = rootRef.current;
    currentRef.addEventListener('click', handleChange);
    currentRef.addEventListener("keydown", handleChange);

    return () => {
      currentRef.removeEventListener('click', handleChange);
      currentRef.removeEventListener("keydown", handleChange);
    };
  }, []);

  return (
    <main ref={rootRef} tabIndex={0} className="w-screen h-screen bg-white flex xl:flex-row flex-col cursor-none">
      <div className={`w-screen xl:h-screen h-[35vh] bg-no-repeat bg-cover bg-center  ${isHereState? "isHereBanner" : "isNotHereBanner"}`} ></div>
      <p className={`m-0 w-screen xl:h-screen h-[30vh] text-center flex justify-center items-center text-white select-none font-bold text-3xl ${isHereState? "bg-green-500" :"bg-red-500"}`}>{isHereState? "Jsem tu" : "Nejsem tu"}</p>
      <div className={`w-screen xl:h-screen h-[35vh] bg-no-repeat bottomBanner`}></div>
    </main> 
  );
}
 
export default PositionChanger;
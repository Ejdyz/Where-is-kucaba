"use client"
import {QRCode} from "@/components/icons/Icons";
import { useEffect, useRef, useState } from "react";

const PositionChanger = ({isHere}:{isHere:boolean} ) => {
  const [isHereState, setIsHere] = useState(isHere);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!rootRef.current) return;

    rootRef.current.focus();

    const handleChange = async () => {
      try {
        const response = await fetch("/api/position", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({isHere: !isHereState})
        });
        const data = await response.json();

        if(data.success) {
          setIsHere(!isHereState);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error(error)
        alert("Server error");
      }
    };

    const currentRef = rootRef.current;
    currentRef.addEventListener('click', handleChange);
    currentRef.addEventListener("keydown", handleChange);

    return () => {
      currentRef.removeEventListener('click', handleChange);
      currentRef.removeEventListener("keydown", handleChange);
    };
  }, [isHereState]);

  return (
    <main ref={rootRef} tabIndex={0} className="w-screen h-[100dvh] bg-white flex xl:flex-row flex-col cursor-none">
      <div className={`w-screen xl:h-[100dvh] h-[35vh] bg-no-repeat bg-cover bg-center  ${isHereState? "isHereBanner" : "isNotHereBanner"}`} ></div>
      <p className={`m-0 w-screen xl:h-[100dvh] h-[30vh] text-center flex justify-center items-center text-white select-none font-bold text-3xl ${isHereState? "bg-green-500" :"bg-red-500"}`}>{isHereState? "Jsem tu" : "Nejsem tu"}</p>
      <div className={`w-screen xl:h-[100dvh] h-[35vh] bg-no-repeat bottomBanner`}></div>
      <div className="absolute top-0 left-0 m-4 max-w-44 rounded-xl bg-white shadow-xl p-1">
        <QRCode />
      </div>
    </main> 
  );
}
 
export default PositionChanger;
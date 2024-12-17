import { getPosition } from "@/lib/utils";

export default async function Home() {
  const isHere = await getPosition() || false;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <p id="text" className={`text-white md:p-32 p-6 text-center font-extrabold md:text-9xl text-4xl md:rounded-3xl rounded-xl ${isHere? "bg-green-500" : "bg-red-500"}`}>{isHere? "Jsem v kabinetu" : "Jsem pryč"}</p>
    </div>
  );
}


export default function Home() {
  const isHere = false; //todo fetch

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <p id="text" className={`text-white p-32 font-extrabold text-9xl rounded-3xl ${isHere? "bg-green-500" : "bg-red-500"}`}>{isHere? "Jsem v kabinetu" : "Jsem pryč"}</p>
    </div>
  );
}

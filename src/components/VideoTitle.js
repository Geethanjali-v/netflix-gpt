const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className=" hover:bg-opacity-60 bg-white text-black rounded-lg bg-gray-500 text-xl py-2  p-4 w-40">
         ▶Play
        </button>
        <button className="hover:bg-opacity-60 bg-black text-black ms-2 rounded-lg bg-gray-500 text-xl py-2 p-4 w-40">
        ℹ️More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;

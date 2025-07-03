import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
       <VideoTitle/>
      <VideoBackground />
     
    </div>
  );
};
export default Browse;

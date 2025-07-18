import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector  } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieID) =>{
  const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/5" +
      movieID+ "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
   
    const filterData = json.results.filter((video) => video.type === "Clip");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, [dispatch]);

}

export default useMovieTrailer;
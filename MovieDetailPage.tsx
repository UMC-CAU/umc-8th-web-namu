import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { LoadingSpinner } from "../components/LoadingSpinner";
import { MovieDetail } from "../types/movie";
import axios from "axios";

const MovieDetailPage = () => {

const [movieIds, setMovieIds] = useState<number | undefined>(); //영화 ID 배열
const [isPending, setIsPending] = useState(false);  //로딩상태

const [isError, setIsError] = useState(false); //에러상태

const { movieId } = useParams();

useEffect(() => {
  const fetchMovies = async () => {
    setIsPending(true); 
    try{
      const { data } = await axios.get<MovieDetail>(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`, // 여기에 본인의 API 키를 넣어주세요.
            accept: 'application/json',
          },
        }
      ); 

      setMovieIds(data.id);
    } catch {
      setIsError(true); 
    } finally{
      setIsPending(false); 
    }
  };

  fetchMovies();
}, [movieId]); //처음 마운트 될 때만 effect 실행! 

if (isPending){
  return <LoadingSpinner/>
}

if(isError) {
  return (
    <div>
      <span className='text-red-500 text-2xl'>에러가 발생했습니다.</span>
    </div>
  )
}
return (
  <>
  <div className='flex justify-center items-center'>
  </div>
  {isPending && (
    <div className='flex justify-center items-center h-dvh'>
      <LoadingSpinner/>
    </div>
  )}
  {!isPending && (
        <div className='flex justify-center items-center h-dvh'>
            이 영화의 ID는 {movieIds}입니다.
      </div>)}
  </>
)
}

export default MovieDetailPage
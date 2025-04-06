import { useEffect, useState } from 'react';
import { Movie, MovieResponse } from '../types/movie';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [isPending, setIsPending] = useState(false);  //로딩상태

  const [isError, setIsError] = useState(false); //에러상태

  const [page, setPage] = useState(1);

  const {category} = useParams<{category:string}>()

  useEffect(() => {
    const fetchMovies = async () => {
      setIsPending(true); 
      try{
        const { data } = await axios.get<MovieResponse>(
          `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`, // 여기에 본인의 API 키를 넣어주세요.
              accept: 'application/json',
            },
          }
        ); 
  
        setMovies(data.results);
      } catch {
        setIsError(true); 
      } finally{
        setIsPending(false); 
      }
    };

    fetchMovies();
  }, [page,category]); //처음 마운트 될 때만 effect 실행! 

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
      <button className='bg-[#dda5e3] text-white px-6 rounded-lg shadow-md
      hover:bg-[b2dab1] transition-all duraion-200 diabled:bg-gray-300
      cursor-pointer disabled:cursor-not-allowed'
      disabled={page===1}
      onClick={()=>setPage((prev)=>prev-1)}>{'<'}</button>
      <span>{page}페이지</span>
      <button className='bg-[#dda5e3] text-white px-6 rounded-lg shadow-md
      hover:bg-[b2dab1] transition-all duraion-200 cursor-pointer'
      onClick={()=>setPage((prev)=>prev+1)}>{'>'}</button>
    </div>
    {isPending && (
      <div className='flex justify-center items-center h-dvh'>
        <LoadingSpinner/>
      </div>
    )}
    {!isPending && (
          <div className='p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>)}
    </>
  );
};

export default MoviesPage;

import { useState } from "react"
import { Movie } from "../types/movie"
import { useNavigate } from "react-router-dom"

interface MovieCardProps {
    movie: Movie
}

export default function MovieCard({movie}: MovieCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate()

    
    return (
        <div 
        onClick={() => navigate(`/movie/${movie.id}`)}
        className="relative rounded-lg overflow-hidden cursor-pointer w-44
        transition-transform duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={'${movie.title}의 이미지'}
            className="" />
        {isHovered && (
            <div className="absolute text-white 
            bg-gradient-to-t from-black/50 to transparent backdrop-blur-md 
            flex flex-col justify-center items-center p-4 inset-0">
                <h2 className="text-lg font-bold text-center leading-snug">{movie.title}</h2>
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-6">{movie.overview}</p>
            </div>
        ) }

        </div>
    )
}
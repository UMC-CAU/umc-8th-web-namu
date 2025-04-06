import { NavLink} from "react-router-dom"

const LINKS = [
    { to: "/", text: "홈" },
    { to: "/movies/popular", text: "인기 영화" },
    { to: "/movies/now_playing", text: "상영 중" },
    { to: "/movies/upcoming", text: "개봉 예정" },
    { to: "/movies/top_rated", text: "평점 높은 영화" },
]

const Navbar = () => {
    return (
        <nav className="flex justify-center gap-8 items-center bg-white p-4 text-white">
            {LINKS.map(({to,text}) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({isActive}) =>{
                        return isActive ? 'text-blue-500' : 'text-gray-500'
                    }}
                >
                    {text}
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar
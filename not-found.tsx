import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
        <Link to="/" className="text-lg text-blue-500">홈 페이지로 이동.</Link>
        <h1 className="text-lg">찾을 수 없는 페이지입니다.</h1>
        </>
    )
}

export default NotFound
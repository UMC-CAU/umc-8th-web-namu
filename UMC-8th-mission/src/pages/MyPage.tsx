import { useEffect, useState } from "react"
import { getMyInfo } from "../apis/auth"
import { get } from "react-hook-form"
import { ResponseMyInfoDto } from "../types/auth"
import { useAuth } from "../week5/context/AuthContext";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
    const navigate = useNavigate()
    const {logout} = useAuth()
    const [data, setData] = useState<ResponseMyInfoDto | null>(null)
    useEffect(()=> {
        const getData = async () => {
            const response = await getMyInfo()
            console.log(response)

            setData(response)
        }

        getData()
    },[])

    const handleLogout = async () => {
        await logout
        navigate("/")
    }

    return (
        <div>{data?.data?.name}
        <button className="cursor-pointer bg-blue-300 rounded-sm hover:scale-90"
        onClick={handleLogout}>
            로그아웃
        </button>
         </div>
    )

}

export default MyPage;
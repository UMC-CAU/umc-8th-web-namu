import { FaRecordVinyl, FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from "../hooks/useCustomRedux"
import { useEffect } from "react"
import { calculateTotals } from "../slices/cartSlice"
import { visible } from "../slices/modalSlice"


const Navbar = () => {
    const {amount, cartItems,total} = useSelector((state)=> state.cart)
    const dispatch = useDispatch()

    const handleVisible = () => {
        dispatch(visible())
    }

    useEffect(()=>{
        dispatch(calculateTotals())
    },[dispatch, cartItems])

    console.log(amount,total)


    return(
        <div className="flex justify-between items-center bg-zinc-600 text-white p-4">
            <h1 className="text-2xl font-semibold">빙구의 LP 장바구니</h1>
            <div className="flex justify-center gap-2">
                <FaRecordVinyl onClick={handleVisible} className="text-2xl text-blue-300 cursor-pointer"/>
                <span className="text-xl">LP 추가하기</span>
                <FaShoppingCart className="text-2xl"/>
                <span className="font-medium text-xl">{amount}</span>
            </div>
        </div>
    )
}

export default Navbar
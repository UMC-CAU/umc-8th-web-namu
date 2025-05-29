import { useDispatch } from "../hooks/useCustomRedux"
import { decrease, increase, removeItem } from "../slices/cartSlice"
import type { lp } from "../types/cart"

interface CartItemProps {
    lp: lp
}

const CartItem = ({lp}:CartItemProps) => {
    const dispatch = useDispatch()

    const handleIncreaseCount = () => {
        dispatch(increase({id:lp.id}))
    }

    const handleDecreaseCount = () => {
        if(lp.amount === 1){
            dispatch(removeItem({id:lp.id}))
        }
        
        dispatch(decrease({id:lp.id}))
    }

    return (
        <div className="flex p-4 border-b border-gray-200">
            <img src={lp.img} alt={`${lp.title}이미지`}
            className="w-20 h-20 object-cover rounded mr-4"/>
            <div className="flex-1">
                <h3 className="text-xl text-amber-200 font-semibold">{lp.title}</h3>
                <p className="text-gray-300">{lp.singer}</p>
                <p className="text-gray-300">{lp.price}</p>
            </div>
            <div>
                <button onClick={handleDecreaseCount} className="px-3 py-1 bg-gray-200 rounded-sm text-600 cursor-pointer">-</button>
                <span className="p-4 text-white">{lp.amount}</span>
                <button onClick={handleIncreaseCount} className="px-3 py-1 bg-gray-200 rounded-sm text-600 cursor-pointer">+</button>
            </div>
        </div>
    )
}

export default CartItem
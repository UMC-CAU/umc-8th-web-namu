import { useDispatch } from "../hooks/useCustomRedux"
import { clearCart } from "../slices/cartSlice"
import { visible } from "../slices/modalSlice"

const ModalPage = () => {
    const dispatch = useDispatch()
    
    const handleVisible = () => {
        dispatch(visible())
    }

    const handleClearCartAndVisible = () => {
        dispatch(clearCart()),
        dispatch(visible())
    }
    return(
        <div className="w-60 h-40 flex flex-col justify-center items-center rounded-sm bg-gray-200">
        <h1 className="mb-6 text-x1 font-medium">정말 삭제하시겠습니까까?</h1>
        <div className="flex space-x-4">
            <button  onClick={handleVisible} className="px-2 py-2 border rounded-sm cursor-pointer bg-slate-600 text-white">아니요</button>
            <button onClick={handleClearCartAndVisible} className="px-2 py-2 border rounded-sm bg-red-500 cursor-pointer text-white">네</button>
        </div>
        </div>
    )
}

export default ModalPage
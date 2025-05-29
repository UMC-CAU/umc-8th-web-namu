import { useDispatch } from "react-redux"
import { useSelector } from "../hooks/useCustomRedux"
import { visible } from "../slices/modalSlice"

const TotalPrice = () => {
    const {total} = useSelector((state)=> state.cart) //영상에서는 왜 state.cart로 처 들어가는거지??
    const dispatch = useDispatch()
    
    const handleVisible = () =>{
        dispatch(visible())
    }
    
    return(
        <div className="flex justify-between p-10 bg-slate-800">
            <button onClick={handleVisible} className="border p-4 rounded-sm cursor-pointer text-white">장바구니 초기화</button>
            <div className="p-6 flex justify-end font-bold text-white">총 가격:{total}원
            </div>
        </div>
    )
}//onclick에 모달창을 띄우는 동작 넣기 --> 모달창에서 아니오를 누르면 모달 창을 닫기/ 예를 누르면 handleClearCart 

export default TotalPrice
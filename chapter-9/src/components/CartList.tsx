import CartItem from "./CartItem"
import type { RootState } from "../store/store"
import { useSelector } from "../hooks/useCustomRedux"
import ModalPage from "./ModalPage"

const CartList = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const {isOpen} = useSelector((state)=>state.modal)

  return (
    <div className="relative flex flex-col items-center justify-center bg-slate-800 min-h-screen">
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} lp={item} />
        ))}
      </ul>

      {/* isOpen이 true일 때만 모달을 띄운다 */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
          <ModalPage />
        </div>
      )}
    </div>
  );
};


export default CartList
import { useSelector } from "react-redux"
import ItemCardList from "./ItemCardList"
import { useDispatch } from "react-redux"
import { clearCart } from "../../store/Modules/cartSlice"
const Cart = () => {
    const dispatch = useDispatch()


    //make sure to subscribe right portion of store
    const cartItems = useSelector((store) => store.cart.items)

    const handleClearCart = () => {
        dispatch(clearCart())
    }
  return (
    <div className="text-center m-4 p-4 ">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 mx-auto p-2 mt-2 border rounded-xl shadow-md">
            <button className="px-2 p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1 className="text-xl p-2 font-bold">Add items to cart !!</h1>}
            <ItemCardList items={cartItems}/>
        </div>
    </div>
  )
}

export default Cart
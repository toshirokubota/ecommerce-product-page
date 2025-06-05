import { staticAsset } from "../libs";
import type { CartItemType } from "../types";
import Cart from "./Cart";

export default function CartIcon({items, setCart, showCart, cartIsShown}: {
    items: CartItemType[],
    setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>,
    cartIsShown: boolean,
    showCart: React.Dispatch<React.SetStateAction<boolean>>
    }) {
    const count = items.reduce((acc, item)=> acc + item.count, 0)
    return (
        <div>
            <button className="relative"
                onClick={() => {showCart(prev => !prev)}}
            >
                <img src={staticAsset('/images/icon-cart.svg')} alt='shopping cart'/>
                {count > 0 && 
                    <span className='cart-indicator text-xs text-white'>{count}</span>    
                }
            </button>
            {cartIsShown && <Cart items={items} setCart={setCart} showCart={showCart}/>}
        </div>
    )
}
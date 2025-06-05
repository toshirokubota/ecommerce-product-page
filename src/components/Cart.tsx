import { staticAsset } from "../libs";
import type { CartItemType } from "../types";

export default function Cart({items, setCart, showCart}: 
        {
            items: CartItemType[], 
            setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>,
            showCart: React.Dispatch<React.SetStateAction<boolean>>
        }) {
    const itemCost = (item: CartItemType): string => {
        return (item.product.price * item.product.discount).toFixed(2);
    }
    const totalCost = (item: CartItemType): string => {
        return (item.product.price * item.product.discount * item.count).toFixed(2);
    }
    const deleteItem = (item: CartItemType): void => {
        setCart(prev => prev.filter(k => k != item ));
    }
    return (
        <div className='cart-card p-4'>
            <p className="my-4">Cart</p>
            
            <hr className="my-4"></hr>
            { items.length === 0 ?
                <p className="text-sm text-darkgray-blue my-16 text-center">Your cart is empty.</p>
                :
                items.map(item => (
                <div className='cart-entry' key={item.product.id} >
                    <div className='w-64 flex flex-row gap-2 justify-between items-center'>
                        <img className="w-12 rounded-sm"
                            src={staticAsset(item.product.thumnails[0])} alt='thumbnail'/>
                        <div>
                            <p>{item.product.name}</p>
                            <p>{itemCost(item)} x {item.count} {totalCost(item)}</p>
                        </div>
                        <button onClick={()=> deleteItem(item)}>
                            <img src={staticAsset('/images/icon-delete.svg')} alt='delete'/>
                        </button>
    
                    </div>
                </div>
            ))
            }
            {items.length > 0 && 
                <button 
                    className="w-full bg-orange my-4 px-4 py-2 rounded-xl mx-auto"
                    onClick={()=>{showCart(false); setCart([]);}}>Checkout
                </button>
            }

        </div>
    )
}
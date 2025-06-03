import { staticAsset } from "../libs";
import type { CartItemType } from "../types";

export default function Cart({items, setCart}: 
        {items: CartItemType[], setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>}) {
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
        <div>
            <p>Cart</p>
            
            {items.map(item => (
                <>
                    <hr></hr>
                    <div key={item.product.id} className='flex'>
                        <img src={staticAsset(item.product.thumnails[0])} alt='thumbnail'/>
                        <div>
                            <p>{item.product.name}</p>
                            <p>{itemCost(item)} x {item.count} {totalCost(item)}</p>
                        </div>
                        <button onClick={()=> deleteItem(item)}>
                            <img src={staticAsset('/images/icon-delete.svg')} alt='delete'/>
                        </button>
    
                    </div>
                </>
            ))
            }
            <button>Checkout</button>
        </div>
    )
}
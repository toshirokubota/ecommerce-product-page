import { staticAsset } from "../libs";

export default function CartIcon({count}: {count: number}) {
    
    return (
        <div className="relative">
            <img src={staticAsset('/images/icon-cart.svg')} alt='shopping cart'/>
            {count > 0 && 
                <span className='cart-indicator text-xs text-white'>{count}</span>    
            }
        </div>
    )
}
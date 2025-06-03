import { staticAsset } from "../libs";
import type { CartItemType } from "../types";
import CartIcon from "./CartIcon";

export default function Header({items}: {items: CartItemType[]}) {
    const numItems = items.reduce((count, item) => count + item.count, 0);
    return (
        <header>
            <img src={staticAsset('/images/icon-menu.svg')} alt='menu logo' />
            <img src={staticAsset('/images/logo.svg')} alt="sneakers logo"/>
            <nav className='hidden'>
                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            {/* <img src={staticAsset('/images/icon-cart.svg')} alt="cart logo"/> */}
            <CartIcon count={numItems} />
            <img src={staticAsset('/images/image-avatar.png')} alt="customer avatar"/>
        </header>
    )
}
import { useState } from "react";
import { staticAsset } from "../libs";
import type { CartItemType } from "../types";
import CartIcon from "./CartIcon";
import { Link, useLocation } from "react-router-dom";

export default function Header({items, cartIsShown, showCart, setCart}: {
    items: CartItemType[],
    cartIsShown: boolean,
    showCart: React.Dispatch<React.SetStateAction<boolean>>,
    setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>
    }) {
    const[open, setOpen] = useState(false);
    const location = useLocation();
    console.log('Header: location = ', location)
    return (
        <header>
            <div className='flex flex-row items-center gap-8 h-full'>               
                <img 
                    className={'hamburger ' + `${open ? 'hide': 'show'}`}
                    src={staticAsset('/images/icon-menu.svg')} 
                    alt='menu logo'
                    aria-label="open the navigation menu"
                    onClick={()=>setOpen(true)}/>
                {/* {open && <DropdownMenu open={open} setOpen={setOpen} /> } */}
                <Link to="/">
                    <img src={staticAsset('/images/logo.svg')} alt="sneakers logo"/>
                </Link>
                <div className={`dropdown p-4 ${open ? 'show': 'hide'}`}>
                    <button className='close-button'
                        onClick={()=>setOpen(false)}
                        aria-label="close the menu"
                        aria-expanded={`${open ? 'true': 'false'}`} 
                        aria-controls="dropdown-menu" 
                        >
                        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#000000"/>
                        </svg>
                    </button>
                    <nav id='dropdown-menu'>
                        <ul className="dropdown-menu-list flex flex-col gap-4 mt-8" 
                            onClick={()=>setOpen(false)}>
                            <li className={`${location.pathname==='/collections' ? 'current': ''}`}>
                                <Link to="/collections">Collections</Link></li>
                            <li className={`${location.pathname==='/men' ? 'current': ''}`}>
                                <Link to="/men">Men</Link></li>
                            <li className={`${location.pathname==='/women' ? 'current': ''}`}>
                                <Link to="/women">Women</Link></li>
                            <li className={`${location.pathname==='/about' ? 'current': ''}`}>
                                <Link to="/about">About</Link></li>
                            <li className={`${location.pathname==='/contact' ? 'current': ''}`}>
                                <Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='flex flex-row items-center gap-8 h-full'>
                <CartIcon items={items} showCart={showCart} cartIsShown={cartIsShown} setCart={setCart}/>
                <img src={staticAsset('/images/image-avatar.png')} alt="customer avatar" className="avatar-img"/>
            </div>
        </header>
    )
}
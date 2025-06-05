
export default function DropdownMenu({open, setOpen}:
    {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>,} 
) {
    return (
        <div className={`dropdown p-4 ${open ? 'show': 'hide'}`}>
            <button onClick={()=>setOpen(false)}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#000000"/>
                </svg>
            </button>
            <ul className="dropdown-menu flex flex-col gap-4 mt-8">
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

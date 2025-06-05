import { staticAsset } from "../libs";

export default function LeftShifter({shift}:{shift:React.MouseEventHandler<HTMLElement>}) {
    return (
        <button className='prev-icon' onClick={shift}>
            <img 
                src={staticAsset('/images/icon-previous.svg')} 
                alt='previous button'
            />
        </button>
    )
}
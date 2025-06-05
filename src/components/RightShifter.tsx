import { staticAsset } from "../libs";

export default function RightShifter({shift}:{shift:React.MouseEventHandler<HTMLElement>}) {
    return (
        <button className='next-icon' onClick={shift}>
            <img                 
                src={staticAsset('/images/icon-next.svg')} 
                alt='next button'
            />
        </button>

    )
}

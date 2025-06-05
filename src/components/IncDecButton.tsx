import { staticAsset } from "../libs";

export default function IncDecButton({count, setCount}:
    {count: number, setCount: React.Dispatch<React.SetStateAction<number>> }
) {
    return (
        <div className="incdec bg-lightgray-blue py-2 mx-4 my-4 rounded-xl flex justify-around items-center">
            <button
                className='p-2'
                onClick={()=>{setCount(prev=> prev > 0 ? prev - 1: prev)}}
                aria-label='decrement the order count'
            >
                <img 
                    src={staticAsset('/images/icon-minus.svg')} 
                    alt='minus button' />
            </button>
            <span>{count}</span>
            <button
                className='px-2'
                onClick={()=>{setCount(prev=> prev + 1)}}
                aria-label='increment the order count'
            >
                <img 
                    src={staticAsset('/images/icon-plus.svg')} 
                    alt='plus button' />
            </button>
        </div>
    )
}
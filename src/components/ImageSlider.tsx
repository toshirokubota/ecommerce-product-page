import { useEffect, useRef, useState } from "react";
import { staticAsset } from "../libs";

export default function ImageSlider({imageNames}: {imageNames: string[]}) {
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [shift, setShift] = useState<number>(0);

    useEffect(() => {
        if (ref.current) {
            console.log('setWidth: ', ref.current.offsetWidth);
            setWidth(ref.current.offsetWidth);
        }
    }, []);

    const leftTranslate = () => {
        if(shift >= width) {
            setShift(prev => {
                console.log('leftTranslate:', prev - width);
                return prev - width
        });
        }
    }
    const rightTranslate = () => {
        if(shift < width * (imageNames.length - 1)) {
            setShift(prev => {
                console.log('rightTranslate:', prev + width);
                return prev + width
        });
        }
    }
    return (
        <div ref={ref} className="slider-viewport">
            <img 
                className='prev-icon' 
                src={staticAsset('/images/icon-previous.svg')} 
                alt='previous button'
                onClick={leftTranslate}
                />
            <div className="slider" style={{transform: `translateX(-${shift}px)`}}>
            {
                imageNames.map(name => (
                    <picture key={name} className="image-container">
                        <img src={staticAsset(name)} alt='' />
                    </picture>
                ))
            }
            </div>
            <img 
                className='next-icon' 
                src={staticAsset('/images/icon-next.svg')} 
                alt='next button'
                onClick={rightTranslate}
            />
        </div>
    )
}
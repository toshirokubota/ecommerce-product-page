import { useState } from "react";
import type { ProductType } from "../types";
import ImageSlider from "./ImageSlider";
import LeftShifter from "./LeftShifter";
import RightShifter from "./RightShifter";
import ThumbnailCard from "./ThumbnailCard";
import { staticAsset } from "../libs";

export default function Lightbox({product, show}:
    {product: ProductType,
        show: React.Dispatch<React.SetStateAction<boolean>>
    }) {
    const [imageViewWidth, setImageViewWidth] = useState(0);
    const [shiftAmount, setShiftAmount] = useState(0);

    const leftShift= () => {
        if(shiftAmount > 0) {
        setShiftAmount(prev => prev - imageViewWidth);
        }
    }
    const rightShift = () => {
        const numImages = product.images.length;
        if(shiftAmount < imageViewWidth * (numImages - 1)) {
        setShiftAmount(prev => prev + imageViewWidth);
        }
    }
    const handlers = [];
    for(let i=0; i<product.thumnails.length; ++i) {
        handlers.push(()=>{setShiftAmount(i * imageViewWidth)});
    }

    return (
        <div className='lightbox-bg'>
            <div className='lightbox-fg'>
                <button onClick={()=>show(false)}>
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFFFFF" fill-rule="evenodd"/>
                    </svg>
                </button>
                <LeftShifter shift={leftShift}/>
                <RightShifter shift={rightShift}/>
                <ImageSlider 
                    imageNames={product.images} 
                    shift={shiftAmount} 
                    setImageWidth={setImageViewWidth}
                    showLightbox={()=> {/*do nothing*/}}/>
                <ThumbnailCard imageNames={product.thumnails} handlers={handlers} />
            </div>
        </div>
    )
}

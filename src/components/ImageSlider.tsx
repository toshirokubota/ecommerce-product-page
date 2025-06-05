import { useEffect, useRef } from "react";
import { staticAsset } from "../libs";

export default function ImageSlider({imageNames, shift, imageWidth, setImageWidth, showLightbox}: 
    {
        imageNames: string[], shift: number, imageWidth: number,
        setImageWidth: React.Dispatch<React.SetStateAction<number>>,
        showLightbox: React.Dispatch<React.SetStateAction<boolean>>
    }) {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleResize = () => {
            if(ref.current){
                console.log('handleResize: ', ref.current.offsetWidth);
                setImageWidth(ref.current.offsetWidth);
            }
        }

        window.addEventListener("resize", handleResize);
            
        return () => window.removeEventListener("resize", handleResize); // Cleanup
    }, []);

    useEffect(() => {
        if (ref.current) {
            console.log('setWidth: ', ref.current.offsetWidth);
            setImageWidth(ref.current.offsetWidth);
        }
    }, []);

    console.log('imageSlider: ', shift, imageWidth);
    return (
        <div ref={ref} className="slider-viewport">
            <div className="slider" style={{transform: `translateX(-${shift * imageWidth}px)`}}>
            {
                imageNames.map(name => (
                    <div key={name} className="slider-container">
                        <img 
                            src={staticAsset(name)} alt='' 
                            onDoubleClick={()=>showLightbox(true)}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
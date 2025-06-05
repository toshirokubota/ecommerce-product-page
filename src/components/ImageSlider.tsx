import { useEffect, useRef } from "react";
import { staticAsset } from "../libs";

export default function ImageSlider({imageNames, shift, imageWidth, setImageWidth, showLightbox}: 
    {
        imageNames: string[], shift: number, imageWidth: number,
        setImageWidth: React.Dispatch<React.SetStateAction<number>>,
        showLightbox: React.Dispatch<React.SetStateAction<boolean>> | null
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
      
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && showLightbox) {
            showLightbox(true);
        }
    };

    //console.log('imageSlider: ', shift, imageWidth);
    return (
        <div ref={ref} 
            className="slider-viewport"
                onClick={showLightbox ? ()=>showLightbox(true): undefined}
                onKeyDown={handleKeyDown}
                tabIndex={showLightbox ? 0: 1}
            >
            <div className="slider" 
                style={{transform: `translateX(-${shift * imageWidth}px)`}}>
            {
                imageNames.map(name => (
                    <div key={name} className="slider-container">
                        <img 
                            src={staticAsset(name)} alt='' 
                            role='button' aria-label='enlarge the image'
                        />
                    </div>
                ))
            }
            </div>
        </div>
    )
}
import ImageSlider from "./ImageSlider";
import ThumbnailCard from "./ThumbnailCard";

export default function Lightbox({imageNames, thumbnailNames}:
    {imageNames: string[], thumbnailNames: string[]}) {

    return (
        <div className='lightbox-bg'>
            <div className='lightbox-fg'>
                <ImageSlider imageNames={imageNames} />
                <ThumbnailCard imageNames={thumbnailNames} />
            </div>
        </div>
    )
}
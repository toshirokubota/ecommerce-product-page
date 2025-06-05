import { staticAsset } from "../libs";

export default function ThumbnailCard({imageNames, handlers}: 
    {imageNames: string[], handlers: React.MouseEventHandler<HTMLButtonElement>[]}) {

    return (
        <div className="thumbnail-card">
            {
                imageNames.map((name, index) => (
                    <button key={name} onClick={handlers[index]}
                        aria-label='expand the thumbnail image'
                    >
                        <img src={staticAsset(name)} alt=''/>
                    </button>
                ))
            }
            
        </div>
    )
}
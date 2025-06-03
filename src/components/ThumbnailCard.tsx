import { staticAsset } from "../libs";

export default function ThumbnailCard({imageNames, handlers}: 
    {imageNames: string[], handlers: React.MouseEventHandler<HTMLButtonElement>[]}) {

    return (
        <div className="flex justify-around items-center">
            {
                imageNames.map((name, index) => (
                    <button onClick={handlers[index]}>
                        <img key={name} src={staticAsset(name)} alt=''/>
                    </button>
                ))
            }
            
        </div>
    )
}
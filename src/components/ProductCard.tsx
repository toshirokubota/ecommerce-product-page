
export default function ProductCard({company, name, description}:
    {company: string, name: string, description: string}
) {
    return (
        <div className="my-4 mx-4">
            <p className='text-darkgray-blue text-xs uppercase my-2'>{company}</p>
            <h1 className="text-verydark-blue text-2xl my-2">{name}</h1>
            <p className='text-darkgray-blue text-sm/lg my-2'>{description}</p>
        </div>
    )
}
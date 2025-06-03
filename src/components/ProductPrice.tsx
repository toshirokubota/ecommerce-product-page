
export default function ProductPrice({price, discount}:
    {price: number, discount: number}
) {
    const cost = price * discount;
    const discount_percentage = discount * 100;
    return (
        <div className="flex justify-between items-center mx-4 my-4">
            <span className='text-verydark-blue text-xl font-bold'>${cost.toFixed(2)}</span>
            <span className="bg-verydark-blue text-white px-2 rounded-md">{discount_percentage.toFixed(0)}%</span>
            <span className='line-through'>${price.toFixed(2)}</span>
        </div>
    )
}

export type ProductType = {
    id: number,
    company: string,
    name: string,
    description: string,
    price: number,
    discount: number,
    images: string[],
    thumnails: string[],
}

export type CartItemType = {
    product: ProductType,
    count: number
}

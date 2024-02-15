"use client";
import { PRODUCTS } from "./products.constants";
import ProductItem from "./product-item";

export default function Products() {
    return (
        <div className="mx-[140px]">
            <div className="grid grid-rows-6 grid-cols-2 gap-8">
                {PRODUCTS.map((item, index) =>
                    <div key={index}>
                        <ProductItem product={item} />
                    </div>
                )}
            </div>
        </div>)
}
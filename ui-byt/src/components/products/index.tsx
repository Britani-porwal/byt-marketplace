import Header from "./heading";
import Products from "./product-card";

export default function ProductPage() {
    return (
        <div className="mx-auto max-w-[1400px]">
            <Header />
            <Products />
        </div>
    )
}
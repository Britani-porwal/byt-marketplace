import Card from "./card";
import Pg2Footer from "./footer";
import Pg2Header from "./header";

export default function Page2() {
    return(
        <div className="mt-[120px] px-[200px] max-w-[1400px] mx-auto">
        <Pg2Header />
        <Card />
        <Pg2Footer />
        </div>
    )
}
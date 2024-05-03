import Image from "next/image";
import Right_arrow from "../icons/Right_arrow";
import Shopping_cart from "../icons/Shopping_cart";

export default function Hero() {
    return(
        <section className="hero">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Everything<br />
                    is better<br />
                    with a&nbsp;
                    <span className="text-primary">
                        Pizza
                    </span>
                </h1>
                <p className="my-6 text-gray-600 text-sm">
                “Pizza, that delightful culinary creation, fills the void in our daily existence, bringing with it a straightforward yet exquisite pleasure.” 🍕🌟
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full transition-all hover:bg-red-800 active:bg-red-400 focus:ring focus:ring-red-800">
                        <Shopping_cart />
                        Order now
                    </button>
                    <a className="flex gap-2 py-2 rounder-xl underline text-gray-600 font-semibold bg- transition-all hover:text-primary active:text-red-400">
                        Learn more
                        <Right_arrow />
                    </a>
                </div>
            </div>
            <div className="relative">
                <Image src={'/hero-pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
            </div>
        </section> 

    );
}
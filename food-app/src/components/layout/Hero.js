import Right_arrow from "../icons/Right_arrow";
import Shopping_cart from "../icons/Shopping_cart";

export default function Hero() {
    return(
        <section className="hero">
            <div className="py-12">
                <h1 className="text-4x1 font-semibold">
                    Everything<br />
                    is better<br />
                    with a&nbsp;
                    <span className="text-primary">
                        Pizza
                    </span>
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                “Pizza, that delightful culinary creation, fills the void in our daily existence, bringing with it a straightforward yet exquisite pleasure.” 🍕🌟
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
                        <Shopping_cart />
                        Order now
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                        Learn more
                        <Right_arrow />
                    </button>
                </div>
            </div>
        </section>
    );
}
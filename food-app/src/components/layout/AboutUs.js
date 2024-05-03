import SectionHeaders from "./SectionHeaders";

export default function AboutUs() {
    return (
        <section className="">
            <div>
                <SectionHeaders 
                    subHeader={'Our story'}
                    mainHeader={'About us'}
                />
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
                <div className="relative">
                    <img src={'/customers.jpg'} layout={'fill'} objectFit={'contain'} alt={'customers'} className="rounded-full" />
                </div>
                <div className="text-center text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
                    <p className="font-semibold">
                        Welcome to Pizza Pite, where passion meets perfection in every slice!
                    </p>
                    <p>
                        With over a decade of dedicated service, we take pride in being your neighborhood pizzeria that has become a cherished part of the community.
                    </p>
                    <p>
                        Since our establishment in 2010, we've been crafting culinary masterpieces that keep our customers coming back for more.
                    </p>
                </div>
            </div>
        </section>
    );
}
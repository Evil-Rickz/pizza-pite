import Image from "next/image";
import MenuItem from "../menu/MenuItem";

export default function HomeMenu() {
    return(
        <section>
            <div className="absolute left-0 text-left -z-10">
                <Image src={'/left-piece.png'} width={100} height={100} alt={'pizza-piece'} />
            </div>
            <div className="absolute right-0 -z-10">
                <Image src={'/right-piece.png'} width={160} height={160} alt={'pizza-piece'} />
            </div>
            <div className="text-center mb-4 ">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">
                    Check out
                </h3>
                <h2 className="text-primary font-bold text-4xl">
                    Menu
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            </div>
        </section>
    );
}
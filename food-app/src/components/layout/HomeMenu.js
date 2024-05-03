import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
    return(
        <section>
            <div className="absolute left-0 text-left -z-10">
                <Image src={'/left-piece.png'} width={100} height={100} alt={'pizza-piece'} />
            </div>
            <div className="absolute right-0 -z-10">
                <Image src={'/right-piece.png'} width={160} height={160} alt={'pizza-piece'} />
            </div>
            <div>
                <SectionHeaders 
                    subHeader={'check out'}
                    mainHeader={'Menu'}
                />
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
import Link from "next/link";

export default function Header() {
    return(
        <header className="flex gap-4 items-center justify-between">
            <Link className="text-primary font-semibold text-2xl" href="/">Pizza Pite</Link>
            <nav className="flex gap-4 text-gray-600 font-semibold">
                <Link href={'/'} className="transition-all hover:underline hover:text-primary">Home</Link>
                <Link href={''} className="transition-all hover:underline hover:text-primary">Menu</Link>
                <Link href={''} className="transition-all hover:underline hover:text-primary">About</Link>
                <Link href={''} className="transition-all hover:underline hover:text-primary">Contact</Link>
            </nav>
            <nav className="flex items-center gap-4 font-semibold">
                <Link href={'/login'} className="text-primary underline transition-all hover:text-red-800 active:text-red-400">
                    Login
                </Link>
                <Link href={'/register'} className="bg-primary text-white px-8 py-2 rounded-full transition-all hover:bg-red-800 active:bg-red-400 focus:ring focus:ring-red-800">
                    Register
                </Link>
            </nav>
        </header>

    );
}
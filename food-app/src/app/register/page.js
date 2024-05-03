import Facebook from "@/components/icons/Facebook";
import Google from "@/components/icons/Google";

export default function RegisterPage() {
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-8">
                Register
            </h1>
            <form className="block max-w-xs mx-auto">
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button type="submit">Register</button>
                <div className="my-8 text-center text-gray-400">
                    or login with provider
                </div>
                <div className="flex flex-col gap-4">
                    <button className="flex items-center justify-center gap-4 text-gray-600">
                        <Google />
                        Login with Google
                    </button>
                    <button className="flex items-center justify-center gap-4 text-gray-600">
                        <Facebook />
                        Login with Facebook
                    </button>
                </div>
            </form>
        </section>
    )
}
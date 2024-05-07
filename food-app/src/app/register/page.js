import Facebook from "@/components/icons/Facebook";
import Google from "@/components/icons/Google";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleFormSubmit(ev) {
        ev.preventDefault();
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-8">
                Register
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" value={email}
                    onChange={ev => setEmail(ev.target.value)} />
                <input type="password" placeholder="password" value={password}
                    onChange={ev => setPassword(ev.target.value)} />
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
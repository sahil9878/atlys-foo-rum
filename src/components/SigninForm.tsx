import { Link, useNavigate } from "react-router";
import LoginFormSkeleton from "./LoginFormSkeleton";
import { useState } from "react";
import TextInput from "./atomic/TextInput";
import useAuthStore from "../stores/auth";


const SigninForm =
    () => {
        const [username, setUsername] = useState<string>("")
        const [password, setPassword] = useState<string>("")
        const [error, setError] = useState<string>("")
        const { signIn } = useAuthStore()
        const navigate = useNavigate()
        const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
            try {
                e.preventDefault()
                signIn(username, password)
                navigate("/")
            } catch (e) {
                const error = e as Error
                console.log(e)
                setError(error.message)
            }
        }
        return (<LoginFormSkeleton
            title="Sign in to continue"
            description="Sign in to access all the features on this app"
            renderContent={(<form className="mt-15 space-y-4" onSubmit={handleSignin}>
                <TextInput label="Email or username" value={username} setValue={setUsername} />
                <TextInput label="Password" value={password} setValue={setPassword} inputType="password" />
                <button className="bg-primary w-full p-3 rounded-lg mt-1 font-semibold text-white text-sm">Sign in</button>
                <div className="text-center text-red-600">
                    {error}
                </div>
            </form>)}
            footerContent={(
                <div className="mt-4 mb-2 text-center text-sm text-gray-600">
                    Don't have an account? <Link to="/signup" className="text-primary font-medium">Sign Up</Link>
                </ div>
            )}
        />);
    }

export default SigninForm
    ;
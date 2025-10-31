import { Link, useNavigate } from "react-router";
import LoginFormSkeleton from "./LoginFormSkeleton";
import { useState } from "react";
import TextInput from "./TextInput";
import useAuthStore from "../stores/auth";


const SignupForm =
    () => {
        const [username, setUsername] = useState<string>("")
        const [password, setPassword] = useState<string>("")
        const [retypePassword, setRetypePassword] = useState<string>("")
        const [error, setError] = useState<string>("")
        const { signUp } = useAuthStore()
        const navigate = useNavigate()


        const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
            try {
                e.preventDefault()
                signUp(username, password, retypePassword)
                navigate("/signin")
            } catch (e) {
                const error = e as Error
                console.log(e)
                setError(error.message)
            }
        }
        return (<LoginFormSkeleton
            title="Create an account to continue"
            description="Create an account to access all the features on this app"
            renderContent={(<form className="mt-15 space-y-4" onSubmit={handleSignUp}>
                <TextInput label="Email or username" value={username} setValue={setUsername} />
                <TextInput label="Password" value={password} setValue={setPassword} inputType="password" />
                <TextInput label="Repeat password" value={retypePassword} setValue={setRetypePassword} inputType="password" />
                <button className="bg-primary w-full p-3 rounded-lg mt-1 font-semibold text-white text-sm">Sign up</button>
                <div className="text-center text-red-600">

                    {error}
                </div>
            </form>)}
            footerContent={(
                <div className="mt-4 mb-2 text-center text-sm text-gray-600">
                    Already have an account? <Link to="/signin" className="text-primary font-medium">Sign In</Link>
                </ div>
            )}
        />);
    }

export default SignupForm
    ;
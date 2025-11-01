import LoginFormSkeleton from "./LoginFormSkeleton";
import { useState } from "react";
import TextInput from "./atomic/TextInput";
import type { Password, Username } from "../stores/auth/interface";
import TextButton from "./atomic/TextButton";



interface SignupFormProps {
    footerCtaAction: () => void
    handleSignUp: (username: Username, password: Password, retypePassword: Password) => void
    error: string
}

const SignupForm: React.FC<SignupFormProps> = ({ handleSignUp, error, footerCtaAction }) => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [retypePassword, setRetypePassword] = useState<string>("")


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSignUp(username, password, retypePassword)
    }

    return (<LoginFormSkeleton
        title="Create an account to continue"
        description="Create an account to access all the features on this app"
        renderContent={(<form className="mt-15 space-y-4" onSubmit={onSubmit}>
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
                Already have an account? <TextButton onClick={footerCtaAction} label="Sign In" />
            </ div>
        )}
    />);
}

export default SignupForm
    ;
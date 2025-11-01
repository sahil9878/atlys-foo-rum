import LoginFormSkeleton from "./LoginFormSkeleton";
import { useState } from "react";
import TextInput from "./atomic/TextInput";
import type { Password, Username } from "../stores/auth/interface";
import TextButton from "./atomic/TextButton";

interface SigninFormProps {
    footerCtaAction: () => void
    handleSignin: (username: Username, password: Password) => void
    error: string
}

const SigninForm: React.FC<SigninFormProps> = ({ footerCtaAction, handleSignin, error }) => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSignin(username, password)
    }

    return (<LoginFormSkeleton
        title="Sign in to continue"
        description="Sign in to access all the features on this app"
        renderContent={(<form className="mt-15 space-y-4" onSubmit={onSubmit}>
            <TextInput label="Email or username" value={username} setValue={setUsername} />
            <TextInput label="Password" value={password} setValue={setPassword} inputType="password" />
            <button className="bg-primary w-full p-3 rounded-lg mt-1 font-semibold text-white text-sm">Sign in</button>
            <div className="text-center text-red-600">
                {error}
            </div>
        </form>)}
        footerContent={(
            <div className="mt-4 mb-2 text-center text-sm text-gray-600 ">
                Don't have an account? <TextButton onClick={footerCtaAction} label="Sign Up" />
            </ div>
        )}
    />);
}

export default SigninForm
    ;
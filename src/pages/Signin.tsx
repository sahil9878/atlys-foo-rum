import { useNavigate } from "react-router";
import SigninForm from "../components/SigninForm";
import { useState } from "react";
import useAuthStore from "../stores/auth";
import type { Password, Username } from "../stores/auth/interface";

const SigninPage = () => {
    const [error, setError] = useState<string>("")
    const navigate = useNavigate()
    const { signIn } = useAuthStore()
    const handleSignin = (username: Username, password: Password) => {
        try {
            signIn(username, password)
            navigate("/")
        } catch (e) {
            const error = e as Error
            setError(error.message)
        }
    }
    return (<>
        <div className="w-full h-full md:pt-10 flex justify-center">
            <SigninForm footerCtaAction={() => navigate("/signup")} handleSignin={handleSignin} error={error} />
        </div>
    </>);
}

export default SigninPage;
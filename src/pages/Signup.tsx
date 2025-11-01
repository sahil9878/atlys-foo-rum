import { useState } from "react";
import SignupForm from "../components/SignupForm";
import useAuthStore from "../stores/auth";
import { useNavigate } from "react-router";
import type { Password, Username } from "../stores/auth/interface";

const SignupPage = () => {
    const navigate = useNavigate()

    const [error, setError] = useState<string>("")
    const { signUp } = useAuthStore()


    const handleSignUp = (username: Username, password: Password, retypePassword: Password) => {
        try {
            signUp(username, password, retypePassword)
            navigate("/signin")
        } catch (e) {
            const error = e as Error
            setError(error.message)
        }
    }

    return (<>
        <div className="w-full h-full md:pt-10 flex justify-center">
            <SignupForm handleSignUp={handleSignUp} footerCtaAction={() => navigate("/signin")} error={error} />
        </div>
    </>);
}

export default SignupPage;
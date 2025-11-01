import { useState } from "react"
import Dialog from "./atomic/Dialog"
import SigninForm from "./SigninForm"
import SignupForm from "./SignupForm"
import type { Password, Username } from "../stores/auth/interface"
import useAuthStore from "../stores/auth"

const SigninPopup = () => {
    const [showSignupPage, setShowSignupPage] = useState(false)
    const { isAuthPopupOpen, setIsAuthPopupOpen, signUp, signIn } = useAuthStore()

    const [error, setError] = useState<string>("")


    const handleSignUp = (username: Username, password: Password, retypePassword: Password) => {
        try {
            signUp(username, password, retypePassword)
            setShowSignupPage(false)
        } catch (e) {
            const error = e as Error
            setError(error.message)
        }
    }
    const handleSignin = (username: Username, password: Password) => {
        try {
            signIn(username, password)
            setShowSignupPage(false)
        } catch (e) {
            const error = e as Error
            setError(error.message)
        }
    }


    return <Dialog isOpen={isAuthPopupOpen} closeDialog={() => setIsAuthPopupOpen(false)}>

        {
            showSignupPage ? <SignupForm handleSignUp={handleSignUp} footerCtaAction={() => setShowSignupPage(false)} error={error} />
                : <SigninForm footerCtaAction={() => setShowSignupPage(true)} handleSignin={handleSignin} error={error} />
        }
    </Dialog>
}

export default SigninPopup
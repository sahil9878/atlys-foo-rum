import SigninForm from "../components/SigninForm";
import useAuthStore from "../stores/auth";

function SigninPage() {
    const { signIn } = useAuthStore();


    return (<>
        <SigninForm />
    </>);
}

export default SigninPage;
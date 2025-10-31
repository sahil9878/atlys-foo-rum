import { ReactComponent as Login } from '../assets/login.svg'

interface LoginFormSkeletonProps {

    footerContent?: React.ReactNode;
    title: string
    description: string
    renderContent: React.ReactNode;
}

const LoginFormSkeleton: React.FC<LoginFormSkeletonProps> = ({
    footerContent,
    title,
    description,
    renderContent
}) => {
    return (
        <div className="max-w-lg w-full rounded-2xl bg-grayBg p-2 ">
            <div className="bg-white rounded-xl px-12 pt-8 pb-12 shadow-md shadow-inner">
                <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200">
                        <Login />
                    </div>
                </div>

                <h2 className="text-center text-xl font-semibold mt-5">{title}</h2>
                <p className="text-center text-sm text-gray-500 mt-1">{description}</p>
                {renderContent}
            </div>
            {footerContent}
        </div>
    )
}

export default LoginFormSkeleton;
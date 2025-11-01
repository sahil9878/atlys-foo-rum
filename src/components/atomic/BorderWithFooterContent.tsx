import type { ReactNode } from "react"

interface BorderWithFooterContentProps {
    children: ReactNode
    footerContent?: ReactNode
}

const BorderWithFooterContent: React.FC<BorderWithFooterContentProps> = ({ children, footerContent }) => {
    return <div className="max-w-lg w-full rounded-2xl bg-grayBg p-2 ">
        < div className="bg-white rounded-xl px-12 pt-8 pb-12 shadow-md shadow-inner" >

            {children}
        </div >
        {footerContent}
    </div >
}
export default BorderWithFooterContent
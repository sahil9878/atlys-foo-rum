import type { ReactNode } from "react"

interface BorderWithFooterContentProps {
    children: ReactNode
    footerContent?: ReactNode
    size?: Size
}

const sizeMap = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
} as const

type Size = keyof typeof sizeMap

const BorderWithFooterContent: React.FC<BorderWithFooterContentProps> = ({ children, footerContent, size = "lg" }) => {
    return <div className={`${sizeMap[size]} w-full rounded-2xl bg-neutral-100 p-2 `}>
        < div className="bg-white rounded-xl shadow-md shadow-inner" >

            {children}
        </div >
        {footerContent}
    </div >
}
export default BorderWithFooterContent
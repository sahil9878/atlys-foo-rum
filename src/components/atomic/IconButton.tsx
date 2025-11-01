interface IconButtonProps {
    onClick: () => void
    children: React.ReactNode
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, children }) => {
    return <button className=" p-1 hover:bg-black/10 cursor-pointer rounded-sm transition-bg duration-200 " onClick={onClick}>
        {children}
    </button>
}

export default IconButton
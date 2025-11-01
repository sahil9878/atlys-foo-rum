interface IconButtonProps {
    onClick: () => void
    children: React.ReactNode
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, children }) => {
    return <button className="p-1.5 hover:bg-black/6 cursor-pointer rounded-[10px] transition-bg duration-200" onClick={onClick}>
        {children}
    </button>
}

export default IconButton
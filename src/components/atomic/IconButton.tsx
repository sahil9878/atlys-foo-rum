interface IconButtonProps {
    onClick: () => void
    children: React.ReactNode
    disabled?: boolean
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, children, disabled = false }) => {
    return <button disabled={disabled} className={`p-1.5 hover:bg-black/6 ${disabled ? "cursor-not-allowed" : "cursor-pointer"} rounded-[10px] transition-bg duration-200`} onClick={onClick}>
        {children}
    </button>
}

export default IconButton
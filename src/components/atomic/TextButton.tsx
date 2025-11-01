interface TextButtonProps {
    onClick: () => void
    label: string
}
const TextButton: React.FC<TextButtonProps> = ({ onClick, label }) => {
    return <button onClick={onClick} className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 cursor-pointer">
        {label}
    </button>
}
export default TextButton
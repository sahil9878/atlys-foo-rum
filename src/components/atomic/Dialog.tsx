interface DialogProps {
    isOpen: boolean
    closeDialog: () => void
    children: React.ReactNode
}
const Dialog: React.FC<DialogProps> = ({ isOpen, closeDialog, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/45 flex justify-center items-center z-50"
            onClick={closeDialog}
        >
            <div
                className="bg-white max-w-lg w-full rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()} // Prevent closing the modal if clicking inside it
            >
                {children}
            </div>
        </div>)
}

export default Dialog
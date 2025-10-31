interface TextInputProps {
    label: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>
    inputType?: string
}

const TextInput: React.FC<TextInputProps> = ({ label, value, setValue, inputType = "text" }) => {
    return (<div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
        <input
            type={inputType}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your email or username"
            className="w-full bg-gray-50 placeholder-gray-400 text-sm text-gray-700 rounded-lg py-3 px-4 border border-transparent focus:outline-none"
        />
    </div>);
}

export default TextInput;
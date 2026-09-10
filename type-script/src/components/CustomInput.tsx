interface CustomInputProps {
    name: string;
    value: string;
    type?: 'text' | 'email';
    placeholder?: string;
    onChange: (value: string) => void;
}

function CustomInput({ name, value, type = 'text', placeholder, onChange }: CustomInputProps) {
    return (
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default CustomInput;
interface CustomButtonProps {
    value: string;
    onClick: () => void;
}

function CustomButton({ value, onClick }: CustomButtonProps) {
    return <button onClick={onClick}>{value}</button>;
}

export default CustomButton;
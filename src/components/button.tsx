
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button : React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <>
            <button 
                className="py-4 px-14 bg-primary text-white border  border-primary hover:bg-transparent hover:border-white rounded-md"
                onClick={onClick}    
            >
                {children}
            </button>
        </>
    )
}

export default Button;

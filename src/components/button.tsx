
interface ButtonProps {
    children: React.ReactNode;
}

const Button : React.FC<ButtonProps> = ({children}) => {
    return (
        <>
            <button className="py-4 px-14 bg-primary text-white border  border-primary hover:bg-transparent hover:border-white rounded-md">
                {children}
            </button>
        </>
    )
}

export default Button;
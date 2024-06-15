import { Hearts } from 'react-loader-spinner';

const LoadingFullScreen : React.FC = () => {
    return (
        <div className="h-screen w-screen">
            <div className='flex justify-center items-center h-full'>
            <Hearts
                height="300"
                width="300"
                color="#7c9b88"
                ariaLabel="loading"
            />
        </div> 
    </div>
    );
};

export default LoadingFullScreen;
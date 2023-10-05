import  { createContext, useContext, useState, ReactNode } from 'react';

interface ScrollContextType {
    isInView: boolean;
    setIsInView: (isInView: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType>({
    isInView: false,
    setIsInView: () => {},
});

export const useScroll = () => {
    return useContext(ScrollContext);
  };

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const [isInView, setIsInView] = useState(false);

    return (
        <ScrollContext.Provider value={{ isInView, setIsInView }}>
            {children}
        </ScrollContext.Provider>
    );
};



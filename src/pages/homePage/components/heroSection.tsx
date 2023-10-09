import videoClip from '@/assets/videos/heroClip.mp4';
import { useInView } from 'react-intersection-observer';
import { useScroll } from '@/context/scrollContext';
import { useEffect } from 'react';
import { Fade } from "react-awesome-reveal";

const HeroSection: React.FC = () => {

  // used to detect if the component is in view to change the navbar
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { setIsInView } = useScroll();

  useEffect(() => {
    setIsInView(inView);
  }, [inView, setIsInView]);

  return (
    <div ref={ref} className='relative h-full w-full'>
      {/* Video Background */}
    <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 z-10 bg-black">
        <video aria-hidden="true" 
          className="relativ z-20 h-full w-full object-cover pointer visible opacity-80" 
          autoPlay={true} 
          loop={true}
          playsInline={true}
          muted>
          <source src={videoClip} type="video/mp4"/> Your browser does not support the video tag. 
        </video>
    </div>
      <div className="relative z-10 px-6 lg:px-8">
        <div className="flex items-center w-fit min-h-screen m-auto max-w-2xl py-28 sm:py-48 lg:py-56">
          <div className="text-center">
              <Fade 
                  direction="up" 
                  duration={3000}
                  triggerOnce={true}>
                <h1 className='h1'>
                  Anette & Mats
                </h1>
              </Fade>
            <div className="justify-center">
              <Fade 
               direction='down'
                duration={3000}
                triggerOnce={true}>
                  <h2 className='h2 text-white py-4'>
                    25/26 Mai 2024
                  </h2>
                </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

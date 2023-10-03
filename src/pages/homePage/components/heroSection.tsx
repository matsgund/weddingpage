import { Transition } from '@headlessui/react'
import videoClip from '@/assets/videos/klipp2.mp4';
import posterImage from '@/assets/images/jpg/heroImage3.jpg';
import { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <Transition.Root
      appear={true}
      show={true}
      as="div"
      enter="ease-in duration-[1000ms] transition-all"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      className="min-h-screen relative"
    >
      {/* Video Background */}
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video 
          ref={videoRef} 
          className="min-w-full min-h-full absolute object-cover"
          autoPlay 
          muted 
          loop
          poster={posterImage}
          >  
           <source src={videoClip} type="video/mp4" />        
        </video>
    </div>
      <div className="relative z-10 px-6 lg:px-8">
        <div className="flex items-center w-fit min-h-screen m-auto max-w-2xl py-28 sm:py-48 lg:py-56">
          <div className="text-center">
            <Transition.Child
              as="h1"
              enter="ease-in duration-[1000ms] transition-all delay-[300ms]"
              enterFrom="opacity-0 translate-y-12"
              enterTo="opacity-100 translate-y-0"
              className="h1"
            >
              Anette & Mats
            </Transition.Child>
            <div className="justify-center">
              <Transition.Child
                as="h2"
                enter="ease-in duration-[1000ms] transition-all delay-[200ms]"
                enterFrom="opacity-0 translate-y-12"
                enterTo="opacity-100 translate-y-0"
                className="h2 text-white py-4"
              >
                25/26 Mai 2024
              </Transition.Child>
            </div>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
};

export default HeroSection;

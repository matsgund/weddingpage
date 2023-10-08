import videoClip from '@/assets/videos/heroClip2.mp4';
import posterImage from '@/assets/images/jpg/heroImage3.jpg';
import { useInView } from 'react-intersection-observer';
import { useScroll } from '@/context/scrollContext';

const HeroSection: React.FC = () => {

  // used to detect if the component is in view to change the navbar
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { setIsInView } = useScroll();
  setIsInView(inView);

  return (
    <div ref={ref} className='min-h-screen relative'>
      {/* Video Background */}
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video 
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
              <h1 className='h1'>
                Anette & Mats
              </h1>
            <div className="justify-center">
                <h2 className='h2 text-white py-4'>
                  25/26 Mai 2024
                </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

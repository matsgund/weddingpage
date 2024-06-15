import LoadingFullScreen from '@/components/loadingFullScreen';
import { useInView } from 'react-intersection-observer';
import { useScroll } from '@/context/scrollContext';
import { useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import useSanity from '@/hooks/useSanity';


const HeroSection: React.FC = () => {
    // used to detect if the component is in view to change the navbar
    const { ref, inView } = useInView({
      threshold: 0,
    });
  
    const { setIsInView } = useScroll();
  
    useEffect(() => {
      setIsInView(inView);
    }, [inView, setIsInView]);

  interface HeroSection {
    title: string;
    subtitle: string;
    videoUrl?: string;
    pictureUrl?: string;
  }

  const query = `*[_type == "heroSection"]{
    title,
    subtitle,
    "videoUrl": video.asset->url,
    "pictureUrl": picture.asset->url
  }`;

  const { data, error, loading } =  useSanity<HeroSection[]>(query);

  if (loading || !data ) {
    return <LoadingFullScreen />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  const { title, subtitle, videoUrl, pictureUrl } = data[0];

  return (
    <div ref={ref} className='relative h-full w-full'>
      {/* Video Background */}
    <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 z-10 bg-black">
       
        <img 
          src={pictureUrl}
          title="Your browser does not support the <video> tag" 
          className="w-full h-full object-cover pointer visible opacity-80"  
          />
    </div>
      <div className="relative z-10 px-6 lg:px-8">
        <div className="flex items-center w-fit min-h-screen m-auto max-w-2xl py-28 sm:py-48 lg:py-56">
          <div className="text-center">
              <Fade 
                  direction="up" 
                  duration={3000}
                  triggerOnce={true}>
                <h1 className='h1'>
                  {title}
                </h1>
              </Fade>
            <div className="justify-center">
              <Fade 
               direction='down'
                duration={3000}
                triggerOnce={true}>
                  <h2 className='h2 text-white py-4'>
                    {subtitle}
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

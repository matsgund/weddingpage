import { Element } from 'react-scroll';
import image1 from '@/assets/images/jpg/test1.webp';
import image2 from '@/assets/images/jpg/test2.webp';
import { Transition } from '@headlessui/react'
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const OurHistorySection : React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({threshold: 0.2});

      useEffect(() => {
        if (inView) {
            console.log('inView');
          setIsVisible(true);
        }
      }, [inView]);

    return (
       <Element name="our-history">
         <Transition.Root
            ref={ref}
            appear={true}
            show={true}
            as="section"
            enter="ease-in duration-[1000ms] transition-all"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            className="bg-white"
            >
                <Transition.Child
                    as="div"
                    enter="ease-in duration-[1000ms] transition-all delay-[3000ms]"
                    enterFrom="opacity-0 translate-x-full"
                    enterTo="opacity-100 translate-x-0"
                    className="gap-16 items-center py-12 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-36 lg:px-6"
                >         
                    <div>
                        <h2 className="mb-4 h2 text-primary">Vår Historie</h2>
                        <p className="p mb-4 text-gray-500 ">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                        <p className="p mb-4 text-gray-500">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src={image1} alt="office content 1"/>
                        <img className="mt-4 w-full lg:mt-10 rounded-md" src={image2} alt="office content 2"/>
                    </div> 
                </Transition.Child>
            </Transition.Root> 
        </Element>
    )

}


export default OurHistorySection;
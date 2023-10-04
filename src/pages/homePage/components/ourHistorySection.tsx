import { Element } from 'react-scroll';
import image1 from '@/assets/images/jpg/test1.webp';
import image2 from '@/assets/images/jpg/test2.webp';

const OurHistorySection : React.FC = () => {

    return (
       <Element name="our-history"> 
            <section className="bg-white">
                <div className="gap-16 items-center py-12 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-36 lg:px-6">
                    <div className="">
                        <h2 className="mb-4 h2 text-primary">Vår Historie</h2>
                        <p className="p mb-4 text-gray-500 ">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                        <p className="p mb-4 text-gray-500">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src={image1} alt="office content 1"/>
                        <img className="mt-4 w-full lg:mt-10 rounded-md" src={image2} alt="office content 2"/>
                    </div>
                </div>
            </section>
        </Element>
    )

}


export default OurHistorySection;
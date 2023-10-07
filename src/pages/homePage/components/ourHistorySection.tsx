import { Element } from 'react-scroll';
import image1 from '@/assets/images/jpg/test1.webp';
import image2 from '@/assets/images/jpg/test2.webp';
import { Fade } from "react-awesome-reveal";

const OurHistorySection : React.FC = () => {

    return (
       <Element name="our-history">
            <section className={`bg-white`}>
                    <div className='gap-16 items-center py-12 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-36 lg:px-6'>
                        <Fade 
                            direction="left" 
                            duration={3000}
                            triggerOnce={true}>    
                            <div>
                                <h2 className="mb-4 h2 text-primary">Vår Historie</h2>
                                <p className="p mb-4 text-gray-500 ">En match på Happn førte til vår første date på Fløyen i august 2020. Etter noen måneder sammen, ble vi offisielt kjærester. Et halvt år senere bestemte oss for å kjøpe vårt drømmehus på Siljustøl. Mai 2022 ble vi samboere på Nygårdshøyden og november samme år overtok vi huset.  3. juli 2023 gikk Mats ned på kne og Anette sa JA.</p>
                                <p className='p mb text-gray-500'>Vi ser frem til å skape et liv fylt med kjærlighet og minner sammen.</p>
                            </div>
                        </Fade>
                        <Fade 
                            direction="right"
                            duration={3000} 
                            triggerOnce={true}>    
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <img className="w-full rounded-lg" src={image1} alt="office content 1"/>
                                <img className="mt-4 w-full lg:mt-10 rounded-md" src={image2} alt="office content 2"/>
                            </div> 
                        </Fade>
                    </div>  
            </section>
        </Element>
    )

}


export default OurHistorySection;
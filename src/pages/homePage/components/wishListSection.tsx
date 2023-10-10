import { Element } from 'react-scroll';
import { GiftIcon } from '@heroicons/react/24/outline';
import { Fade } from 'react-awesome-reveal';



const WishListSection : React.FC = () => {

    return (
       <Element name="wish-list">
            <div className="w-full py-12 px-4 lg:py-36 text-center bg-white">
                <Fade
                    duration={3000}
                    triggerOnce={true}>
                    <h2 className="h2 mb-4 text-primary">Ønskeliste</h2>
                    <p className="p mb-4 text-gray-500 sm:text-lg ">Vi har laget ønskelister hos Tilbords og Kitchen</p>
                </Fade>
                <Fade
                    duration={3000}
                    triggerOnce={true}>
                    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <a href="#" className="w-full sm:w-auto bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-md inline-flex items-center justify-center px-4 py-2.5 ">
                            <GiftIcon className="mr-3 w-7 h-7"/>
                            <div className="text-left">
                                <div className="mb-1 text-xs">ønskeliste</div>
                                <div className="-mt-1 font-sans text-sm font-semibold">Kitchen</div>
                            </div>
                        </a>
                        <a href="https://www.tilbords.no/onskeliste/123312" className="w-full sm:w-auto bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-md inline-flex items-center justify-center px-4 py-2.5">
                            <GiftIcon className="mr-3 w-7 h-7"/>
                            <div className="text-left">
                                <div className="mb-1 text-xs">Ønskeliste</div>
                                <div className="-mt-1 font-sans text-sm font-semibold">Tilbords</div>
                            </div>
                        </a>
                    </div>
                </Fade>
            </div>
        </Element>
    )

}


export default WishListSection;
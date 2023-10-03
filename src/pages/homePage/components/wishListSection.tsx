import { Element } from 'react-scroll';
import { GiftIcon } from '@heroicons/react/24/outline';


const WishListSection : React.FC = () => {

    return (
       <Element name="wish-list">
            
        <div className="w-full py-12 lg:py-36 text-center bg-white">
            <h2 className="mb-4 text-4xl tracking-tight text-primary font-cmunrm ">Ønskeliste</h2>
            <p className="text-base mb-4 font-ralewaRegular text-gray-500 sm:text-lg ">Vi har laget ønskelister hos Tilbords og Kitchen</p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a href="#" className="w-full sm:w-auto bg-secondary hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 ">
                <GiftIcon className="mr-3 w-7 h-7"/>
                    <div className="text-left">
                        <div className="mb-1 text-xs">ønskeliste</div>
                        <div className="-mt-1 font-sans text-sm font-semibold">Kitchen</div>
                    </div>
                </a>
                <a href="#" className="w-full sm:w-auto bg-secondary hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 0">
                    <GiftIcon className="mr-3 w-7 h-7"/>
                    <div className="text-left">
                        <div className="mb-1 text-xs">Ønskeliste</div>
                        <div className="-mt-1 font-sans text-sm font-semibold">Tilbords</div>
                    </div>
                </a>
            </div>
        </div>

        </Element>
    )

}


export default WishListSection;
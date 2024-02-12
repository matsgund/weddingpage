import {  useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from "@/components/button";
import { Transition } from '@headlessui/react';
import heartIcon from '@/assets/images/ico/heart.ico';
import { Link } from 'react-scroll';
import GoogleFormModal from '@/components/googleFormModal';
import { useScroll } from '@/context/scrollContext';


interface NavigationItem {
    name: string;
    link: string;
    offset: number;
}

const navigation : Array<NavigationItem> = [
  { name: 'Vår historie', link: '/our-history', offset:-120 },
  { name: 'Praktisk informasjon', link: '/info', offset:-120 }, 
  { name: 'Ønskeliste', link: '/wish-list', offset:-120 },
  { name: 'Galleri', link: '/gallery', offset:-120 },
]

const Navbar : React.FC = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [googleFormModalOpen, setGoogleFormModalOpen] = useState(false);
    const [navScrollStyling, setNavBackground] = useState("bg-transparent p-12");
    const { isInView } = useScroll();


    useEffect(() => {
        if (isInView) {
            setNavBackground("bg-transparent p-12");
        } else {
            setNavBackground("bg-black bg-opacity-60 p-2.5");
        }
    }, [isInView]);

  return (
            <header className="fixed inset-x-0 top-0 z-50">
                <GoogleFormModal 
                    googleFormModalOpen={googleFormModalOpen} 
                    setGoogleFormModalOpen={setGoogleFormModalOpen} 
                />
                 <Transition.Root
                    appear={true}
                    show={true}
                    as="div"
                    enter="ease-in duration-[3000ms] transition-all"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                >
                    <nav className={`flex items-center justify-end lg:px-24 ${navScrollStyling}`} aria-label="Global">
                        <div className="flex lg:hidden">
                            <button
                            type="button"
                            className="-m-2.5 inline-flex items-center  outline-none justify-center rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                            >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                 <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    key={item.name}
                                    className="text-lg hover:text-primary font-medium font-ralewaRegular leading-6 text-white cursor-pointer"
                                    activeClass="underline underline-offset-8 text-indigo-600"
                                    spy={true}
                                    to={item.link.slice(1)}
                                    smooth={true}
                                    offset={item.offset}
                                    duration={500}
                                 >
                                 {item.name}
                             </Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Button 
                                onClick={() => setGoogleFormModalOpen(true)}>
                                Påmelding
                            </Button> 
                        </div>
                    </nav>
                </Transition.Root>
                <Transition
                    show={mobileMenuOpen}
                    as="div"
                >
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-12 py-12 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5 flex ">
                                    <span className="sr-only">Icon</span>
                                    <span className="font-cmunrm self-center text-3xl flex gap-3">
                                        Anette 
                                         <span> 
                                            <img
                                            className="h-8 w-auto"
                                            src={heartIcon}
                                            alt="heart icon"/>
                                            </span> 
                                        Mats
                                    </span> 
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                            </button>
                            </div>
                            <Transition.Child
                                as="div"
                                enter="transition ease-in-out duration-1000 transform"
                                enterFrom="opacity-0 translate-x-20"
                                enterTo="opacity-100 translate-x-0"
                                leave="transition ease-in-out duration-100 transform"
                                leaveFrom="opacity-100 translate-x-0"
                                leaveTo="opacity-0 translate-x-20"
                            >
                            <div className="mt-10 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <Link
                                                onClick={() => setMobileMenuOpen(false)}
                                                key={item.name}
                                                className="-mx-3 block rounded-md px-3 py-2 text-base font-ralewaRegular font-medium leading-7 text-gray-900 hover:text-primary"
                                                // activeClass="underline underline-offset-8 text-indigo-600"
                                                spy={true}
                                                to={item.link.slice(1)}
                                                smooth={true}
                                                offset={item.offset}
                                                duration={500}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <span
                                            onClick={() => {setMobileMenuOpen(false); setGoogleFormModalOpen(true);}}   
                                            className="-mx-3 block rounded-md px-3 py-2.5 text-base font-ralewaRegular font-medium leading-7 text-gray-900 hover:text-primary"
                                            
                                        >
                                           Påmelding
                                        </span>
                                    
                                </div>
                            </div>
                        </div>
                        </Transition.Child>
                    </Dialog.Panel>
                </Dialog>
            </Transition>
        </header>
   
  )
}

export default Navbar;

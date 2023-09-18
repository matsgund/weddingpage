import {  useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from "@/components/button";
import { Transition } from '@headlessui/react';

const navigation = [
  { name: 'Vår historie', href: '#' },
  { name: 'Praktisk informasjon', href: '#' },
  { name: 'Ønskeliste', href: '#' },
]

const Navbar : React.FC = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
            <header className="fixed inset-x-0 top-0 z-50">
                 <Transition.Root
                    appear={true}
                    show={true}
                    as="div"
                    enter="ease-in duration-[3000ms] transition-all"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                >
                    <nav className="flex items-center justify-end p-12 lg:px-24" aria-label="Global">
                        <div className="flex lg:hidden">
                            <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                            >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-lg hover:text-primary font-bold leading-6 text-white">
                                {item.name}
                            </a>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="#" className="text-lg font-semibold leading-6 text-white">
                                <Button>
                                    Påmelding
                                </Button> 
                            </a>
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
                                   
                                    <span className="font-cmunrm self-center text-3xl flex gap-3"> Anette <span> <img
                                        className="h-8 w-auto"
                                        src="/src/assets/images/ico/heart.ico"
                                        alt=""
                                    /></span> Mats</span> 
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
                                            <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-primary "
                                            >
                                            {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:text-primary "
                                    >
                                        Påmelding
                                    </a>
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

import Navbar from "@/components/navbar";
import { Transition } from '@headlessui/react'
import { useEffect, useState } from "react";


const HeroSection: React.FC = () => {

  return (
    <Transition.Root
      appear={true}
      show={true}
      as="div"
      enter="ease-in duration-[1000ms] transition-all"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      className="bg-hero-image bg-cover bg-center min-h-screen"
    >
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-28 sm:py-48 lg:py-56">
          <div className="text-center">
            <Transition.Child
              as="h1"
              enter="ease-in duration-[1000ms] transition-all delay-[300ms]"
              enterFrom="opacity-0 translate-y-12"
              enterTo="opacity-100 translate-y-0"
              className="text-6xl tracking-tight sm:text-9xl font-greatVibes text-white"
            >
              Anette & Mats
            </Transition.Child>
            <div className="justify-center align-center">
              <Transition.Child
                as="h3"
                enter="ease-in duration-[1000ms] transition-all delay-[200ms]"
                enterFrom="opacity-0 translate-y-12"
                enterTo="opacity-100 translate-y-0"
                className="font-greatVibes text-3xl tracking-tight text-white sm:text-5xl"
              >
                25.05.2024
              </Transition.Child>
            </div>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
};

export default HeroSection;

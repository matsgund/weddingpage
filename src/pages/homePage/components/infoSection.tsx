import { Element } from 'react-scroll';
import { CalendarIcon } from '@heroicons/react/24/outline';
import villaImage from '@/assets/images/jpg/villa.jpg';
import GoogleMapRoute from '@/components/googleMap';
import { Fade } from "react-awesome-reveal";

const schedule = [
    {
      day:"Lørdag 25. mai",
      hr: true, 
      events: [
        { 
          id: 1, 
          name: "Vielse - Fana Kirke", 
          href:"#link", 
          time: "15:30", 
          details: "Fanavegen 320",
          member: "Alice Doe",
        },
      ]
    },
    {
      day:"Søndag 26. mai", 
      hr: false,
      events: [
        { 
          id: 1, 
          name: "Felles transport fra byn", 
          href:"#link", 
          time: "13:00", 
          details: "For de som ønsker transport fra sentrum. Maxitaxi fra Festplassen.",
          member: "John Doe"
        },
        { 
          id: 2, 
          name: "Velkomstdrink", 
          href:"#link", 
          time: "14:00", 
          details: "Da er vi i gang.",
          member: "Alice Doe"
        },
        {
            id: 3,
            name: "Middag",
            href:"#link",
            time: "14:30",
            details: "Matservering starter",
            member: "John Doe"
        },
        {
            id:4,
            name: "Transport tilbake til byn",
            href:"#link",
            time: "18:30",
            details: "For de som ønskjer transport tilbake til byn. Maxitaxi til Festplassen.",
            member: "John Doe"
        
        }
      ]
    },
  ]

  const locationInfo = [
    {   id: 1,
        headline: "Villa",
        text: "Villa Lokøy ligger på Lokøy, vest for Bergen, og er et populært valg for gjester som søker privatliv, komfort og uforglemmelige opplevelser. Fra hovedsuiten kan man observere havørner mens man nyter en kopp kaffe. Villaen er kjent for sin luksuriøse atmosfære og tilbyr en unik opplevelse ved den norske kysten"
    },
    {   id: 2,     
        headline: "Parkering",
        text: "Gratis parkering på stedet"
    },
    {
        id: 3,
        headline: "Servering",
        text: "Det vil bli servert mat og drikke gjennom kvelden"
    }
    
]


const InfoSection : React.FC = () => {

    return (
        <Element name="info">
            <div className="mx-auto py-12 lg:py-36 w-full max-w-7x bg-quaternary">
                <div className="mx-auto max-w-4xl">

                    {/* :TITLE CONTAINER */}
                    <Fade 
                        duration={3000}
                        triggerOnce={true}>    
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="h2 mb-4 text-white">
                                Praktisk informasjon
                            </h2>
                            <h4 className="h4 text-white uppercase tracking-widest">
                                Tidsskjema
                            </h4>
                        </div>
                    </Fade>
                        {/* :SCHEDULE */}
                    <Fade 
                        duration={3000}
                        triggerOnce={true}>      
                        <div className="p-4 mt-12 sm:mt-20 flex flex-col">
                            {schedule.map(day => (
                                <div key={day.day} >
                                    {/* ::Day */}
                                    <span className="flex items-center py-3 px-5 text-white rounded-md">
                                        <CalendarIcon className="mr-4 w-6 h-6" />
                                        <p className="p uppercase tracking-wide border-b-2 border-tertiary">{day.day}</p>
                                    </span>
                                    {/* ::Events */}
                                    <ul className="py-6 flex flex-col">
                                        {day.events.map(event => (
                                            <li key={event.id} className="group py-6 px-2 sm:px-5 flex items-center">
                                            {/* :::time container */}
                                            <div className="flex-shrink-0 mr-5 sm:mr-20 px-3 py-2 flex flex-col bg-white rounded-md">
                                                <span className="text-sm sm:text-base font-ralewaRegular text-tertiary">{event.time}</span>
                                            </div>
                                            {/* :::details container */}
                                            <div className="col-span-7 sm:col-span-6 px-3">
                                                <p className="p text-white uppercase">{event.name}</p>
                                                <p className="p mt-2 text-xs sm:text-sm text-white">{event.details}</p>
                                            </div>
                                            </li>
                                        ))}
                                    </ul>
                                    { day.hr && <hr className="h-px my-8 bg-gray-200 border-0"></hr>}
                                </div>
                                ))
                            }
                        </div>
                    </Fade>
                    <hr className="h-px my-8 bg-gray-200 border-0 mt-12 sm:mt-20"></hr>
                    <Fade
                        duration={3000}
                        triggerOnce={true}>
                        <div className='mt-12 sm:mt-20'>
                            <h4 className="h4 text-white text-center uppercase tracking-widest">Lokasjon og servering</h4>
                        </div>
                    </Fade>
                   
                        <section className=" text-white mt-12 sm:mt-20 ">
                            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                                <div className="flex flex-col px-6 py-8 space-y-6 rounded-md sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
                            <Fade
                            direction="left"
                            duration={3000}
                            triggerOnce={true}>
                                    {locationInfo.map((element) => (
                                        <div key={element.id} className="flex space-x-2 sm:space-x-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                            </svg>
                                            <div className="space-y-2">
                                                <p className="text-lg font-ralewaRegular">{element.headline}</p>
                                                <p className='font-ralewaRegular'>{element.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </Fade>
                                </div>
                                    <div className="lg:w-1/2 xl:w-3/5 ">
                                <Fade
                                direction="right"
                                duration={3000}
                                triggerOnce={true}>
                                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                                            <img src={villaImage} alt="" className="rounded-md shadow-lg sm:min-h-96" />
                                        </div>
                                </Fade>
                                    </div>
                            </div>
                        </section>
                   
                    <hr className="h-px my-8 bg-gray-200 border-0 mt-12 sm:mt-20"></hr>
                    <Fade
                        direction="left"
                        duration={3000}
                        triggerOnce={true}>         
                        <div className='mt-12 sm:mt-20'>
                            <h4 className="h4 text-white text-center uppercase tracking-widest">Transport</h4>
                        </div>
                    </Fade>

                    <Fade
                        direction='right'
                        duration={3000}
                        triggerOnce={true}>                     
                        <div className="p-5 mx-auto sm:p-10 md:p-16">
                            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden -md">
                                <GoogleMapRoute/>
                                {/* <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 " /> */}
                                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 w-2/3 lg:rounded-md bg-tertiary ">
                                    <div className="space-y-2">
                                    <h4 className="h4 mb-4 tracking-tight text-white">
                                    Transport søndag 26. mai
                                    </h4>
                                    </div>
                                    <div>
                                        <p className="p text-white">
                                            Vi vil tilby transport fra sentrum til Villa Lokøy på søndag 26. mai. Maxitaxi vil kjøre fra Festplassen kl. 13:00. Det vil også bli tilbudt transport tilbake til sentrum fra Villa Lokøy kl. 18:30. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>      
            </div>
        </Element>
    )

}


export default InfoSection;
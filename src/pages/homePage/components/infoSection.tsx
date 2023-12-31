import { Element } from 'react-scroll';
import { CalendarIcon } from '@heroicons/react/24/outline';
import villaImage from '@/assets/images/jpg/villa.jpg';
import GoogleMapRoute from '@/components/googleMap';
import { Fade } from "react-awesome-reveal";
import { HomeModernIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faParking, faUserTie } from '@fortawesome/free-solid-svg-icons';

const schedule = [
    {
      day:"Lørdag 25. mai",
      hr: true, 
      events: [
        { 
          id: 1, 
          name: "Vielse i Fana kirke", 
          href:"#link", 
          time: "15:30", 
          details: "Fanavegen 320",
        
        },
      ]
    },
    {
      day:"Søndag 26. mai", 
      hr: false,
      events: [
        { 
          id: 1, 
          name: "Felles transport fra Skjoldskiftet", 
          href:"#link", 
          time: "13:00", 
          details: "For de som ønsker transport setter vi opp maxitaxi fra bensinstasjonen ved Skjoldskiftet.",
         
        },
        { 
          id: 2, 
          name: "Velkomstdrink", 
          href:"#link", 
          time: "14:00", 
          details: "Velkommen!",
          member: "Alice Doe"
        },
        {
            id: 3,
            name: "Servering",
            href:"#link",
            time: "14:30",
            details: "Det blir servert mat og drikke med og uten alkohol.",
        },
        {
            id:4,
            name: "Transport tilbake til Skjoldskiftet",
            href:"#link",
            time: "19:30",
            details: "For de som ønsker transport tilbake til Skjoldskiftet.",
        
        }
      ]
    },
  ]

  const locationInfo = [
    {   id: 1,
        headline: "Sted",
        icon: <HomeModernIcon className="w-6 h-6 text-white"/> ,
        text: "Vi har leid Villa Lokøy for anlednigen. Denne ligger vest for Bergen i Lokøyvågen 68. Vi håper på at været er på vår side og at vi kan nyte dagen ute."
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faUserTie} className=' w-6 h-6 text-white' />,
        headline: "Kleskode",
        text: "Dress."
    },
    {   id: 3,
        icon: <FontAwesomeIcon icon={faParking} className=' w-6 h-6 text-white' />,
        headline: "Parkering",
        text: "Mulighet for parkering på stedet."
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faUtensils} className=' w-6 h-6 text-white' />,
        headline: "Servering",
        text: "Det vil bli servert mat og drikke gjennom dagen."
    }
    
]


const InfoSection : React.FC = () => {

    return (
        <Element name="info">
            <div className="mx-auto py-12 lg:py-36 w-full max-w-7x bg-quaternary">
                <div className="mx-auto max-w-4xl md:mb-32">

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
                                            <div className="flex-shrink-0 mr-5 sm:mr-20 px-3 py-2 flex flex-col bg-tertiary rounded-md">
                                                <span className="text-sm sm:text-base font-ralewaRegular text-white">{event.time}</span>
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
                                            <div className="flex-shrink-0">
                                               { element.icon}
                                            </div>
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

                                     
                        <div className="p-5 sm:p-10 md:p-16"> {/* Added relative positioning here */}
                            <div className="flex flex-col max-w-3xl relative ">
                                <Fade
                                    direction='right'
                                    duration={3000}
                                    triggerOnce={true}>  
                                    <GoogleMapRoute/>
                                </Fade>
                                <div className='flex justify-center'>
                              
                                        <div className="md:absolute bottom-[-11.5rem] md:w-2/3 z-10 p-6 pb-12 mt-4 rounded-md bg-tertiary"> 
                                            <Fade
                                                direction='right'
                                                duration={3000}
                                                triggerOnce={true}>  
                                                <div>
                                                    <h4 className="h4 mb-6 tracking-tight text-white rounded-md">
                                                        Transport søndag 26. mai
                                                    </h4>
                                                </div>
                                                <div>
                                                    <p className="p text-white">
                                                        Vi vil tilby transport fra Skjoldskiftet til Villa Lokøy på søndag 26. mai. 
                                                        Maxitaxi vil kjøre fra bensinstasjonen i Skjoldskiftet kl. 13:00. 
                                                        Det vil også bli tilbudt transport tilbake til sentrum fra Villa Lokøy kl. 19:30. Det er også mulig å parkere på stedet for de som ønsker å kjøre selv. 
                                                    </p>
                                                </div>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>      
            </div>
        </Element>
    )

}


export default InfoSection;
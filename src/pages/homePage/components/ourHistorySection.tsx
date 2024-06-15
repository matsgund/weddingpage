import { Element } from 'react-scroll';
import { Fade } from "react-awesome-reveal";
import useSanity from '@/hooks/useSanity';
import { PortableTextBlock } from '@portabletext/types';
import { PortableText } from '@portabletext/react';
import { Hearts } from 'react-loader-spinner';



const OurHistorySection : React.FC = () => {

    interface OurHistory {
        title: string;
        sectionText: PortableTextBlock[]; // Assuming 'blockContent' can be of any type or a specific rich text type
        picture1Url: string;
        picture2Url: string;
      }

    const query = `*[_type == "ourHistory"]{
        title,
        sectionText,
        "picture1Url": picture1.asset->url,
        "picture2Url": picture2.asset->url
      }`;
     
      const { data, error, loading } =  useSanity<OurHistory[]>(query);

        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error}</div>;
        if (!data) return <div>No data</div>;
        const { title, sectionText, picture1Url, picture2Url } = data[0];
    return (
       <Element name="our-history">
            <section className={`bg-white`}>
                    <div className='gap-16 items-center py-12 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-36 lg:px-6'>
                        <Fade 
                            direction="left" 
                            duration={3000}
                            triggerOnce={true}>    
                            <div>
                            <h2 className="mb-4 h2 text-primary flex items-center">
                                    {title}
                                    <span className='ml-4'></span>  
                                    <Hearts
                                        height="60"
                                        width="60"
                                        color="#7c9b88"
                                        ariaLabel="loading"
                                    /> 
                                </h2>
                                <div id='sanity-portable' className="p mb-4 text-gray-500">
                                    <PortableText value={sectionText} />
                                </div>
                            </div>
                        </Fade>
                        <Fade 
                            direction="right"
                            duration={3000} 
                            triggerOnce={true}>    
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <img className="mt-4 w-full lg:mt-10 rounded-md" src={picture2Url} alt="office content 2"/>
                                <img className="w-full rounded-lg" src={picture1Url} alt="office content 1"/>
                            </div> 
                        </Fade>
                    </div>  
            </section>
        </Element>
    )

}


export default OurHistorySection;
import { Element } from 'react-scroll';
import React, { useState } from 'react';
import PhotoAlbum, { LayoutType } from "react-photo-album";
import { Fade } from 'react-awesome-reveal';
import useSanity from '@/hooks/useSanity';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@/sanityClient.config';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ShareIcon } from '@heroicons/react/24/outline';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";



interface Image {
  url: string,
  metadata: {
    dimensions: {
      width: number,
      height: number
    }
  }
}

interface Gallery {
  title: string,
  subHeading: string,
  galleryUrl: string,
  images: Image[],
  display: string,
  zoom: string
}


const builder = imageUrlBuilder(sanityClient);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const getPhotosWithRatio = (gallery: Gallery) => {
  if (!gallery) return [];
  if (!gallery.images) return [];
  return gallery.images.map(image => {
    const aspectRatio = image.metadata.dimensions.width / image.metadata.dimensions.height;
    return {
      src: urlFor(image.url).width(800).url(),  
      width: aspectRatio > 1 ? aspectRatio : 1,
      height: aspectRatio > 1 ? 1 : 1 / aspectRatio,
      srcSet: [
        { 
          src: urlFor(image.url).width(1440).url(),
          width: 1440,  
          height: Math.round(1440 / aspectRatio) 
        },
      ],
    };
  });
}



const GallerySection : React.FC = () => {

  const [index, setIndex] = useState(-1);

  const query = `*[_type == "gallery"]{
    title,
    subHeading,
    galleryUrl,
    "images": images[].asset->{
      url,
      metadata { dimensions }
    },
    display,
    zoom
  }`;
 
  const { data } =  useSanity<Gallery[]>(query);
  const gallerySection = data ? data[0] : undefined;
  const photos = gallerySection ? getPhotosWithRatio(gallerySection) : [];
  const display = gallerySection?.display as LayoutType || 'columns';


  return (
    <Element name="gallery">
            <div className="bg-quaternary mx-auto py-12 px-4 lg:py-36 w-full max-w-7x">
              <Fade
                direction="left"
                duration={3000}
                triggerOnce={true}>
                  <div className="mx-auto max-w-2xl text-center">
                          <h2 className="mb-4 text-4xl tracking-tight text-white font-cmunrm">
                             {gallerySection?.title}
                          </h2>
                          <p className="p text-gray-200 font-bold uppercase">{gallerySection?.subHeading}</p>
                          <a 
                            className='p text-gray-200 font-bold underline underline-offset-8 inline-flex items-center mt-2' 
                            href={gallerySection?.galleryUrl}>
                            Hele fotoalbumet tilgjengelig her
                            <ShareIcon className="h-4 w-4 ml-2 text-gray-200" />
                            </a>
                  </div>
              </Fade>
              <Fade
                direction="up"
                duration={3000}
                triggerOnce={true}>
                  <div className='mx-auto my-12 sm:my-20 sm:w-2/3'>
                      <PhotoAlbum layout={display} photos={photos} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
                      <Lightbox 
                          slides={photos}
                          open={index >= 0}
                          index={index}
                          close={() => setIndex(-1)}
                          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                      />
                  </div>
              </Fade>
            </div>
        </Element>
  );
};

export default GallerySection;



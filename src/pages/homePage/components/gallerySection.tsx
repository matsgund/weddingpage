import { Element } from 'react-scroll';
import PhotoAlbum from "react-photo-album";
import { Fade } from 'react-awesome-reveal';
import useSanity from '@/hooks/useSanity';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@/sanityClient.config';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

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
      src: urlFor(image.url).width(800).url(),  // or whatever width you prefer
      width: aspectRatio > 1 ? aspectRatio : 1,
      height: aspectRatio > 1 ? 1 : 1 / aspectRatio,
    };
  });
}

const GallerySection : React.FC = () => {

  const query = `*[_type == "gallery"]{
    title,
    subHeading,
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
                          <p className="p text-gray-200 font-bold uppercase">{gallerySection?.subHeading.toUpperCase()}</p>
                  </div>
              </Fade>
              <Fade
                direction="right"
                duration={3000}
                triggerOnce={true}>
                  <div className='mx-auto my-12 sm:my-20 sm:w-2/3'>
                      <PhotoAlbum layout="columns" photos={photos} />
                  </div>
              </Fade>
            </div>
        </Element>
  );
};

export default GallerySection;



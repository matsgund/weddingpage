import { Element } from 'react-scroll';
import PhotoAlbum from "react-photo-album";
import photo1 from "@/assets/gallery/IMG_4747.jpeg";
import photo2 from "@/assets/gallery/IMG_4793.jpeg";
import photo3 from "@/assets/gallery/IMG_8427.jpeg";
import photo4 from "@/assets/gallery/IMG_8435.jpeg";
import photo6 from "@/assets/gallery/IMG_8586.jpeg";
import photo7 from "@/assets/gallery/IMG_8757.jpeg";
import photo8 from "@/assets/gallery/IMG_8903.jpeg";
import photo9 from "@/assets/gallery/IMG_8905.jpeg";
import { Fade } from 'react-awesome-reveal';

const photos = [
    {
      src: photo1,
      width: 3,
      height: 4
    },
    {
      src: photo2,
      width: 3,
      height: 4
    },
    {
      src: photo3,
      width: 3,
      height: 4
    },
    {
      src: photo4,
      width: 3,
      height: 4
    },
    {
      src: photo6,
      width: 3,
      height: 4
    },
    {
      src: photo7,
      width: 3,
      height: 4
    },
    {
      src: photo8,
      width: 4,
      height: 3
    },
    {
      src: photo9,
      width: 3,
      height: 4
    },
  ];


const GallerySection : React.FC = () => {

    return (
        <Element name="gallery">
            <div className="bg-quaternary mx-auto py-12 px-4 lg:py-36 w-full max-w-7x">
              <Fade
                direction="left"
                duration={3000}
                triggerOnce={true}>
                  <div className="mx-auto max-w-2xl text-center">
                          <h2 className="mb-4 text-4xl tracking-tight text-white font-cmunrm">
                              Bildegalleri
                          </h2>
                          <p className="p text-gray-200 font-bold uppercase">Her kommer bildene fra vielsen og festen</p>
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
    )

}


export default GallerySection;
import { Element } from 'react-scroll';
import PhotoAlbum from "react-photo-album";
import photo1 from "@/assets/gallery/DJI_0026.webp";
import photo2 from "@/assets/gallery/DJI_0029.webp";
import photo3 from "@/assets/gallery/DJI_0036.webp";
import photo4 from "@/assets/gallery/IMG_4747.webp";
import photo5 from "@/assets/gallery/IMG_8427.webp";
import photo6 from "@/assets/gallery/IMG_8435.webp";
import photo7 from "@/assets/gallery/IMG_8586.webp";
import photo8 from "@/assets/gallery/IMG_8757.webp";
import photo9 from "@/assets/gallery/IMG_8903.webp";
import photo10 from "@/assets/gallery/IMG_8982.webp";
import photo11 from "@/assets/gallery/IMG_8989.webp";
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
      src: photo5,
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
      width: 3,
      height: 4
    },
    {
      src: photo9,
      width: 4,
      height: 3
    },
    {
      src: photo10,
      width: 3,
      height: 4
    },
    {
      src: photo11,
      width: 4,
      height: 3
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
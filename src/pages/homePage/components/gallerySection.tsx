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
            <div className="bg-quaternary mx-auto py-12 lg:py-36 w-full max-w-7x">
                <div className="mx-auto max-w-2xl text-center">
                        <h2 className="mb-4 text-4xl tracking-tight text-white font-cmunrm">
                            Bildegalleri
                        </h2>
                        <p className="text-sm text-gray-200 font-bold uppercase tracking-widest font-ralewaRegular">Her kommer bildene fra vielsen og festen</p>
                </div>
                <div className='mx-auto my-12 sm:my-20 w-2/3'>
                    <PhotoAlbum layout="columns" photos={photos} />
                </div>
            </div>
        </Element>
    )

}


export default GallerySection;
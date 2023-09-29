import HeroSection from "./components/heroSection";
import InfoSection from "./components/infoSection";
import OurHistorySection from "./components/ourHistorySection";
import Navbar from "@/components/navbar";
import WishListSection from "./components/wishListSection";
import GallerySection from "./components/gallerySection";
import SignUpSection from "./components/signUpSection";

const HomePage: React.FC = () => {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <OurHistorySection/>
            <InfoSection/>
            <WishListSection/>
            <GallerySection/>
            <SignUpSection/>
            {/* our story */}
            {/* our story images and text */}
            {/* video av lokasjon? */}
            {/* vielse */}
            {/* location */}
             {/* transport */}
        </>
    );
    };

export default HomePage;
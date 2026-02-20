import AboutSection from "../components/AboutSection";
import Carousel from "../components/carousel";
import Navbar from "../components/partials/navbar";
import Topbar from "../components/partials/topbar";
import ServicesSection from "../components/ServicesSection";

export default function Home(){
    const homeSlides = [
  {
    image: "/uploads/thumbnail/banner-salarie-bange-bank.jpg",
    title: "Bienvenue chez Bangé",
    description: "Votre partenaire stratégique en solutions industrielles.",
    button: {
      text: "Découvrir nos services",
      link: "/services",
    },
  },
  {
    image: "/uploads/thumbnail/escompte-bancaire-png-1.png",
    title: "Innovation & Performance",
    description: "Nous accompagnons vos projets de A à Z.",
    button: {
      text: "Nous contacter",
      link: "/contact",
    },
  },
  {
    image: "/uploads/thumbnail/image-epargne-entreprise--1.jpg",
    title: "Innovation & Performance",
    description: "Nous accompagnons vos projets de A à Z.",
    button: {
      text: "Nous contacter",
      link: "/contact",
    },
  },
  
  
];
    return(
       <>
         <div className="fixed top-0 w-full z-100">
            <Topbar />
            <Navbar />
         </div>

            {/* ESPACE POUR COMPENSER LE FIXED */}
            <div className="pt-40px">
            <Carousel slides={homeSlides} />
            <ServicesSection />
            <AboutSection/>
            </div>

            <div>
                <br /><br /><br /><br /><br />
                gejijkmbr <br /><br /><br /><br />

            </div>
       </>              
    )
}
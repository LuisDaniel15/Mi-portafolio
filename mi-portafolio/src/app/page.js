import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SobreMi from "@/components/sections/SobreMi";
import Habilidades from "@/components/sections/Habilidades";
import Proyectos from "@/components/sections/Proyectos";
import Contacto from "@/components/sections/Contacto";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <Footer/>
    </main>
  );
}
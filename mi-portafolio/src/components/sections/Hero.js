'use client';
import Image from 'next/image';

import { FadeUp, FadeIn } from '@/components/ui/AnimatedSection';
const perfil = {
  imagen: "/img-profile.jpeg"
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Texto principal */}
        <div className="flex-1 text-center md:text-left">
          <FadeUp delay={0.1}>
            <p className="text-blue-500 font-medium mb-3 tracking-wide">
              Hola, soy
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              Luis Daniel <br />
              <span className="text-blue-500">Jiménez</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-2">
              Técnico en Sistemas Informáticos
            </p>
            <p className="text-base text-gray-400 dark:text-gray-500 mb-8">
              Estudiante de Ingeniería de Sistemas y Computación
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light mb-10 border-l-4 border-blue-500 pl-4">
              Convierto ideas en experiencias web reales.
            </p>
          </FadeUp>
          <FadeUp delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              <a href="#proyectos"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors text-center"
              >
                Ver proyectos
              </a>

              <a href="#contacto"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-500 font-medium rounded-lg transition-colors text-center"
              >
                Contáctame
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Avatar */}
        <FadeIn delay={0.4}>
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-black from-blue-400 to-black flex items-center justify-center text-white text-6xl font-bold shadow-xl overflow-hidden">

            <Image
              src={perfil.imagen}
              alt="Perfil"
              fill
              className="object-contain"
            />

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
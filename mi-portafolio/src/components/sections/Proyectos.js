'use client';

import { FadeUp } from '@/components/ui/AnimatedSection';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const proyectos = [
  {
    titulo: "Sistema de gestión para guarderías",
    descripcion: "Aplicación web para la administración de niños, control de asistencia y organización interna de guarderías.",
    tecnologias: ["Next.js", "FastAPI", "PostgreSQL"],
    verMas: "/proyectos/guarderia",
    codigo: "https://github.com/tuusuario/guarderia",
    imagen: null,
    emoji: "👶",
  },
  {
    titulo: "Sistema de facturación tipo SaaS",
    descripcion: "Aplicación web para la gestión de clientes, productos y generación de facturas.",
    tecnologias: ["Laravel", "MySQL", "JavaScript"],
    verMas: "/proyectos/facturacion",
    codigo: "https://github.com/tuusuario/facturacion",
    imagen: null,
    emoji: "📊",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-24 bg-gray-50 dark:bg-gray-800/50 px-6">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <div className="mb-12">
            <p className="text-blue-500 font-medium mb-2 tracking-wide">Mi trabajo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Proyectos
            </h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card CitaPro */}
          <FadeUp delay={0}>
            <CitaProCard />
          </FadeUp>

          {/* Resto de proyectos */}
          {proyectos.map((proyecto, i) => (
            <FadeUp key={proyecto.titulo} delay={(i + 1) * 0.15}>
              <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all overflow-hidden h-full">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-500/20 dark:to-blue-600/20 p-8 flex items-center justify-center text-6xl">
                  {proyecto.emoji}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                    {proyecto.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {proyecto.tecnologias.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {proyecto.verMas && (
                      <Link
                        href={proyecto.verMas}
                        className="flex-1 text-center text-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                      >
                        Ver más
                      </Link>
                    )}
                    {proyecto.codigo && (

                      <a href={proyecto.codigo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-sm px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-500 rounded-lg font-medium transition-colors"
                      >
                        Ver código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}

        </div>
      </div>
    </section>
  );
}

function CitaProCard() {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 overflow-hidden">

      {/* Imagen con overlay */}
      <div className="relative w-full h-52 overflow-hidden bg-gray-100 dark:bg-gray-900">
        <Image
          src="/medi-citas.png"
          alt="CitaPro Dashboard"
          fill
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-blue-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

          <a href="https://tu-url-render.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-lg text-sm shadow-lg hover:bg-blue-50 transition-colors"
          >
            <ExternalLink size={15} />
            Ver demo en vivo
          </a>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5">

        {/* Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-200 dark:border-green-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Sistema real • Gestión clínica
          </span>
        </div>

        {/* Título */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-500 transition-colors">
          {/* Sistema de gestión clínica */}
          CitaPro — Gestión clínica para consultorios
        </h3>

        {/* Descripción */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
          Plataforma fullstack con roles, dashboard dinámico y automatización de citas.
        </p>

        {/* Métricas */}
        <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
          <div className="text-center">
            <p className="text-base font-bold text-gray-900 dark:text-white">4</p>
            <p className="text-xs text-gray-400">Roles</p>
          </div>
          <div className="text-center border-x border-gray-200 dark:border-gray-600">
            <p className="text-base font-bold text-gray-900 dark:text-white">7+</p>
            <p className="text-xs text-gray-400">Módulos</p>
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-gray-900 dark:text-white">100%</p>
            <p className="text-xs text-gray-400">Fullstack</p>
          </div>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {["Laravel", "Next.js", "PostgreSQL", "Tailwind"].map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex gap-3 mt-auto">

          <a href="https://tu-url-render.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-sm px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            <ExternalLink size={14} />
            Ver demo
          </a>
          <Link
            href="/proyectos/citapro"
            className="flex-1 flex items-center justify-center gap-2 text-sm px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-500 rounded-lg font-medium transition-colors"
          >
            Ver más
          </Link>
        </div>

      </div>
    </div>
  );
}
'use client';

import { FadeUp } from '@/components/ui/AnimatedSection';
import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiNextdotjs, SiLaravel, SiFastapi,
  SiMysql, SiPostgresql, SiGit, SiGithub,
  SiTailwindcss
} from 'react-icons/si';

const categorias = [
  {
    nombre: "Frontend",
    habilidades: [
      { nombre: "HTML", icono: SiHtml5, color: "text-orange-500" },
      { nombre: "CSS", icono: SiCss, color: "text-blue-500" },
      { nombre: "JavaScript", icono: SiJavascript, color: "text-yellow-400" },
      { nombre: "React", icono: SiReact, color: "text-cyan-400" },
      { nombre: "Next.js", icono: SiNextdotjs, color: "text-gray-900 dark:text-white" },
      { nombre: "Tailwind CSS", icono: SiTailwindcss, color: "text-cyan-500" },
    ],
  },
  {
    nombre: "Backend",
    habilidades: [
      { nombre: "Laravel", icono: SiLaravel, color: "text-red-500" },
      { nombre: "FastAPI", icono: SiFastapi, color: "text-green-500" },
    ],
  },
  {
    nombre: "Bases de datos",
    habilidades: [
      { nombre: "MySQL", icono: SiMysql, color: "text-blue-600" },
      { nombre: "PostgreSQL", icono: SiPostgresql, color: "text-blue-400" },
    ],
  },
  {
    nombre: "Herramientas",
    habilidades: [
      { nombre: "Git", icono: SiGit, color: "text-orange-600" },
      { nombre: "GitHub", icono: SiGithub, color: "text-gray-900 dark:text-white" },
    ],
  },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-24 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <div className="mb-12">
            <p className="text-blue-500 font-medium mb-2 tracking-wide">Lo que manejo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Tecnologías y herramientas
            </h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
        </FadeUp>

        <div className="space-y-6">
          {categorias.map((cat, i) => (
            <FadeUp key={cat.nombre} delay={i * 0.1}>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                  {cat.nombre}
                </p>
                <div className="flex flex-wrap gap-3">
                  {cat.habilidades.map((skill) => {
                    const Icono = skill.icono;
                    return (
                      <div
                        key={skill.nombre}
                        className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                      >
                        <Icono className={`text-lg ${skill.color}`} />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.nombre}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
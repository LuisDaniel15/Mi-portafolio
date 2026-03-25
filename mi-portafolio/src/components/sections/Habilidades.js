'use client';

import { FadeUp } from '@/components/ui/AnimatedSection';
import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiNextdotjs, SiLaravel, SiMysql, SiGit
} from 'react-icons/si';

const habilidades = [
  { nombre: "HTML", icono: SiHtml5, nivel: 90, categoria: "Frontend", color: "text-orange-500" },
  { nombre: "CSS", icono: SiCss, nivel: 85, categoria: "Frontend", color: "text-blue-500" },
  { nombre: "JavaScript", icono: SiJavascript, nivel: 80, categoria: "Frontend", color: "text-yellow-400" },
  { nombre: "React.js", icono: SiReact, nivel: 75, categoria: "Frontend", color: "text-cyan-400" },
  { nombre: "Next.js", icono: SiNextdotjs, nivel: 70, categoria: "Frontend", color: "text-gray-900 dark:text-white" },
  { nombre: "Laravel", icono: SiLaravel, nivel: 75, categoria: "Backend", color: "text-red-500" },
  { nombre: "MySQL", icono: SiMysql, nivel: 80, categoria: "Backend", color: "text-blue-600" },
  { nombre: "Git", icono: SiGit, nivel: 80, categoria: "Herramientas", color: "text-orange-600" },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-24 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <div className="mb-12">
            <p className="text-blue-500 font-medium mb-2 tracking-wide">Lo que manejo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Habilidades
            </h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {habilidades.map((skill, i) => {
            const Icono = skill.icono;
            return (
              <FadeUp key={skill.nombre} delay={i * 0.1}>
                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <Icono className={`text-3xl ${skill.color}`} />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{skill.nombre}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{skill.categoria}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full"
                      style={{ width: `${skill.nivel}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 text-right">
                    {skill.nivel}%
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
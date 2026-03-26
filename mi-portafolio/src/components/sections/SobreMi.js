'use client';

import { FadeUp } from '@/components/ui/AnimatedSection';
import { MapPin, Monitor, GraduationCap, Briefcase } from 'lucide-react';

const datos = [
  { label: "Ubicación", value: "Barranquilla, Colombia", icono: MapPin, color: "text-blue-500" },
  { label: "Perfil", value: "Full Stack Developer", icono: Monitor, color: "text-purple-500" },
  { label: "Formación", value: "Ing. Sistemas y Computación", icono: GraduationCap, color: "text-green-500" },
  { label: "Disponibilidad", value: "Abierto a oportunidades", icono: Briefcase, color: "text-orange-500" },
];

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-24 bg-gray-50 dark:bg-gray-800/50 px-6">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <div className="mb-12">
            <p className="text-blue-500 font-medium mb-2 tracking-wide">Conóceme</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Sobre mí
            </h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeUp delay={0.2}>
            <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Soy <span className="text-gray-900 dark:text-white font-medium">Luis Daniel Jiménez</span>,
                técnico en Sistemas Informáticos y estudiante de 6to semestre de Ingeniería de
                Sistemas y Computación.
              </p>
              <p>
                Me desenvuelvo tanto en el <span className="text-blue-500 font-medium">frontend</span> como
                en el <span className="text-blue-500 font-medium">backend</span>, lo que me permite
                entender y construir proyectos web de principio a fin — desde la interfaz que
                ve el usuario hasta la lógica del servidor y la base de datos.
              </p>
              <p>
                Me apasiona escribir código limpio, seguir buenas prácticas y seguir aprendiendo
                constantemente. Estoy en búsqueda de oportunidades donde pueda aportar valor
                y seguir creciendo como profesional.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 gap-4">
            {datos.map((item, i) => {
              const Icono = item.icono;
              return (
                <FadeUp key={item.label} delay={0.2 + i * 0.1}>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                    <div className={`w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-700 flex items-center justify-center mb-3`}>
                      <Icono size={20} className={item.color} />
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.value}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
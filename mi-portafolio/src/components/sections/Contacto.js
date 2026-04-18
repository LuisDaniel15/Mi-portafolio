'use client';

import { FadeUp } from '@/components/ui/AnimatedSection';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const contactos = [
  {
    label: "Email",
    valor: "jimenezmezaluisdaniel5@gmail.com",
    href: "mailto:tuemail@gmail.com",
    icono: Mail,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    label: "LinkedIn",
    valor: "linkedin.com/in/luisdaniel5",
    href: "https://linkedin.com/in/tuusuario",
    icono: FaLinkedin,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    label: "GitHub",
    valor: "github.com/LuisDaniel15",
    href: "https://github.com/LuisDaniel15",
    icono: FaGithub,
    color: "text-gray-900 dark:text-white",
    bg: "bg-gray-100 dark:bg-gray-700",
  },
  {
    label: "WhatsApp",
    valor: "+57 3242867103",
    href: "https://wa.me/57300000000",
    icono: FaWhatsapp,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-500/10",
  },
];

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <div className="mb-12">
            <p className="text-blue-500 font-medium mb-2 tracking-wide">Hablemos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Contacto
            </h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="max-w-2xl mb-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
             ¿Trabajamos juntos? <br/>
Estoy disponible para oportunidades laborales y proyectos donde pueda aportar desarrollando sistemas web y soluciones completas.
Puedes contactarme a través de:
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactos.map((item, i) => {
            const Icono = item.icono;
            return (
              <FadeUp key={item.label} delay={0.2 + i * 0.1}>
                
                <a  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all group"
                >
                  <div className={`p-3 rounded-xl ${item.bg} mb-4`}>
                    <Icono className={`text-2xl ${item.color}`} />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors break-all">
                    {item.valor}
                  </p>
                </a>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Code } from 'lucide-react';

export const metadata = {
  title: "CitaPro – Sistema de gestión clínica",
  description: "Sistema de gestión clínica con roles, dashboard y automatización de procesos.",
};

const funcionalidades = [
  {
    icono: "👥",
    titulo: "Gestión de pacientes",
    items: ["Registro y consulta de pacientes", "Visualización de información y documentos"],
  },
  {
    icono: "📅",
    titulo: "Gestión de citas",
    items: ["Creación y administración de citas", "Estados de citas (pendiente, atendida, cancelada)"],
  },
  {
    icono: "🩺",
    titulo: "Gestión de médicos",
    items: ["Múltiples médicos con horarios independientes"],
  },
  {
    icono: "👤",
    titulo: "Portal de pacientes",
    items: ["Agendar citas", "Ver historial de citas", "Acceder a documentos médicos"],
  },
  {
    icono: "📂",
    titulo: "Gestión de documentos",
    items: ["Subida de documentos clínicos por médicos", "Acceso seguro por paciente"],
  },
  {
    icono: "📊",
    titulo: "Dashboard dinámico",
    items: ["Citas del mes, atendidas y canceladas", "Información personalizada según el rol"],
  },
  {
    icono: "🔔",
    titulo: "Automatización",
    items: ["Emails de confirmación y cancelación", "Recordatorios 24h antes de la cita"],
  },
];

const roles = [
  { icono: "🔑", nombre: "Administrador", descripcion: "Acceso total al sistema" },
  { icono: "📋", nombre: "Recepcionista", descripcion: "Gestión de citas y pacientes" },
  { icono: "🩺", nombre: "Médico / Odontólogo", descripcion: "Vista clínica y documentos" },
  { icono: "👤", nombre: "Paciente", descripcion: "Portal personal de citas" },
];

const tecnologias = [
  { area: "Frontend", stack: "Next.js + Tailwind CSS" },
  { area: "Backend", stack: "Laravel" },
  { area: "Base de datos", stack: "PostgreSQL / MySQL" },
  { area: "Autenticación", stack: "Sistema de roles y control de acceso" },
  { area: "Notificaciones", stack: "Emails automatizados" },
];

const decisiones = [
  "Implementación de control de acceso basado en roles.",
  "Separación de frontend y backend para escalabilidad.",
  "Dashboards dinámicos según el rol del usuario.",
  "Automatización de notificaciones para mejorar asistencia a citas.",
];

const credenciales = [
  { rol: "Admin", email: "admin@consultorio.com", password: "Admin1234!" },
  { rol: "Médico", email: "medico@consultorio.com", password: "Medico1234!" },
  { rol: "Paciente", email: "paciente@consultorio.com", password: "Paciente1234!" },
];

export default function CitaProPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Volver al portafolio
          </Link>
          
          <a  href="https://software-citas-medicas.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            <ExternalLink size={14} />
            Ver demo
          </a>
        </div>
      </header>

      <div className="pt-24 pb-20">

        {/* HERO */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <span className="inline-block text-xs font-medium px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full mb-6 border border-blue-100 dark:border-blue-500/20">
            Sistema real • Fullstack
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Sistema de gestión <br className="hidden md:block" />
            <span className="text-blue-500">clínica completo</span>
          </h1>
          <p className="text-xl text-gray-400 dark:text-gray-500 font-medium mb-6">
            CitaPro
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Plataforma desarrollada para optimizar la operación de consultorios médicos,
            gestionando pacientes, citas y documentos con automatización de procesos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a  href="https://software-citas-medicas.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
            >
              <ExternalLink size={16} />
              Ver demo
            </a>
            <span className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 font-medium rounded-lg cursor-default">
              <Code size={16} />
              Código bajo solicitud
            </span>
          </div>
        </section>

        {/* Imagen principal */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="relative w-full h-72 md:h-[480px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl bg-gray-50 dark:bg-gray-800">
            <Image
              src="/medi-citas.png"
              alt="Dashboard CitaPro"
              fill
              className="object-contain p-2"
            />
          </div>
        </section>

        {/* Problema + Valor */}
        <section className="max-w-5xl mx-auto px-6 mb-24 grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-500/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-500/20">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🧠 Problema</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Muchos consultorios gestionan citas manualmente, generando errores y desorganización.
              CitaPro centraliza toda la operación en una sola plataforma.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-500/10 rounded-2xl p-8 border border-green-100 dark:border-green-500/20">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">💡 Valor</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Reduce la gestión manual, mejora la organización y automatiza la comunicación con pacientes.
            </p>
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="mb-8">
            <p className="text-blue-500 font-medium mb-2 text-sm tracking-wide">Qué puede hacer</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">🚀 Funcionalidades</h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {funcionalidades.map((f) => (
              <div
                key={f.titulo}
                className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <span className="text-2xl mb-3 block">{f.icono}</span>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{f.titulo}</h3>
                <ul className="space-y-1">
                  {f.items.map((item) => (
                    <li key={item} className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Roles */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="mb-8">
            <p className="text-blue-500 font-medium mb-2 text-sm tracking-wide">Control de acceso</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">🔐 Sistema de roles</h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roles.map((rol) => (
              <div
                key={rol.nombre}
                className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <span className="text-3xl mb-2 block">{rol.icono}</span>
                <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{rol.nombre}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{rol.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mi rol */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-start md:items-center gap-4">
            <span className="text-4xl">👨‍💻</span>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Mi rol</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Desarrollo completo del sistema — arquitectura, diseño de base de datos, sistema de roles, automatización de emails y despliegue.
              </p>
            </div>
          </div>
        </section>

        {/* Tecnologías */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="mb-8">
            <p className="text-blue-500 font-medium mb-2 text-sm tracking-wide">Stack utilizado</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">🛠️ Tecnologías</h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            {tecnologias.map((t) => (
              <div
                key={t.area}
                className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <span className="text-xs text-gray-400 dark:text-gray-500 block mb-0.5">{t.area}</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{t.stack}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Credenciales */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="mb-8">
            <p className="text-blue-500 font-medium mb-2 text-sm tracking-wide">Para la demo</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">🔑 Credenciales de prueba</h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {credenciales.map((c) => (
              <div
                key={c.rol}
                className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 font-mono"
              >
                <p className="text-xs text-blue-500 font-semibold mb-3 not-italic">{c.rol}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{c.email}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{c.password}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-500/10 rounded-xl border border-yellow-200 dark:border-yellow-500/20">
            <p className="text-xs text-yellow-700 dark:text-yellow-400 leading-relaxed">
              ⚠️ El sistema de envío de correos funciona completamente en entorno local mediante workers.
              En el despliegue en Render (plan gratuito), esta funcionalidad se encuentra limitada.
            </p>
          </div>
        </section>

        {/* Decisiones técnicas */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="mb-8">
            <p className="text-blue-500 font-medium mb-2 text-sm tracking-wide">Por qué se hizo así</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">🧠 Decisiones técnicas</h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
          <div className="space-y-3">
            {decisiones.map((d, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <span className="text-blue-500 font-bold mt-0.5 shrink-0">→</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-3">¿Te interesa CitaPro?</h2>
            <p className="text-blue-100 mb-8 text-sm">
              Puedo adaptarlo a las necesidades de tu consultorio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a  href="https://tu-url-render.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-blue-500 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                Ver demo
              </a>
              <Link
                href="/#contacto"
                className="px-6 py-3 border border-white/40 text-white hover:bg-white/10 font-medium rounded-lg transition-colors"
              >
                Contactarme
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
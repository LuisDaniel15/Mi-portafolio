import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata = {
  title: "CitaPro – Sistema de gestión clínica",
  description: "Plataforma web fullstack para la gestión de consultorios médicos.",
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
  "Implementación de control de acceso basado en roles para segmentar funcionalidades según el usuario.",
  "Separación de frontend y backend para mayor escalabilidad.",
  "Uso de dashboards dinámicos según el rol del usuario.",
  "Automatización de notificaciones para mejorar la asistencia a citas.",
];

const credenciales = [
  { rol: "Admin", email: "admin@test.com", password: "123456" },
  { rol: "Médico", email: "medico@test.com", password: "123456" },
  { rol: "Paciente", email: "paciente@test.com", password: "123456" },
];

export default function CitaProPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">

      {/* Navbar simple */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Volver al portafolio
          </Link>
          
          <a href="https://tu-url-render.com"
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

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <span className="inline-block text-xs font-medium px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full mb-6">
            Producto a la venta
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            CitaPro
          </h1>
          <p className="text-xl text-blue-500 font-medium mb-6">
            Sistema de gestión clínica
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Plataforma web fullstack para la gestión de consultorios médicos, que permite administrar 
            pacientes, citas y documentos clínicos, con automatización de procesos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a  href="https://tu-url-render.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">
              Ver demo
            </a>
            <span className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 font-medium rounded-lg cursor-default">
              Código disponible bajo solicitud
            </span>
          </div>
        </section>

        {/* Imagen principal */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
            <Image
              src="/medicitas.png"
              alt="CitaPro Dashboard"
              fill
              className="object-contain bg-gray-50 dark:bg-gray-800"
            />
          </div>
        </section>

        {/* Problema que resuelve */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <div className="bg-blue-50 dark:bg-blue-500/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-500/20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🧠 Problema que resuelve
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Muchos consultorios pequeños gestionan sus citas y pacientes de forma manual o con herramientas 
              poco integradas, lo que genera desorganización, pérdida de información y errores en la atención. 
              CitaPro centraliza toda la gestión en una sola plataforma, permitiendo un mejor control de la 
              operación y mejorando la experiencia tanto del personal como de los pacientes.
            </p>
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            🚀 Funcionalidades principales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {funcionalidades.map((f) => (
              <div
                key={f.titulo}
                className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl mb-3">{f.icono}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{f.titulo}</h3>
                <ul className="space-y-1">
                  {f.items.map((item) => (
                    <li key={item} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2">
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
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            🔐 Sistema de roles
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roles.map((rol) => (
              <div
                key={rol.nombre}
                className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="text-3xl mb-2">{rol.icono}</div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{rol.nombre}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{rol.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tecnologías */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            🛠️ Tecnologías
          </h2>
          <div className="flex flex-wrap gap-3">
            {tecnologias.map((t) => (
              <div
                key={t.area}
                className="px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <span className="text-xs text-gray-400 dark:text-gray-500">{t.area}: </span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{t.stack}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Credenciales */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            🔑 Credenciales de prueba
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {credenciales.map((c) => (
              <div
                key={c.rol}
                className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 font-mono"
              >
                <p className="text-xs text-blue-500 font-semibold mb-3">{c.rol}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{c.email}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{c.password}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nota técnica */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <div className="bg-yellow-50 dark:bg-yellow-500/10 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-500/20">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              ⚠️ Nota técnica
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              El sistema de envío de correos funciona completamente en entorno local mediante workers. 
              En el despliegue en Render (plan gratuito), esta funcionalidad se encuentra limitada.
            </p>
          </div>
        </section>

        {/* Decisiones técnicas */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            🧠 Decisiones técnicas
          </h2>
          <div className="space-y-3">
            {decisiones.map((d, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <span className="text-blue-500 font-bold mt-0.5">→</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resultado */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🎯 Resultado
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              CitaPro permite digitalizar la operación de consultorios médicos, reduciendo la gestión 
              manual y mejorando la organización de citas, pacientes y documentos clínicos.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <section className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Te interesa CitaPro?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Puedo adaptarlo a las necesidades de tu consultorio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a  href="https://tu-url-render.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
            >
              Ver demo
            </a>
            <Link
              href="/#contacto"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-500 font-medium rounded-lg transition-colors"
            >
              Contactarme
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
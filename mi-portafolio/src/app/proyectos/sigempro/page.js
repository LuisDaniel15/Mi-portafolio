import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Code } from 'lucide-react';

export const metadata = {
  title: "SigemPro — Plataforma SaaS de gestión clínica",
  description: "Plataforma SaaS multi-tenancy para consultorios médicos y odontológicos.",
};

const funcionalidades = [
  {
    icono: "👥",
    titulo: "Gestión de pacientes",
    items: [
      "Registro completo con datos clínicos, documento, EPS, tipo de afiliado y contacto de emergencia",
      "Búsqueda rápida por nombre completo o documento",
      "Antecedentes médicos y odontológicos independientes por paciente",
    ],
  },
  {
    icono: "👤",
    titulo: "Portal del paciente",
    items: [
      "Acceso web seguro para consultar citas programadas",
      "Descarga de documentos clínicos",
      "Agendamiento de nuevas citas según disponibilidad",
    ],
  },
  {
    icono: "📅",
    titulo: "Agenda profesional",
    items: [
      "Visualización diaria y semanal con filtro por profesional",
      "Control de disponibilidad con horarios configurables",
      "Gestión de recesos y excepciones",
    ],
  },
  {
    icono: "🗓️",
    titulo: "Programación de citas",
    items: [
      "Creación, confirmación, reagendamiento y cancelación",
      "Verificación automática de disponibilidad en tiempo real",
      "Recordatorios por correo 24h antes de la cita",
    ],
  },
  {
    icono: "🩺",
    titulo: "Historia clínica digital",
    items: [
      "Registro completo: motivo, examen físico, signos vitales, diagnóstico CIE-10, plan y medicamentos",
      "Odontograma FDI con estado por diente, superficies, procedimiento y material",
    ],
  },
  {
    icono: "📂",
    titulo: "Documentos clínicos",
    items: [
      "Generación de historia clínica en PDF",
      "Receta médica con firma digital del profesional",
      "Almacenamiento seguro en la nube por paciente",
    ],
  },
  {
    icono: "🧾",
    titulo: "Facturación electrónica",
    items: [
      "Emisión de Factura Electrónica de Venta (FEV) avalada por la DIAN vía Factus",
      "Compatible con operación SS-SinAporte para consultorios particulares",
      "Descarga del PDF de la factura validada",
    ],
  },
  {
    icono: "💳",
    titulo: "Cartera y pagos",
    items: [
      "Gestión de pagos parciales para procedimientos de alto costo",
      "Registro de abonos con historial completo",
      "Control de saldo pendiente y estado del plan de pago",
    ],
  },
  {
    icono: "📊",
    titulo: "Dashboard administrativo",
    items: [
      "Citas del día y pacientes registrados",
      "Citas atendidas y canceladas",
      "Indicadores en tiempo real de la actividad del consultorio",
    ],
  },
];

const roles = [
  { icono: "🔑", nombre: "Administrador", descripcion: "Acceso total al sistema" },
  { icono: "📋", nombre: "Recepcionista", descripcion: "Gestión de citas y pacientes" },
  { icono: "🩺", nombre: "Médico / Odontólogo", descripcion: "Vista clínica y documentos" },
  { icono: "👤", nombre: "Paciente", descripcion: "Portal personal de citas" },
];

const paraQuien = [
  { icono: "🏥", texto: "Consultorios médicos independientes" },
  { icono: "🦷", texto: "Consultorios odontológicos" },
  { icono: "👨‍⚕️", texto: "Especialistas que atienden de forma particular" },
  { icono: "🏢", texto: "Centros de atención con uno o más profesionales" },
];

const tecnologias = [
  { area: "Frontend", stack: "React js + Tailwind CSS" },
  { area: "Backend", stack: "Laravel" },
  { area: "Base de datos", stack: "PostgreSQL" },
  { area: "Autenticación", stack: "Sistema de roles y control de acceso" },
  { area: "Notificaciones", stack: "Emails automatizados" },
  { area: "Arquitectura", stack: "Multi-tenancy" },
];

const decisiones = [
  "Arquitectura multi-tenancy para aislar los datos de cada consultorio de forma segura.",
  "Control de acceso basado en roles para segmentar funcionalidades según el usuario.",
  "Separación de frontend y backend para mayor escalabilidad.",
  "Dashboards dinámicos según el rol del usuario autenticado.",
  "Automatización de notificaciones para mejorar la asistencia a citas.",
  "Historia clínica con ordinograma FDI para soporte odontológico especializado.",
];

const credenciales = [
  { rol: "Admin", email: "admin@test.com", password: "123456" },
  { rol: "Médico", email: "medico@test.com", password: "123456" },
  { rol: "Paciente", email: "paciente@test.com", password: "123456" },
];

export default function SigemProPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">

      {/* Navbar */}
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

        {/* HERO */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <span className="inline-block text-xs font-medium px-3 py-1 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-full mb-6 border border-green-100 dark:border-green-500/20">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mr-1.5 mb-0.5"></span>
            SaaS · Multi-tenancy · Programa piloto abierto
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            SigemPro
          </h1>
          <p className="text-xl text-blue-500 font-semibold mb-6">
            Plataforma SaaS de gestión clínica
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Plataforma diseñada para ayudar a consultorios médicos y odontológicos a organizar la atención
            de sus pacientes, centralizar la información clínica y optimizar los procesos administrativos del día a día.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a href="https://tu-url-render.com"
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
              src="/sigempro.png"
              alt="SigemPro Dashboard"
              fill
              className="object-contain p-2"
            />
          </div>
        </section>

        {/* Problema */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="bg-blue-50 dark:bg-blue-500/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-500/20">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🧠 Problema que resuelve</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-4">
              Muchos consultorios todavía manejan parte de su operación mediante agendas físicas, archivos
              en papel, hojas de Excel o múltiples herramientas separadas. Esto genera:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Pérdida de tiempo buscando información",
                "Dificultad para organizar citas y horarios",
                "Historias clínicas dispersas",
                "Seguimiento limitado de pacientes",
                "Procesos administrativos lentos",
                "Falta de indicadores para tomar decisiones",
              ].map((p) => (
                <div key={p} className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-blue-500/20">
                  <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Para quién */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="mb-8">
            <p className="text-blue-500 font-medium mb-2 text-sm tracking-wide">Clientes ideales</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">🎯 ¿Para quién está diseñado?</h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {paraQuien.map((item) => (
              <div key={item.texto} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <span className="text-3xl mb-3 block">{item.icono}</span>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="mb-8">
            <p className="text-blue-500 font-medium mb-2 text-sm tracking-wide">Qué incluye</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">🚀 Funcionalidades</h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {funcionalidades.map((f) => (
              <div key={f.titulo} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <span className="text-2xl mb-3 block">{f.icono}</span>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">{f.titulo}</h3>
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
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="mb-8">
            <p className="text-blue-500 font-medium mb-2 text-sm tracking-wide">Control de acceso</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">🔐 Sistema de roles</h2>
            <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roles.map((rol) => (
              <div key={rol.nombre} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <span className="text-3xl mb-2 block">{rol.icono}</span>
                <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{rol.nombre}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{rol.descripcion}</p>
              </div>
            ))}
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
              <div key={t.area} className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
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
              <div key={c.rol} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 font-mono">
                <p className="text-xs text-blue-500 font-semibold mb-3">{c.rol}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{c.email}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{c.password}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-500/10 rounded-xl border border-yellow-200 dark:border-yellow-500/20">
            <p className="text-xs text-yellow-700 dark:text-yellow-400 leading-relaxed">
              ⚠️ El sistema de envío de correos funciona completamente en entorno local mediante workers.
              En el despliegue en la demostracion, esta funcionalidad se encuentra limitada.
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
            <h2 className="text-2xl font-bold text-white mb-3">¿Tu consultorio necesita SigemPro?</h2>
            <p className="text-blue-100 mb-8 text-sm">
              Estamos abriendo un programa piloto para consultorios que deseen modernizar su operación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a href="https://tu-url-render.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-blue-500 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                Ver demo
              </a>
              <Link href="/#contacto" className="px-6 py-3 border border-white/40 text-white hover:bg-white/10 font-medium rounded-lg transition-colors">
                Contactarme
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
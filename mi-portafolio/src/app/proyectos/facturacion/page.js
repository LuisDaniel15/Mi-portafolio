import Link from 'next/link';
import { ArrowLeft, Code } from 'lucide-react';

export const metadata = {
  title: "Sistema de facturación tipo SaaS",
  description: "Aplicación web para la gestión de clientes, productos y generación de facturas.",
};

const funcionalidades = [
  { icono: "👥", titulo: "Gestión de clientes", items: ["Registro y administración de clientes", "Historial por cliente"] },
  { icono: "📦", titulo: "Registro de productos", items: ["Catálogo de productos", "Control de precios y descripción"] },
  { icono: "🧾", titulo: "Generación de facturas", items: ["Creación de facturas por cliente", "Organización de información administrativa"] },
];

const tecnologias = [
  { area: "Frontend", stack: "HTML, CSS, JavaScript" },
  { area: "Backend", stack: "Laravel" },
  { area: "Base de datos", stack: "MySQL" },
];

const decisiones = [
  "Laravel como backend robusto con una estructura MVC clara y escalable.",
  "MySQL para una gestión eficiente de datos relacionales como clientes, productos y facturas.",
  "Frontend en HTML, CSS y JavaScript puro para mantener el proyecto liviano y accesible.",
];

export default function FacturacionPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Volver al portafolio
          </Link>
          
         <a   href="https://github.com/tuusuario/facturacion"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-4 py-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
          >
            <Code size={14} />
            Ver código
          </a>
        </div>
      </header>

      <div className="pt-24 pb-20">

        {/* HERO */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <span className="inline-block text-xs font-medium px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full mb-6 border border-blue-100 dark:border-blue-500/20">
            Proyecto real · Código público
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Sistema de facturación <br className="hidden md:block" />
            <span className="text-blue-500">tipo SaaS</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Aplicación web para la gestión de clientes, productos y generación de facturas, simulando un entorno de software como servicio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a  href="https://github.com/tuusuario/facturacion"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
            >
              <Code size={16} />
              Ver código en GitHub
            </a>
            <span className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 font-medium rounded-lg cursor-default">
              Sin demo desplegada
            </span>
          </div>
        </section>

        {/* Imagen placeholder */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
            <span className="text-8xl">📊</span>
          </div>
        </section>

        {/* Problema */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="bg-blue-50 dark:bg-blue-500/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-500/20">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🧠 Problema que resuelve</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Muchos pequeños negocios gestionan sus facturas de forma manual o con herramientas poco integradas,
              lo que dificulta el control de sus operaciones. Este sistema busca digitalizar el proceso de
              facturación en una sola plataforma.
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
              <div key={f.titulo} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
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

        {/* Mi rol */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-start md:items-center gap-4">
            <span className="text-4xl">👨‍💻</span>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Mi rol</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Desarrollo del sistema completo, incluyendo lógica de negocio, estructura de datos e interfaz de usuario.
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
              <div key={t.area} className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <span className="text-xs text-gray-400 dark:text-gray-500 block mb-0.5">{t.area}</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{t.stack}</span>
              </div>
            ))}
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

        {/* Resultado */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🎯 Resultado</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              El sistema permite digitalizar la gestión de facturación, mejorando el control de clientes
              y productos en pequeños negocios.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <section className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-3">¿Quieres ver el código?</h2>
            <p className="text-blue-100 mb-8 text-sm">El repositorio es público en GitHub.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
            <a    href="https://github.com/tuusuario/facturacion"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-blue-500 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                Ver en GitHub
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
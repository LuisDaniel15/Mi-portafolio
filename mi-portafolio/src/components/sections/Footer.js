export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Nombre */}
        <p className="text-gray-900 dark:text-white font-bold">
          Luis Daniel<span className="text-blue-500">.</span>
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-400 dark:text-gray-500">
          © {year} Luis Daniel Jiménez. Todos los derechos reservados.
        </p>

        {/* Links */}
        <div className="flex gap-5 text-sm text-gray-400 dark:text-gray-500">
          <a href="#sobre-mi" className="hover:text-blue-500 transition-colors">Sobre mí</a>
          <a href="#proyectos" className="hover:text-blue-500 transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-blue-500 transition-colors">Contacto</a>
        </div>

      </div>
    </footer>
  );
}
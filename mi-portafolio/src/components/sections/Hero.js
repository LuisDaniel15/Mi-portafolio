export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Texto principal */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-blue-500 font-medium mb-3 tracking-wide">
            Hola, soy
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Luis Daniel <br />
            <span className="text-blue-500">Jiménez</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-2">
            Técnico en Sistemas Informáticos
          </p>
          <p className="text-base text-gray-400 dark:text-gray-500 mb-8">
            Estudiante de Ingeniería de Sistemas y Computación
          </p>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light mb-10 border-l-4 border-blue-500 pl-4">
            Convierto ideas en experiencias web reales.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
             <a href="#proyectos"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors text-center"
            >
              Ver proyectos
            </a>
            
             <a href="#contacto"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-500 font-medium rounded-lg transition-colors text-center"
            >
              Contáctame
            </a>
          </div>
        </div>

        {/* Avatar placeholder */}
        <div className="flex-shrink-0">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
            LJ
          </div>
        </div>

      </div>
    </section>
  );
}
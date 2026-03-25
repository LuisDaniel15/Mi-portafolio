const proyectos = [
  {
    titulo: "Proyecto 1",
    descripcion: "Descripción breve del proyecto. Qué problema resuelve y qué tecnologías usaste.",
    tecnologias: ["React.js", "Next.js", "Tailwind"],
    demo: "#",
    codigo: "#",
    emoji: "🛒",
  },
  {
    titulo: "Proyecto 2",
    descripcion: "Descripción breve del proyecto. Qué problema resuelve y qué tecnologías usaste.",
    tecnologias: ["Laravel", "MySQL", "CSS"],
    demo: "#",
    codigo: "#",
    emoji: "📊",
  },
  {
    titulo: "Proyecto 3",
    descripcion: "Descripción breve del proyecto. Qué problema resuelve y qué tecnologías usaste.",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    demo: "#",
    codigo: "#",
    emoji: "🌐",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-24 bg-gray-50 dark:bg-gray-800/50 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="mb-12">
          <p className="text-blue-500 font-medium mb-2 tracking-wide">Mi trabajo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Proyectos
          </h2>
          <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.titulo}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all overflow-hidden group"
            >
              {/* Header de la card */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-500/20 dark:to-blue-600/20 p-8 flex items-center justify-center text-6xl">
                {proyecto.emoji}
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {proyecto.titulo}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                  {proyecto.descripcion}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex gap-3">
                  
                   <a href={proyecto.demo}
                    className="flex-1 text-center text-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Ver demo
                  </a>
                  
                   <a href={proyecto.codigo}
                    className="flex-1 text-center text-sm px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-500 rounded-lg font-medium transition-colors"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
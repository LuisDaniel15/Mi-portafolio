const habilidades = [
  { nombre: "HTML", icono: "🌐", nivel: 90, categoria: "Frontend" },
  { nombre: "CSS", icono: "🎨", nivel: 85, categoria: "Frontend" },
  { nombre: "JavaScript", icono: "⚡", nivel: 80, categoria: "Frontend" },
  { nombre: "React.js", icono: "⚛️", nivel: 75, categoria: "Frontend" },
  { nombre: "Next.js", icono: "▲", nivel: 70, categoria: "Frontend" },
  { nombre: "Laravel", icono: "🔴", nivel: 75, categoria: "Backend" },
  { nombre: "MySQL", icono: "🗄️", nivel: 80, categoria: "Backend" },
  { nombre: "Git", icono: "🔀", nivel: 80, categoria: "Herramientas" },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-24 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="mb-12">
          <p className="text-blue-500 font-medium mb-2 tracking-wide">Lo que manejo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Habilidades
          </h2>
          <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
        </div>

        {/* Grid de habilidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {habilidades.map((skill) => (
            <div
              key={skill.nombre}
              className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              {/* Icono y nombre */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{skill.icono}</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{skill.nombre}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{skill.categoria}</p>
                </div>
              </div>

              {/* Barra de nivel */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.nivel}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 text-right">
                {skill.nivel}%
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
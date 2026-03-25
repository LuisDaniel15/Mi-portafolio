const contactos = [
  {
    label: "Email",
    valor: "tuemail@gmail.com",
    href: "mailto:tuemail@gmail.com",
    emoji: "✉️",
  },
  {
    label: "LinkedIn",
    valor: "linkedin.com/in/tuusuario",
    href: "https://linkedin.com/in/tuusuario",
    emoji: "💼",
  },
  {
    label: "GitHub",
    valor: "github.com/tuusuario",
    href: "https://github.com/tuusuario",
    emoji: "🐙",
  },
  {
    label: "WhatsApp",
    valor: "+57 300 000 0000",
    href: "https://wa.me/57300000000",
    emoji: "💬",
  },
];

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="mb-12">
          <p className="text-blue-500 font-medium mb-2 tracking-wide">Hablemos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Contacto
          </h2>
          <div className="mt-3 w-12 h-1 bg-blue-500 rounded"></div>
        </div>

        {/* Texto */}
        <div className="max-w-2xl mb-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Estoy disponible para proyectos freelance, oportunidades laborales o simplemente 
            para hablar de tecnología. No dudes en escribirme, con gusto te respondo.
          </p>
        </div>

        {/* Cards de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactos.map((item) => (
            
            <a  key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all group"
            >
              <span className="text-4xl mb-3">{item.emoji}</span>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {item.label}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors break-all">
                {item.valor}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita errores de hidratación
  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Nombre */}
        <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
          Tu Nombre<span className="text-blue-500">.</span>
        </a>

        {/* Links de navegación */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <li><a href="#sobre-mi" className="hover:text-blue-500 transition-colors">Sobre mí</a></li>
          <li><a href="#habilidades" className="hover:text-blue-500 transition-colors">Habilidades</a></li>
          <li><a href="#proyectos" className="hover:text-blue-500 transition-colors">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-blue-500 transition-colors">Contacto</a></li>
        </ul>

        {/* Toggle dark/light */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        )}
      </nav>
    </header>
  );
}
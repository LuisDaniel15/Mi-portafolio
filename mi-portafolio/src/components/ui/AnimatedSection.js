'use client';

import { motion } from 'framer-motion';

export function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/nav";

export default function Contacto() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="mx-auto max-w-4xl px-6 py-20 sm:py-32">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-gold">CONTACTO</p>
          <h1 className="mt-4 font-display text-5xl text-pine">
            Hablemos de tu proyecto
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-ink/70 leading-relaxed">
            Estoy aquí para responder tus preguntas y orientarte en cada paso. Elige el canal que prefieras.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border-2 border-gold bg-white p-8 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-gold mb-4">WhatsApp</p>
            <p className="font-display text-2xl text-pine mb-4">3108791852</p>
            
              <a href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gold hover:text-pine font-bold transition-colors"
            >
              Enviar mensaje →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border-2 border-gold bg-white p-8 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-gold mb-4">Email</p>
            <p className="font-display text-2xl text-pine mb-4 break-words">administración@stellamontoya.com</p>
            
             <a href="mailto:administración@stellamontoya.com"
              className="inline-block text-gold hover:text-pine font-bold transition-colors"
            >
              Enviar correo →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg border-2 border-gold bg-white p-8 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-gold mb-4">Ubicación</p>
            <p className="font-display text-2xl text-pine mb-4">Envigado, Antioquia</p>
            <p className="text-ink/70">Valle de Aburrá · Colombia</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg bg-gold/10 p-12 text-center border border-gold"
        >
          <p className="text-lg text-ink mb-4">
            O si lo prefieres, escríbeme directamente por WhatsApp — respondo en las siguientes 24 horas.
          </p>
          
           <a href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pine px-8 py-3 rounded text-paper font-bold hover:bg-gold transition-colors"
          >
            Iniciar conversación
          </a>
        </motion.div>
      </section>
    </main>
  );
}
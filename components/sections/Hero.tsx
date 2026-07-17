"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-pine text-paper px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,166,87,0.14),transparent_60%)]"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeUp}
        className="relative w-full max-w-md sm:max-w-lg"
      >
        <Image
          src="/images/logo-blanco.png"
          alt="Stella Montoya"
          width={770}
          height={371}
          className="h-auto w-full"
          priority
        />
      </motion.div>

      <motion.p
        initial="hidden"
        animate="visible"
        custom={0.2}
        variants={fadeUp}
        className="relative mt-10 max-w-md text-center text-base leading-relaxed text-paper/75 sm:text-lg"
      >
        Estamos construyendo algo nuevo. Muy pronto, una experiencia digital a
        la altura de cada decisión inmobiliaria que acompañamos.
      </motion.p>
    </section>
  );
}
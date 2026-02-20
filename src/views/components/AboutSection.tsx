"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-start"
        >
          <img
            src="/uploads/thumbnail/bbm-telephone-184-x-362px-1.jpg"
            alt="Application mobile BANGE"
            className="w-280px md:w-360px object-contain"
          />
        </motion.div>

        {/* TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C7A43] mb-6">
            Découvrez BANGE e-Bank
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            BANGE e-Bank est notre plateforme de banque à distance
            qui vous permet de consulter vos comptes, effectuer
            des virements et accéder à nos services en toute sécurité,
            24h/24 et 7j/7.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Avantages
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-semibold text-[#0C7A43]">
                Accessibilité 24/7 :
              </span>{" "}
              Gérez vos comptes à tout moment.
            </li>

            <li>
              <span className="font-semibold text-[#0C7A43]">
                Sécurité renforcée :
              </span>{" "}
              Authentification sécurisée et notifications en temps réel.
            </li>

            <li>
              <span className="font-semibold text-[#0C7A43]">
                Virements rapides :
              </span>{" "}
              Transactions locales et internationales simplifiées.
            </li>

            <li>
              <span className="font-semibold text-[#0C7A43]">
                Interface intuitive :
              </span>{" "}
              Navigation fluide et ergonomique.
            </li>
          </ul>

          {/* BOUTONS STORES */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <img
              src="/uploads/thumbnail/logo-google-play-png.png"
              alt="Google Play"
              className="h-12 cursor-pointer hover:opacity-80 transition"
            />

            <img
              src="/images/appstore.png"
              alt="App Store"
              className="h-12 cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
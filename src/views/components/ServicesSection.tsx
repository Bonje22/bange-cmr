"use client";

import { motion } from "framer-motion";
import { Wallet, Package, CreditCard, Landmark, Repeat, Building } from "lucide-react";

const services = [
  { icon: Wallet, label: "Comptes bancaires" },
  { icon: Package, label: "Packages" },
  { icon: CreditCard, label: "Cartes bancaires" },
  { icon: Landmark, label: "Prêts-Crédits" },
  { icon: Repeat, label: "Paiements et transferts" },
  { icon: Building, label: "Services bancaires" },
];

export default function ServicesSection() {
  return (
    <section className="py-15 bg-gray-100">

      {/* TITRE */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-widest text-gray-500 text-sm mb-3">
          Services bancaires aux particuliers Bange Cameroun
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-green-700">
          Comment pouvons-nous vous aider ?
        </h2>
      </div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 px-6">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-green-600 text-green-600 group-hover:bg-green-600 group-hover:text-white transition duration-300">
                <Icon size={28} />
              </div>

              <p className="mt-4 text-gray-700 group-hover:text-green-700 font-medium transition">
                {service.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      
    </section>
  );
}
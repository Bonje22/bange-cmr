import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone,  MessageCircle, Send, Clock, Globe} from 'lucide-react';
import PageHero from '../components/partials/PageHero';

export default function ContactPage() {
  // --- ÉTAT DU FORMULAIRE ---
  const [formData, setFormData] = useState({
    civilite: 'M',
    prenom: '',
    nom: '',
    pays: 'Cameroun',
    email: '',
    telephone: '',
    isClient: 'Non',
    agence: '',
    objet: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire BANGE envoyé :", formData);
    alert("Votre message a été transmis avec succès.");
  };

  return (
    <div className="w-full bg-[#F8FAFC]">
      <PageHero 
        title="Contactez-nous"
        subtitle="LAISSEZ-NOUS UN MESSAGE"
        description="Nos conseillers BANGE Bank Cameroon sont à votre écoute pour vous apporter des solutions sur mesure et un accompagnement de proximité."
        currentPage="Contact"
        backgroundImage="/images/hero-contact.jpg"
      />

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* --- COLONNE GAUCHE : INFOS DE CONTACT (2/5) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-soft border border-gray-100 space-y-10">
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight italic">Nos coordonnées</h3>

              <div className="space-y-8">
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 bg-red-50 text-[#862333] rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:rotate-6">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">Notre siège</p>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">Boulevard de la Liberté, Akwa,<br/>Douala, Cameroun</p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-12 h-12 bg-green-50 text-[#2A8A42] rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:rotate-6">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">Téléphone</p>
                    <p className="text-sm text-gray-500 font-bold">(+237) 233 42 12 12</p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-12 h-12 bg-green-100 text-[#2A8A42] rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:rotate-6">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">WhatsApp</p>
                    <p className="text-sm text-gray-500 font-bold">(+237) 6xx xx xx xx</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-50 flex items-center gap-4 text-gray-400">
                <Clock size={18} />
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Lun - Ven : 08h00 - 17h30</p>
              </div>
            </div>
          </motion.div>

          {/* --- COLONNE DROITE : FORMULAIRE BANGE (3/5) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#2A8A42] mb-10 tracking-tight uppercase">Laissez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. CIVILITÉ */}
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Civilité <span className="text-red-500">*</span></label>
                  <div className="flex gap-6">
                    {['M', 'Mme'].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="civilite" 
                          value={opt}
                          checked={formData.civilite === opt}
                          onChange={(e) => setFormData({...formData, civilite: e.target.value})}
                          className="w-4 h-4 text-[#2A8A42] focus:ring-[#2A8A42] border-gray-300"
                        />
                        <span className="text-sm font-bold text-gray-700 group-hover:text-[#2A8A42] transition-colors">{opt} *</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 2. PRÉNOM & NOM */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Prénom <span className="text-red-500">*</span></label>
                    <input 
                      type="text" required placeholder="Votre prénom"
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#2A8A42]/20 transition-all font-medium"
                      onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Nom <span className="text-red-500">*</span></label>
                    <input 
                      type="text" required placeholder="Votre nom"
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#2A8A42]/20 transition-all font-medium"
                      onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    />
                  </div>
                </div>

                {/* 3. PAYS & EMAIL */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Pays de résidence <span className="text-red-500">*</span></label>
                    <div className="relative">
                       <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                       <input 
                        type="text" required placeholder="Ex: Cameroun"
                        className="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#2A8A42]/20 transition-all font-medium"
                        onChange={(e) => setFormData({...formData, pays: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Adresse email <span className="text-red-500">*</span></label>
                    <input 
                      type="email" required placeholder="exemple@bange.cm"
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#2A8A42]/20 transition-all font-medium"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* 4. TÉLÉPHONE & STATUT CLIENT */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Numéro de téléphone <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" required placeholder="+237 ..."
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#2A8A42]/20 transition-all font-medium"
                      onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Êtes-vous client de BANGE ? <span className="text-red-500">*</span></label>
                    <div className="flex gap-6 mt-1">
                      {['Oui', 'Non'].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="isClient" 
                            value={opt}
                            checked={formData.isClient === opt}
                            onChange={(e) => setFormData({...formData, isClient: e.target.value})}
                            className="w-4 h-4 text-[#2A8A42] border-gray-300"
                          />
                          <span className="text-sm font-bold text-gray-700">{opt} *</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5. AGENCE & OBJET */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Agence <span className="text-red-500">*</span></label>
                    <select 
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#2A8A42]/20 transition-all font-bold text-gray-700 appearance-none"
                      onChange={(e) => setFormData({...formData, agence: e.target.value})}
                    >
                      <option>Agence Akwa</option>
                      <option>Agence Hippodrome</option>
                      <option>Agence Bonamoussadi</option>
                      <option>Agence Kribi</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Objet de votre demande <span className="text-red-500">*</span></label>
                    <input 
                      type="text" required placeholder="Ex: Ouverture de compte"
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#2A8A42]/20 transition-all font-medium"
                      onChange={(e) => setFormData({...formData, objet: e.target.value})}
                    />
                  </div>
                </div>

                {/* 6. COMMENTAIRE */}
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Commentaire <span className="text-red-500">*</span></label>
                  <textarea 
                    rows={4} required
                    placeholder="Décrivez vos besoins ici"
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-3xl focus:ring-2 focus:ring-[#2A8A42]/20 transition-all font-medium resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                {/* BOUTON ENVOI */}
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="bg-[#2A8A42] text-white px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-green-100 hover:bg-[#237035] hover:-translate-y-1 transition-all flex items-center gap-3 cursor-pointer group"
                  >
                    <span>Send Message</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
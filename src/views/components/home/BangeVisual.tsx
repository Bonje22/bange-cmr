
import {  Bell, ArrowUpRight, CreditCard, PieChart } from 'lucide-react';

export const BangeAppVisual = () => {
  return (
    <div className="relative w-full max-w-[320px] aspect-9/19 bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl p-4 overflow-hidden group hover:scale-105 transition-transform duration-700">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>

      {/* Screen Content */}
      <div className="h-full bg-white rounded-4xl overflow-hidden flex flex-col font-sans">
        {/* Header App */}
        <div className="bg-[#2A8A42] p-6 pb-10 text-white relative">
          <div className="flex justify-between items-center mb-6">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center font-bold">BANGE BANK</div>
            <Bell size={18} className="opacity-80" />
          </div>
          <p className="text-xs opacity-80 uppercase tracking-widest font-bold">Solde Total</p>
          <h3 className="text-2xl font-bold">2 450 000 <span className="text-sm opacity-70">XAF</span></h3>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 p-4 -mt-6 z-10">
          <div className="flex-1 bg-white shadow-lg rounded-2xl p-3 flex flex-col items-center gap-1 border border-gray-50">
            <div className="w-10 h-10 bg-green-50 text-[#2A8A42] rounded-full flex items-center justify-center"><ArrowUpRight size={18} /></div>
            <span className="text-[10px] font-bold text-gray-500 uppercase">Envoi</span>
          </div>
          <div className="flex-1 bg-white shadow-lg rounded-2xl p-3 flex flex-col items-center gap-1 border border-gray-100">
            <div className="w-10 h-10 bg-red-50 text-[#862333] rounded-full flex items-center justify-center"><CreditCard size={18} /></div>
            <span className="text-[10px] font-bold text-gray-500 uppercase">Cartes</span>
          </div>
        </div>

        {/* Transactions list */}
        <div className="p-4 grow">
          <div className="flex justify-between items-center mb-4 border-b border-gray-50 pb-2">
            <span className="text-sm font-bold text-gray-800">Transactions</span>
            <span className="text-[10px] text-green-700 font-bold uppercase">Tout voir</span>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Supermarché Casino', price: '- 15 500', color: 'text-red-600', time: '14:20' },
              { label: 'Virement Reçu', price: '+ 500 000', color: 'text-green-600', time: 'Hier' },
              { label: 'Achat Agribanking', price: '- 45 000', color: 'text-red-600', time: '12 Juin' }
            ].map((t, i) => (
              <div key={i} className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-gray-700">{t.label}</p>
                  <p className="text-[9px] text-gray-400 font-bold tracking-tight">{t.time}</p>
                </div>
                <span className={`text-xs font-black ${t.color}`}>{t.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="bg-gray-50 p-4 flex justify-around border-t border-gray-100">
            <PieChart size={20} className="text-[#2A8A42]" />
            <div className="w-5 h-5 bg-gray-300 rounded-sm"></div>
            <div className="w-5 h-5 bg-gray-300 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};
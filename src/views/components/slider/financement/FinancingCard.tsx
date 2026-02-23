import { ChevronRight } from 'lucide-react';

interface Props {
  title: string;
  desc: string;
  onClick: () => void;
}

export const FinancingCard = ({ title, desc, onClick }: Props) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col group h-full">
    <div className="grow">
      <h4 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight group-hover:text-[#2A8A42] transition-colors">
        {title}
      </h4>
      <p className="text-sm text-gray-500 leading-relaxed font-medium">{desc}</p>
    </div>
    <button 
      onClick={onClick}
      className="mt-8 flex items-center gap-2 text-[11px] font-black text-[#2A8A42] uppercase tracking-widest cursor-pointer"
    >
      En savoir plus <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);
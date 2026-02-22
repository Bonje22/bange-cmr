// Ce composant gère l'affichage de la liste à gauche.
import { ChevronRight, type LucideIcon } from 'lucide-react';

interface NavItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

interface SideSelectorProps {
  items: NavItem[];
  activeId: string;
  onSelect: (id: string) => void;
  label: string;
}

export default function SideSelector({ items, activeId, onSelect, label }: SideSelectorProps) {
  return (
    <div className="bg-white p-3 rounded-[2.5rem] shadow-soft border border-gray-100 sticky top-32">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 py-4">
        {label}
      </p>
      <div className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon; // Extraction pour éviter l'erreur de signature JSX
          const isActive = activeId === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 group cursor-pointer ${
                isActive 
                ? "bg-[#2A8A42] text-white shadow-xl shadow-green-100" 
                : "text-gray-600 hover:bg-green-50 hover:text-[#2A8A42]"
              }`}
            >
              <Icon size={20} className={isActive ? "text-white" : "text-gray-300 group-hover:text-[#2A8A42]"} />
              <span className="font-bold text-sm tracking-tight text-left leading-tight">{item.title}</span>
              <ChevronRight size={16} className={`ml-auto transition-transform ${isActive ? "translate-x-1" : "opacity-0"}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
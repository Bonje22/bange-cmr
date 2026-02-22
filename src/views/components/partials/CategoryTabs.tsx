

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: unknown) => void;
}

export default function CategoryTabs({ categories, activeCategory, onSelect }: CategoryTabsProps) {
  return (
    <div className="flex justify-center mb-16">
      <div className="bg-white p-2 rounded-4xl shadow-sm border border-gray-100 flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-8 md:px-12 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
              activeCategory === cat 
              ? "bg-[#2A8A42] text-white shadow-xl shadow-green-100" 
              : "text-gray-400 hover:text-[#2A8A42]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
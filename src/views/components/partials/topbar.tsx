import { Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Topbar(){
    return(
        <div className="hidden lg:block bg-green-700/95 backdrop-blur-md text-white py-4 text-[13px] font-bold border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center tracking-tight">
          <div className="flex items-center gap-6">
            <a href="tel:233421212" className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <Phone size={15} /> (+237) 233 42 12 12
            </a>
            <a href="mailto:contact@bangecmr.com" className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <Mail size={15} /> contact@bangecmr.com
            </a>
          </div>
          <div className="flex items-center gap-5  tracking-widest">
            <Link to="/devenir-client"><span className="hover:text-green-200 cursor-pointer">Devenir Client ?</span></Link>
            <span className="h-3 w-px bg-white/20"></span>
            <div className="flex items-center gap-1 cursor-pointer"><Globe size={15}/> FR</div>
          </div>
        </div>
</div>
    )
}

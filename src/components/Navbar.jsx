
import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const showMenu = () => {
    setOpen(!open);
  };
  const closeMenu=()=>{
    setOpen(false);
  }
  
  return (
    
    <nav className="navbar flex text-white items-center h-16 px-12  md:px-44 shadow-black-btn md:grid md:grid-cols-2">
      <div className="left-part flex items-center">
        <h1 className="font-semibold text-2xl">Manoj Kumar</h1>
      </div>
        <div className="flex items-center">
          <button onClick={showMenu} className="md:hidden absolute right-10 transition-all">
          {!open?<AlignJustify className="size-7 transition-all" />:<X className="size-7 transition-all" />}
        </button>
        <ul className={ `${open?"block":"hidden"} bg-black text-white fixed md:static md:flex md:items-center transition ease-in-out dealy-150  top-24 w-[90%] left-[5%] md:gap-0 `}>
          <li className="text-white text-xl  px-6 py-2 hover:text-[#9F9F9F] md:hover:text-[#9F9F9F] "><a href="#hero" className="text-none">Home</a></li>
          <li className="text-white text-xl  px-6 py-2 hover:text-[#9F9F9F] md:hover:text-[#9F9F9F] "><a href="#hero" className="text-none">About</a></li>
          <li className="text-white text-xl  px-6 py-2 hover:text-[#9F9F9F] md:hover:text-[#9F9F9F] "><a href="#skills" className="text-none">Skills</a></li>
          <li className="text-white text-xl  px-6 py-2 hover:text-[#9F9F9F] md:hover:text-[#9F9F9F] "><a href="#projects" className="text-none">Projects</a></li>
          <li className="text-white text-xl  px-6 py-2 hover:text-[#9F9F9F] md:hover:text-[#9F9F9F] "><a href="#contact" className="text-none">Contact</a></li>
        </ul>
        </div>

    </nav>
  );
}

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-bold text-xl">Rishabh Mendiratta</Link>
        
        {/* Hamburger button for mobile */}
        <button   
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 sm:gap-6">
        
          <Link 
            to="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Home
          </Link>
          <Link to="#journey" 
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Journey
          </Link>
          <Link to="#journey" 
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Community Involvement
          </Link>
          <Link to="https://flashy-droplet-e82.notion.site/Resume-1f564a8c24a68085a2cde757d80b255c"
          className="text-sm font-medium transition-colors hover:text-primary">
            Resume
          </Link>
          <Button asChild size="sm">
            <Link to="#contact" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
            </Link>
          </Button>
        </nav>
        {/* Mobile Navigation */}
        <nav className={`md:hidden absolute top-16 left-0 right-0 bg-background border-b p-4 flex flex-col gap-4 ${isOpen ? 'block' : 'hidden'}`}>
        <Link 
            to="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </Link>
          <Link 
            to="#journey" 
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              setIsOpen(false);
              e.preventDefault();
              document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Journey
          </Link>
          <Link to="#journey" 
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Community Involvement
          </Link>
          <Link
            to = "https://flashy-droplet-e82.notion.site/Resume-1f564a8c24a68085a2cde757d80b255c"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
          <Button asChild size="sm" className="w-full">
            <Link to="#contact" 
            onClick={(e) => {
              setIsOpen(false);
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};
//   return (
//     <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center">
//         <Link to="/" className="font-bold text-xl">Rishabh Mendiratta</Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
//             Home
//           </Link>
//           <Link to="#journey" className="text-sm font-medium transition-colors hover:text-primary">
//             Journey
//           </Link>
//           <Button asChild size="sm">
//             <Link to="#contact">Contact</Link>
//           </Button>
//         </nav>
//       </div>
//     </header>
//   );
// };

export default Navbar;

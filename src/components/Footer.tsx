
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rishabh Mendiratta. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn
          </Link>
          <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </Link>
          <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

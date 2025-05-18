
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rishabh Mendiratta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

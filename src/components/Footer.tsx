import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-muted mt-10">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-muted-foreground text-sm text-center sm:text-left">
          © 2024 portfolio — develeopped by{" "}
          <a href="#" rel="noopener noreferrer" className="" target="_blank">
            tahinaniaina
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a href="#" className="text-muted-foreground">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="#" className="ml-3 text-muted-foreground">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="#" className="ml-3 text-muted-foreground">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="#" className="ml-3 text-muted-foreground">
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
}

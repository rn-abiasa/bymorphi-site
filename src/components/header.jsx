import logo from "../assets/bymorphi.webp";
import Button from "./ui/button";

export default function Header() {
  return (
    <header className="fixed z-100 top-0 w-full p-5 flex justify-between items-center">
      <a href="">
        <img src={logo} className="h-18" />
      </a>
      <Button>Contact Us</Button>
    </header>
  );
}

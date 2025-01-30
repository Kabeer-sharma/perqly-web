import { Button } from "@shadcn/ui";
import { Menu, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex 
justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">Perqly</h1>

      {/* Menu */}
      <div className="hidden md:flex gap-6">
        <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="/perks" className="text-gray-700 
hover:text-blue-600">Rewards</a>
        <a href="/about" className="text-gray-700 
hover:text-blue-600">About</a>
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-3">
        <Button variant="outline">Login</Button>
        <Button className="bg-blue-600 text-white">Sign Up</Button>
      </div>

      {/* Mobile Menu */}
      <Menu className="md:hidden block" size={24} />
    </nav>
  );
}

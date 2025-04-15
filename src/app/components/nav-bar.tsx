"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, PenTool, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Our Services", url: "/ourservices" },
    { name: "Pricing", url: "/pricing" },
    { name: "FAQ", url: "/faq" },
  ];

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a className="uppercase text-xl flex font-bold  text-gray-800" href="/">
          ATS Resume
          <PenTool className="-mt-3 -rotate-90 h-5 w-5 text-red-700" />
        </a>

        <div className="space-x-6 hidden md:flex">
          {links.map((link) => (
            <Link key={link.name} href={link.url}>
              <span className="text-gray-700 hover:text-red-500 cursor-pointer font-medium transition-colors">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex space-x-3">
          <Link
            href="/whyChooseUs"
            className="font-semibold py-2 px-4 border border-black rounded-full hover:bg-gray-100 transition"
          >
            Why Choose Us
          </Link>
          <Link
            href="/contactUs"
            className="font-semibold py-2 px-4 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-lg px-6 py-5 transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-6">
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4 pt-3">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-red-500 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <hr className="my-6" />

        <div className="flex flex-col gap-3">
          <Link
            href="/whyChooseUs"
            className="font-semibold py-2 px-4 border border-black rounded-full text-center hover:bg-gray-100 transition"
          >
            Why Choose Us
          </Link>
          <Link
            href="/contactUs"
            className="font-semibold py-2 px-4 bg-black text-white rounded-full text-center hover:bg-gray-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

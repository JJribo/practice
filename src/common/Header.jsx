import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={`py-px text-sky-50 font-semibold ${
        isSticky ? "sticky top-0 bg-slate-900 shadow-md" : ""
      }`}
    >
      <nav className="mt-6 mb-6 flex justify-end uppercase ">
        <Link
          className="mx-4 mr-auto ml-28 transition-colors hover:text-stone-600 transition transform hover:-translate-y-1 delay-200"
          to="/"
        >
          #J-I-JOEShot
        </Link>
        <Link
          className="mx-4 transition-colors hover:text-stone-600 transition transform hover:-translate-y-1 delay-200"
          to="/"
        >
          Home
        </Link>
        <Link
          className="mx-4 transition-colors hover:text-stone-600 transition transform hover:-translate-y-1 delay-200"
          to="/Portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="mx-4 transition-colors hover:text-stone-600 transition transform hover:-translate-y-1 delay-200"
          to="/About"
        >
          About
        </Link>
        <Link
          className="mx-4 mr-28 transition-colors hover:text-stone-600 transition transform hover:-translate-y-1 delay-200"
          to="/Education"
        >
          Education
        </Link>
      </nav>
    </main>
  );
}

export default Header;

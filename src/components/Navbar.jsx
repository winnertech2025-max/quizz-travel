import { Compass, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar({ activePage, onNavigate }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "quiz", label: "Quiz" },
    { id: "about", label: "About" }
  ];

  const handleNavigate = (page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <button className="brand" onClick={() => handleNavigate("home")} aria-label="Go to home">
        <span className="brand-mark"><Compass size={22} /></span>
        <span>
          <strong>Find Your Daejeon</strong>
          <small>Travel quiz for new arrivals</small>
        </span>
      </button>

      <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <button
            key={link.id}
            className={activePage === link.id ? "active" : ""}
            onClick={() => handleNavigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

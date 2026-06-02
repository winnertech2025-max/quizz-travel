import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Home } from "./pages/Home.jsx";
import { Quiz } from "./pages/Quiz.jsx";

export function App() {
  const [page, setPage] = useState("quiz");
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 2300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && <IntroOverlay />}
      <Navbar activePage={page} onNavigate={setPage} />
      {page === "home" && <Home onStartQuiz={() => setPage("quiz")} />}
      {page === "quiz" && <Quiz />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
    </>
  );
}

function IntroOverlay() {
  return (
    <div className="intro-overlay" aria-label="Find Your Daejeon intro">
      <div className="intro-map-lines" />
      <div className="intro-orbit">
        <span />
        <span />
        <span />
      </div>
      <div className="intro-copy">
        <p>Find Your Daejeon</p>
        <h1>Find the city that fits your mood.</h1>
      </div>
      <div className="intro-loader">
        <span />
      </div>
    </div>
  );
}

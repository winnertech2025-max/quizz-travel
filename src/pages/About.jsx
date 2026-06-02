import { Brain, CheckCircle2, Code2, Database, Globe2, MapPinned, ShieldCheck, Users } from "lucide-react";

const principles = [
  "Start with a decision, not a search bar.",
  "Keep the quiz short enough for tired new arrivals.",
  "Show map context immediately after recommendations.",
  "Use English-first copy for international students and travelers."
];

const stack = [
  { icon: Code2, title: "React + Vite", text: "Component-based frontend with fast local development and production builds." },
  { icon: Database, title: "JavaScript data files", text: "Quiz questions and Daejeon place data are separated for easier maintenance." },
  { icon: MapPinned, title: "Interactive map", text: "Leaflet powers pan, zoom, markers, popups, and location context." },
  { icon: Globe2, title: "Vercel-ready", text: "Static deployment setup supports clean SPA routing." }
];

export function About() {
  return (
    <main className="page-shell">
      <section className="page-hero about-hero">
        <p className="eyebrow">About the project</p>
        <h1>A practical city guide for people who just arrived.</h1>
        <p>
          Find Your Daejeon is a React website for a course project. It uses a quiz-based recommendation
          model to turn vague travel needs into clear places to visit around Daejeon.
        </p>
      </section>

      <section className="about-intro-grid">
        <div className="about-lead">
          <p className="eyebrow">Project purpose</p>
          <h2>Built for people who arrive first and plan later.</h2>
          <p>
            Daejeon can feel quiet, spread out, and unfamiliar when someone has just arrived.
            This website reduces that first-day friction by asking a few human questions:
            what do you want, who are you with, and how much do you want to spend?
          </p>
        </div>
        <div className="audience-card">
          <Users size={28} />
          <h3>Primary audience</h3>
          <p>
            International students, exchange visitors, and travelers who need a quick way to discover
            cafes, food, nature, nightlife, and must-visit landmarks in Daejeon.
          </p>
        </div>
      </section>

      <section className="content-grid about-checks">
        {principles.map((item) => (
          <div className="info-row" key={item}>
            <CheckCircle2 size={22} />
            <span>{item}</span>
          </div>
        ))}
      </section>

      <section className="about-section model-section">
        <div>
          <p className="eyebrow">Recommendation model</p>
          <h2>The quiz is simple on the surface, but structured underneath.</h2>
          <p>
            Each answer becomes a signal. The app scores places by category, preference, companion,
            and budget, then shows the strongest matches first. The result is easy to explain in a
            classroom presentation and easy to expand later.
          </p>
        </div>
        <div className="model-steps">
          <article>
            <span>01</span>
            <strong>Category</strong>
            <p>Cafe, Food, Nightlife, Nature, or Must-Visit Daejeon.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Mood</strong>
            <p>Study cafe, Korean food, river walk, night views, and more.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Context</strong>
            <p>Companion and budget refine the final ranking.</p>
          </article>
        </div>
      </section>

      <section className="about-section data-section">
        <div className="data-card">
          <Brain size={32} />
          <h2>Why this is more than a static list.</h2>
          <p>
            A normal travel page assumes users already know what they want. This project turns uncertainty
            into interaction, then connects recommendations with map behavior and Naver links.
          </p>
        </div>
        <div className="data-list">
          <div>
            <strong>Place data</strong>
            <span>Name, Korean name, category, tags, address, coordinates, image, and Naver URL.</span>
          </div>
          <div>
            <strong>Quiz data</strong>
            <span>Centralized question flow for categories, preferences, companions, and budgets.</span>
          </div>
          <div>
            <strong>Map data</strong>
            <span>Latitude and longitude power marker placement and distance calculations.</span>
          </div>
        </div>
      </section>

      <section className="about-section stack-section">
        <div className="section-heading-block">
          <p className="eyebrow">Technical stack</p>
          <h2>Organized like a real frontend project.</h2>
        </div>
        <div className="stack-grid">
          {stack.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section quality-section">
        <ShieldCheck size={34} />
        <div>
          <p className="eyebrow">Presentation-ready</p>
          <h2>Clear story, working product, deployable setup.</h2>
          <p>
            The site has real navigation, reusable components, structured data, interactive results,
            responsive styling, and deployment configuration. It is built to feel like a finished course
            project rather than a quick prototype.
          </p>
        </div>
      </section>
    </main>
  );
}

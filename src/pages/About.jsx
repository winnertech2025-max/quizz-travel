import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <main className="page-shell">
      <section className="page-hero about-hero">
        <p className="eyebrow">About the project</p>
        <h1>A practical city guide for people who just arrived.</h1>
        <p>
          Daejeon Discovery is a React website for a course project. It uses a quiz-based recommendation
          model to turn vague travel needs into clear places to visit around Daejeon.
        </p>
      </section>

      <section className="content-grid">
        {[
          "English-first content suitable for international visitors.",
          "Quiz data and place data are separated into clean JavaScript files.",
          "Recommendations consider category, mood, companion, and budget.",
          "The map panel supports browser location and Naver Maps links."
        ].map((item) => (
          <div className="info-row" key={item}>
            <CheckCircle2 size={22} />
            <span>{item}</span>
          </div>
        ))}
      </section>
    </main>
  );
}

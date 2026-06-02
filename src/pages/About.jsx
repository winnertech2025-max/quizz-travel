import { CheckCircle2, Compass, Database, MapPinned, ShieldCheck } from "lucide-react";

const highlights = [
  "The website starts with the quiz because new visitors often do not know what to search for yet.",
  "Each place includes a real map target, coordinates, an image, and a source link.",
  "The result page connects recommendations to an interactive map and Naver Maps.",
  "The design is written in English for international students, exchange visitors, and travelers."
];

export function About() {
  return (
    <main className="page-shell about-document-page">
      <section className="about-document">
        <div className="about-document-image">
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Expo%20Bridge%20Daejeon%20at%20night.jpg"
            alt="Expo Bridge in Daejeon at night"
          />
        </div>

        <article className="about-document-content">
          <p className="eyebrow">About the project</p>
          <h1>Find Your Daejeon helps new arrivals choose where to go first.</h1>
          <p>
            Find Your Daejeon is a React website made for a course project about Daejeon, South Korea.
            Instead of presenting a long static travel list, the website asks a short quiz and turns the
            user's answers into cafe, food, nature, nightlife, and must-visit recommendations.
          </p>

          <section>
            <h2>Project Purpose</h2>
            <p>
              The main problem is simple: people who have just arrived in a city often feel unsure about
              where to go. They may not know local districts, Korean place names, or what keywords to use
              on a map. This website reduces that friction by guiding the visitor through a friendly
              decision flow and then showing map-ready results.
            </p>
          </section>

          <section>
            <h2>How It Works</h2>
            <div className="about-document-steps">
              <div><Compass size={20} /><span>Choose a travel mood such as cafe, food, nature, nightlife, or must-visit.</span></div>
              <div><CheckCircle2 size={20} /><span>Answer preference, companion, and budget questions.</span></div>
              <div><MapPinned size={20} /><span>View matching places on an interactive map with Naver links.</span></div>
            </div>
          </section>

          <section>
            <h2>Data And Sources</h2>
            <p>
              The place data is stored in structured JavaScript files. Each recommendation includes an
              English name, Korean name, category, tags, address, coordinates, image, Naver Maps link,
              source website, short description, and detail notes. Tourism information is based on
              public sources such as Living in Daejeon, VisitKorea, KTourMap, Wikimedia Commons, Naver
              Maps, and restaurant listing sources.
            </p>
            <div className="about-source-list">
              {highlights.map((item) => (
                <span key={item}><ShieldCheck size={18} /> {item}</span>
              ))}
            </div>
          </section>

          <section>
            <h2>Technical Stack</h2>
            <div className="about-tech-row">
              <span><Database size={18} /> React + Vite</span>
              <span><MapPinned size={18} /> Leaflet map</span>
              <span><ShieldCheck size={18} /> Vercel-ready SPA</span>
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}

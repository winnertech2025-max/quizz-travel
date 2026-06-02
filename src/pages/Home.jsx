import { ArrowRight, Coffee, Map, Sparkles } from "lucide-react";

export function Home({ onStartQuiz }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-media" />
        <div className="hero-content">
          <p className="eyebrow">Daejeon, South Korea</p>
          <h1>Find your first favorite place in Daejeon.</h1>
          <p>
            Answer a short quiz and get a curated set of cafes, meals, nature spots, nightlife areas,
            and landmark recommendations with Naver Maps ready to open.
          </p>
          <button className="primary-action" onClick={onStartQuiz}>
            Start the quiz <ArrowRight size={19} />
          </button>
        </div>
      </section>

      <section className="feature-band">
        <div>
          <Coffee />
          <h2>Match your mood</h2>
          <p>Choose what you need today: study cafe, late-night food, riverside walk, night view, or city landmark.</p>
        </div>
        <div>
          <Map />
          <h2>Open in Naver</h2>
          <p>Each result includes a Naver Maps link, so you can check transport, reviews, and directions quickly.</p>
        </div>
        <div>
          <Sparkles />
          <h2>Built for arrivals</h2>
          <p>The flow is designed for students and travelers who have just reached Daejeon and need a simple plan.</p>
        </div>
      </section>

      <section className="photo-strip" aria-label="Daejeon travel photos">
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Daejeon%20Skyline.JPG" alt="Daejeon skyline" />
        <img src="https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=900&q=80" alt="Korean cafe table" />
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Expo%20Bridge%20Daejeon%20at%20night.jpg" alt="Expo Bridge in Daejeon at night" />
      </section>
    </main>
  );
}

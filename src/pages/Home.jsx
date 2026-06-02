import {
  ArrowRight,
  Camera,
  Coffee,
  Compass,
  Map,
  MapPinned,
  Moon,
  Sparkles,
  Trees,
  Utensils
} from "lucide-react";

const categories = [
  {
    icon: Coffee,
    title: "Cafes",
    text: "Study corners, cozy dates, photo-friendly interiors, and dessert stops near student areas."
  },
  {
    icon: Utensils,
    title: "Food",
    text: "Warm Korean meals, student budget picks, late-night comfort food, and group-friendly restaurants."
  },
  {
    icon: Trees,
    title: "Nature",
    text: "Hanbat Arboretum, river walks, picnic spots, and calm routes for slower days."
  },
  {
    icon: Moon,
    title: "Nightlife",
    text: "Downtown lights, casual drinks, karaoke streets, lounge areas, and night-view routes."
  }
];

const journey = [
  "Choose what kind of day you want",
  "Tell the quiz who you are going with",
  "Set your budget comfort level",
  "Open your matched route on the interactive map"
];

export function Home({ onStartQuiz }) {
  return (
    <main>
      <section className="hero home-hero-deluxe">
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
        <div className="hero-floating-panel">
          <span>Today in Daejeon</span>
          <strong>Quiz first. Map second. No overthinking.</strong>
          <div>
            <small>Cafe</small>
            <small>Food</small>
            <small>Nature</small>
            <small>Nightlife</small>
          </div>
        </div>
      </section>

      <section className="home-stats reveal-up">
        <div>
          <strong>5</strong>
          <span>travel moods</span>
        </div>
        <div>
          <strong>18+</strong>
          <span>curated places</span>
        </div>
        <div>
          <strong>4</strong>
          <span>quiz steps</span>
        </div>
        <div>
          <strong>1</strong>
          <span>interactive route map</span>
        </div>
      </section>

      <section className="home-section split-showcase">
        <div className="section-copy">
          <p className="eyebrow">How it works</p>
          <h2>A tiny quiz that turns a new city into a plan.</h2>
          <p>
            The site starts with the quiz because new arrivals usually do not know what to search for yet.
            Instead of browsing endless lists, they can answer simple questions and get places that fit
            their mood, companion, and budget.
          </p>
          <button className="primary-action compact" onClick={onStartQuiz}>
            Try the quiz flow <ArrowRight size={18} />
          </button>
        </div>
        <div className="journey-panel">
          {journey.map((item, index) => (
            <div key={item}>
              <span>{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section category-showcase">
        <div className="section-heading-block">
          <p className="eyebrow">Explore by mood</p>
          <h2>Designed around the real decisions people make after arriving.</h2>
        </div>
        <div className="category-grid">
          {categories.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="photo-strip" aria-label="Daejeon travel photos">
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Daejeon%20Skyline.JPG" alt="Daejeon skyline" />
        <img src="https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=900&q=80" alt="Korean cafe table" />
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Expo%20Bridge%20Daejeon%20at%20night.jpg" alt="Expo Bridge in Daejeon at night" />
      </section>

      <section className="home-section map-story">
        <div className="map-story-card">
          <MapPinned size={34} />
          <h2>Every recommendation is map-ready.</h2>
          <p>
            The result page places matched spots on an interactive Daejeon map and keeps Naver Maps links
            close by, so visitors can move from discovery to directions without losing context.
          </p>
        </div>
        <div className="mini-map-preview" aria-hidden="true">
          <span className="preview-pin one"><Compass size={16} /></span>
          <span className="preview-pin two"><Coffee size={16} /></span>
          <span className="preview-pin three"><Camera size={16} /></span>
          <div className="preview-route" />
        </div>
      </section>

      <section className="home-section itinerary-strip">
        <div>
          <p className="eyebrow">Sample day</p>
          <h2>One city, many first-day routes.</h2>
        </div>
        <div className="itinerary-cards">
          <article>
            <span>Morning</span>
            <strong>Cafe near campus</strong>
            <p>Start slow, charge your phone, and plan your route.</p>
          </article>
          <article>
            <span>Afternoon</span>
            <strong>Hanbat Arboretum</strong>
            <p>Walk through open gardens and get a calm city reset.</p>
          </article>
          <article>
            <span>Night</span>
            <strong>Skyroad lights</strong>
            <p>Finish downtown with food, lights, and Naver directions home.</p>
          </article>
        </div>
      </section>

      <section className="home-final-cta">
        <Sparkles size={30} />
        <h2>Ready to let Daejeon choose with you?</h2>
        <button className="primary-action" onClick={onStartQuiz}>
          Start a new recommendation <ArrowRight size={19} />
        </button>
      </section>
    </main>
  );
}

import { ArrowLeft, Bus, Clock, ExternalLink, MapPin, Route, ShieldCheck, Sparkles } from "lucide-react";
import { handlePlaceImageError } from "../utils/images.js";
import { naverSearchUrl } from "../utils/recommendations.js";

export function PlaceDetail({ place, onBack }) {
  const tips = getTips(place);

  return (
    <main className="place-detail-page">
      <button className="detail-back" onClick={onBack}>
        <ArrowLeft size={18} /> Back to recommendations
      </button>

      <section className="place-detail-hero">
        <img src={place.image} alt={place.name} onError={handlePlaceImageError} />
        <div className="place-detail-overlay">
          <p className="eyebrow">{place.koreanName}</p>
          <h1>{place.name}</h1>
          <p>{place.description}</p>
          <a className="primary-action" href={naverSearchUrl(place)} target="_blank" rel="noreferrer">
            View on Naver Maps <ExternalLink size={18} />
          </a>
        </div>
      </section>

      {place.gallery?.length > 1 && (
        <section className="detail-gallery" aria-label={`${place.name} photo gallery`}>
          {place.gallery.slice(0, 4).map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${place.name} view ${index + 1}`}
              onError={handlePlaceImageError}
            />
          ))}
        </section>
      )}

      <section className="place-detail-grid">
        <article className="detail-panel">
          <Sparkles size={28} />
          <h2>Why this place is worth visiting</h2>
          <p>{place.details?.[0] || buildOverview(place)}</p>
        </article>

        <article className="detail-panel">
          <MapPin size={28} />
          <h2>Location context</h2>
          <p>{place.roadAddress || place.address}</p>
          <div className="tag-row">
            {place.tags.slice(0, 6).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="detail-source-section">
        <article>
          <ShieldCheck size={24} />
          <div>
            <p className="eyebrow">Verified source</p>
            <h2>{place.sourceName || "Map source"}</h2>
            <p>
              This recommendation uses a real place entry, map coordinates, and venue or official tourism
              content. Open the source or Naver Maps to confirm live hours, reviews, and route changes.
            </p>
            {place.sourceUrl && (
              <a href={place.sourceUrl} target="_blank" rel="noreferrer">
                Open source <ExternalLink size={15} />
              </a>
            )}
          </div>
        </article>
      </section>

      <section className="detail-tips">
        {tips.map((tip) => (
          <article key={tip.title}>
            <span>{tip.title}</span>
            <p>{tip.text}</p>
          </article>
        ))}
      </section>

      <section className="detail-guide-section">
        <div className="detail-guide-copy">
          <p className="eyebrow">Visit guide</p>
          <h2>How to use this place in a real Daejeon plan</h2>
          <p>
            This page is written for visitors who need more than a name on a map. Use the notes below
            to understand what the place is good for, when it fits your day, and how to continue the
            route after checking live details on Naver Maps.
          </p>
        </div>
        <div className="detail-info-table">
          {(place.details || []).slice(1).map((detail, index) => (
            <div key={detail}>
              <ShieldCheck size={20} />
              <strong>Verified note {index + 1}</strong>
              <span>{detail}</span>
            </div>
          ))}
          <div>
            <Clock size={20} />
            <strong>Best time</strong>
            <span>{bestTime(place)}</span>
          </div>
          <div>
            <Bus size={20} />
            <strong>Transport note</strong>
            <span>Use Naver Maps for the latest bus/subway route and real-time transfer details.</span>
          </div>
          <div>
            <Route size={20} />
            <strong>Route idea</strong>
            <span>{routeIdea(place)}</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function buildOverview(place) {
  if (place.category === "nature") {
    return `${place.name} is a good Relax & Nature match because it gives visitors space to walk, take photos, and slow down after arriving in the city. It is best for people who want greenery, fresh air, or a calmer route instead of a busy downtown plan.`;
  }

  if (place.category === "mustVisit") {
    return `${place.name} is treated as a Must-Visit Daejeon stop because it represents the city through landmarks, culture, science, food culture, or popular visitor routes. It is a strong first-time recommendation when someone wants to understand Daejeon quickly.`;
  }

  if (place.category === "food") {
    return `${place.name} is recommended for visitors who want a clear food plan without spending too much time searching. It fits the quiz by matching craving, budget, and group context.`;
  }

  if (place.category === "nightlife") {
    return `${place.name} works well for an evening plan because it keeps the route social, walkable, and easy to check through Naver Maps before going out.`;
  }

  return `${place.name} is a cafe recommendation for visitors who need a comfortable first stop, a place to rest, or a softer plan before exploring Daejeon.`;
}

function getTips(place) {
  return [
    {
      title: "Best for",
      text: place.tags.slice(0, 3).join(", ")
    },
    {
      title: "Plan style",
      text: place.category === "nature" ? "Slow walking route, photos, and relaxed time outdoors." : "Easy city stop that can be paired with nearby food, cafes, or landmarks."
    },
    {
      title: "Next step",
      text: "Open the Naver Maps link to check live directions, opening details, recent photos, and reviews before visiting."
    }
  ];
}

function bestTime(place) {
  if (place.tags.includes("Night Views") || place.category === "nightlife") {
    return "Evening, after dinner, or when the city lights are on.";
  }

  if (place.category === "nature") {
    return "Late morning to afternoon, especially on clear weather days.";
  }

  if (place.category === "food" || place.tags.includes("Food Culture")) {
    return "Lunch, dinner, or as a flexible stop between larger attractions.";
  }

  return "Afternoon works well for first-time visitors and relaxed sightseeing.";
}

function routeIdea(place) {
  if (place.category === "nature") {
    return "Pair it with a nearby cafe or simple dinner after the walk.";
  }

  if (place.tags.includes("Science & Technology")) {
    return "Pair it with Expo Science Park, Hanbat Arboretum, or a Yuseong cafe.";
  }

  if (place.tags.includes("Food Culture")) {
    return "Pair it with Jungang-ro, Skyroad, or a downtown night walk.";
  }

  return "Check nearby cafes, food streets, and bus routes before moving to the next stop.";
}

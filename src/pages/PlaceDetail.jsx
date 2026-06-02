import { ArrowLeft, Clock, ExternalLink, MapPin, Navigation, ShieldCheck } from "lucide-react";
import { handlePlaceImageError } from "../utils/images.js";
import { naverSearchUrl } from "../utils/recommendations.js";

export function PlaceDetail({ place, onBack }) {
  return (
    <main className="place-detail-page detail-document-page">
      <button className="detail-back" onClick={onBack}>
        <ArrowLeft size={18} /> Back to recommendations
      </button>

      <article className="place-document">
        <header className="place-document-hero">
          <img src={place.image} alt={place.name} onError={handlePlaceImageError} />
          <div>
            <p className="eyebrow">{place.koreanName}</p>
            <h1>{place.name}</h1>
            <p>{place.description}</p>
          </div>
        </header>

        {place.gallery?.length > 1 && (
          <div className="place-document-gallery" aria-label={`${place.name} photo gallery`}>
            {place.gallery.slice(0, 3).map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${place.name} view ${index + 1}`}
                onError={handlePlaceImageError}
              />
            ))}
          </div>
        )}

        <div className="place-document-body">
          <section className="place-document-section">
            <h2>Overview</h2>
            <p>{buildLongIntro(place)}</p>
            {(place.details || []).map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </section>

          <section className="place-document-section">
            <h2>Visitor Information</h2>
            <div className="place-info-table">
              <div>
                <strong><MapPin size={17} /> Location</strong>
                <span>{place.roadAddress || place.address}</span>
              </div>
              <div>
                <strong><Clock size={17} /> Best time</strong>
                <span>{bestTime(place)}</span>
              </div>
              <div>
                <strong><Navigation size={17} /> Route idea</strong>
                <span>{routeIdea(place)}</span>
              </div>
              <div>
                <strong><ShieldCheck size={17} /> Source</strong>
                <span>{place.sourceName || "Verified tourism or map source"}</span>
              </div>
            </div>
          </section>

          <section className="place-document-section">
            <h2>Why it matches your quiz</h2>
            <p>{matchReason(place)}</p>
            <div className="document-tags">
              {place.tags.slice(0, 8).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </section>

          <div className="place-document-actions">
            <a className="primary-action" href={naverSearchUrl(place)} target="_blank" rel="noreferrer">
              View on Naver Maps <ExternalLink size={18} />
            </a>
            {place.sourceUrl && (
              <a className="secondary-action" href={place.sourceUrl} target="_blank" rel="noreferrer">
                Open source website <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}

function buildLongIntro(place) {
  if (place.category === "nightlife") {
    return `${place.name} is recommended as an evening-friendly stop in Daejeon. It works well for visitors who want city lights, an easy walk, photos, and a plan that can continue naturally into nearby cafes, restaurants, or entertainment areas.`;
  }

  if (place.category === "nature") {
    return `${place.name} is a calm outdoor recommendation for visitors who want greenery, fresh air, and a slower route through Daejeon. It is especially useful for people who prefer walking, photography, picnic-style time, or a break from busy downtown streets.`;
  }

  if (place.category === "mustVisit") {
    return `${place.name} belongs in the must-visit group because it helps first-time visitors understand Daejeon through landmarks, culture, science, food culture, or well-known local routes.`;
  }

  if (place.category === "food") {
    return `${place.name} is included as a practical food recommendation for visitors who need a clear place to eat without spending too much time searching through map results.`;
  }

  return `${place.name} is a cafe recommendation for visitors who need a comfortable place to rest, study, talk with friends, or begin a Daejeon route at an easy pace.`;
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
    return "Pair it with a nearby cafe or a simple dinner after the walk.";
  }

  if (place.tags.includes("Science & Technology")) {
    return "Pair it with Expo Science Park, Hanbat Arboretum, or a Yuseong cafe.";
  }

  if (place.tags.includes("Food Culture")) {
    return "Pair it with Jungang-ro, Sky Road, or a downtown night walk.";
  }

  return "Check nearby cafes, food streets, and bus routes before moving to the next stop.";
}

function matchReason(place) {
  return `The recommendation is tagged for ${place.tags.slice(0, 5).join(", ")}. These tags help the quiz match the place to a visitor's mood, companion, and budget instead of showing a generic travel list.`;
}

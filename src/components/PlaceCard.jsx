import { ExternalLink, MapPin, WalletCards } from "lucide-react";
import { distanceInKm, naverSearchUrl } from "../utils/recommendations.js";

export function PlaceCard({ place, userLocation }) {
  const distance = distanceInKm(userLocation, place);

  return (
    <article className="place-card">
      <img src={place.image} alt={place.name} />
      <div className="place-card-body">
        <div>
          <p className="eyebrow">{place.koreanName}</p>
          <h3>{place.name}</h3>
          <p>{place.description}</p>
        </div>

        <div className="place-meta">
          <span><MapPin size={16} /> {distance ? `${distance.toFixed(1)} km away` : place.address}</span>
          <span><WalletCards size={16} /> {place.tags.find((tag) => tag.includes("Budget") || tag === "Moderate" || tag === "Premium")}</span>
        </div>

        <div className="tag-row">
          {place.tags.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a className="naver-button" href={naverSearchUrl(place)} target="_blank" rel="noreferrer">
          Open in Naver Maps <ExternalLink size={16} />
        </a>
      </div>
    </article>
  );
}

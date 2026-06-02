import { ExternalLink, Info, MapPin, WalletCards } from "lucide-react";
import { handlePlaceImageError } from "../utils/images.js";
import { distanceInKm, naverSearchUrl } from "../utils/recommendations.js";

export function PlaceCard({ place, userLocation, onViewDetails }) {
  const distance = distanceInKm(userLocation, place);

  return (
    <article className="place-card">
      <img src={place.image} alt={place.name} onError={handlePlaceImageError} />
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

        <div className="place-actions">
          <button className="detail-button" onClick={() => onViewDetails?.(place)}>
            View details <Info size={16} />
          </button>
          <a className="naver-button" href={naverSearchUrl(place)} target="_blank" rel="noreferrer">
            Naver Maps <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

import { ExternalLink, Info, LocateFixed, Navigation } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { FALLBACK_PLACE_IMAGE, handlePlaceImageError } from "../utils/images.js";
import { distanceInKm, naverSearchUrl } from "../utils/recommendations.js";

export function MapPanel({ places, onViewDetails }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const placeLayerRef = useRef(null);
  const userMarkerRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState("Detect my location");

  const center = useMemo(() => {
    if (!places.length) return [36.3504, 127.3845];
    const total = places.reduce(
      (sum, place) => ({ lat: sum.lat + place.lat, lng: sum.lng + place.lng }),
      { lat: 0, lng: 0 }
    );
    return [total.lat / places.length, total.lng / places.length];
  }, [places]);

  useEffect(() => {
    setUserLocation(null);
    setLocationStatus("Detect my location");
  }, [places]);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center,
      zoom: 12,
      scrollWheelZoom: true,
      zoomControl: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [center]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (placeLayerRef.current) {
      placeLayerRef.current.remove();
    }

    const layer = L.layerGroup();
    places.forEach((place, index) => {
      const marker = L.marker([place.lat, place.lng], {
        icon: createNumberedIcon(index + 1)
      });

      marker.bindPopup(`
        <article class="leaflet-place-popup">
          <img src="${place.image}" alt="${place.name}" onerror="this.onerror=null;this.src='${FALLBACK_PLACE_IMAGE}'" />
          <strong>${place.name}</strong>
          <span>${place.koreanName}</span>
          <p>${place.description}</p>
          <small>${place.address}</small>
          <div class="leaflet-popup-actions">
            <button type="button" data-place-id="${place.id}">View details</button>
            <a href="${naverSearchUrl(place)}" target="_blank" rel="noreferrer">Naver Maps</a>
          </div>
        </article>
      `);
      marker.addTo(layer);
    });

    layer.addTo(map);
    placeLayerRef.current = layer;

    const handlePopupOpen = (event) => {
      const button = event.popup.getElement()?.querySelector("[data-place-id]");
      if (!button) return;
      button.addEventListener("click", () => {
        const selected = places.find((place) => place.id === button.dataset.placeId);
        if (selected) onViewDetails?.(selected);
      });
    };

    map.on("popupopen", handlePopupOpen);

    const bounds = L.latLngBounds(places.map((place) => [place.lat, place.lng]));
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [42, 42], maxZoom: 14 });
    }

    return () => {
      map.off("popupopen", handlePopupOpen);
    };
  }, [onViewDetails, places]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !userLocation) return;

    if (userMarkerRef.current) {
      userMarkerRef.current.remove();
    }

    userMarkerRef.current = L.marker([userLocation.lat, userLocation.lng], {
      icon: createUserIcon()
    })
      .bindPopup("Your current location")
      .addTo(map);

    const allPoints = [...places.map((place) => [place.lat, place.lng]), [userLocation.lat, userLocation.lng]];
    map.fitBounds(L.latLngBounds(allPoints), { padding: [48, 48], maxZoom: 14 });
  }, [places, userLocation]);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("Location is not supported");
      return;
    }

    setLocationStatus("Finding your position...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLocationStatus("Current location found");
      },
      () => setLocationStatus("Location permission was blocked")
    );
  };

  return (
    <section className="map-panel">
      <div className="map-header">
        <div>
          <p className="eyebrow">Interactive map with Naver links</p>
          <h2>Your recommended route area</h2>
        </div>
        <button onClick={requestLocation}>
          <LocateFixed size={18} /> {locationStatus}
        </button>
      </div>

      <div className="real-map" ref={mapRef} aria-label="Interactive Daejeon recommendation map" />

      <div className="map-list">
        {places.map((place, index) => {
          const distance = distanceInKm(userLocation, place);
          return (
            <article key={place.id} className="map-result-card">
              <img src={place.image} alt={place.name} onError={handlePlaceImageError} />
              <div>
                <span className="map-result-index">{index + 1}</span>
                <p>{place.koreanName}</p>
                <h3>{place.name}</h3>
                <small>{distance ? `${distance.toFixed(1)} km from you` : place.address}</small>
                <div className="map-result-actions">
                  <button onClick={() => onViewDetails?.(place)}>
                    <Info size={15} /> Details
                  </button>
                  <a href={naverSearchUrl(place)} target="_blank" rel="noreferrer">
                    <Navigation size={15} /> Naver <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function createNumberedIcon(number) {
  return L.divIcon({
    className: "place-marker",
    html: `<span>${number}</span>`,
    iconSize: [34, 42],
    iconAnchor: [17, 42],
    popupAnchor: [0, -38]
  });
}

function createUserIcon() {
  return L.divIcon({
    className: "user-location-marker",
    html: "<span></span>",
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -18]
  });
}

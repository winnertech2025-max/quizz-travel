export const FALLBACK_PLACE_IMAGE =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Expo%20Bridge%20Daejeon%20at%20night.jpg";

export function handlePlaceImageError(event) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = FALLBACK_PLACE_IMAGE;
}

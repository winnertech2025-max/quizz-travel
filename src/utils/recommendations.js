export function scorePlace(place, answers) {
  const selectedTags = [answers.preference, answers.companion, answers.budget].filter(Boolean);
  const categoryScore = place.category === answers.category ? 8 : place.tags.includes(answers.preference) ? 4 : 0;
  const tagScore = selectedTags.reduce((score, tag) => score + (place.tags.includes(tag) ? 3 : 0), 0);
  const mustVisitBonus = answers.category === "mustVisit" && place.category === "mustVisit" ? 2 : 0;
  return categoryScore + tagScore + mustVisitBonus;
}

export function getRecommendations(places, answers) {
  return places
    .map((place) => ({ ...place, score: scorePlace(place, answers) }))
    .filter((place) => place.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}

export function distanceInKm(origin, destination) {
  if (!origin) return null;
  const earthRadius = 6371;
  const dLat = toRadians(destination.lat - origin.lat);
  const dLng = toRadians(destination.lng - origin.lng);
  const lat1 = toRadians(origin.lat);
  const lat2 = toRadians(destination.lat);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function naverSearchUrl(place) {
  return place.naverUrl || `https://map.naver.com/p/search/${encodeURIComponent(`${place.name} Daejeon`)}`;
}

function toRadians(degree) {
  return (degree * Math.PI) / 180;
}

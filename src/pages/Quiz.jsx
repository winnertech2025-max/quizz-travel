import { ArrowLeft, Camera, Coffee, MapPinned, Moon, RotateCcw, Search, Trees, Utensils } from "lucide-react";
import { useMemo, useState } from "react";
import { MapPanel } from "../components/MapPanel.jsx";
import { PlaceCard } from "../components/PlaceCard.jsx";
import { places } from "../data/places.js";
import { quizFlow } from "../data/quiz.js";
import { getRecommendations } from "../utils/recommendations.js";

const steps = ["category", "preference", "companion", "budget"];

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const currentStep = steps[step];
  const question = getQuestion(currentStep, answers.category);
  const recommendations = useMemo(() => getRecommendations(places, answers), [answers]);
  const spotlightPlaces = useMemo(() => getSpotlightPlaces(places, answers, currentStep), [answers, currentStep]);

  const selectAnswer = (value) => {
    const nextAnswers = { ...answers, [currentStep]: value };
    if (currentStep === "category") {
      nextAnswers.preference = undefined;
      nextAnswers.companion = undefined;
      nextAnswers.budget = undefined;
    }
    setAnswers(nextAnswers);

    if (step === steps.length - 1) {
      setShowResults(true);
      return;
    }
    setStep((value) => value + 1);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
    setStep(0);
  };

  const goBack = () => {
    if (showResults) {
      setShowResults(false);
      setStep(steps.length - 1);
      return;
    }
    setStep((value) => Math.max(0, value - 1));
  };

  const detectForCards = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  };

  if (showResults) {
    return (
      <main className="quiz-page">
        <section className="results-hero reveal-up">
          <div>
            <p className="eyebrow">Your Daejeon plan</p>
            <h1>These places match your quiz answers.</h1>
            <p>
              Results are ranked by your mood, companion, and budget. Use the map panel for an overview,
              then open each place directly in Naver Maps.
            </p>
          </div>
          <div className="result-actions">
            <button onClick={goBack}><ArrowLeft size={18} /> Edit answers</button>
            <button onClick={resetQuiz}><RotateCcw size={18} /> Start over</button>
          </div>
        </section>

        <section className="answer-summary reveal-up delay-1">
          {Object.entries(answers).map(([key, value]) => (
            <span key={key}>{labelForKey(key)}: <strong>{displayAnswer(value)}</strong></span>
          ))}
        </section>

        <div className="reveal-up delay-2">
          <MapPanel places={recommendations} />
        </div>

        <div className="section-heading reveal-up delay-3">
          <h2>Recommended places</h2>
          <button onClick={detectForCards}><Search size={17} /> Show distance on cards</button>
        </div>
        <section className="places-grid">
          {recommendations.map((place, index) => (
            <div className="place-card-motion" style={{ "--delay": `${index * 80}ms` }} key={place.id}>
              <PlaceCard place={place} userLocation={userLocation} />
            </div>
          ))}
        </section>
      </main>
    );
  }

  return (
    <main className="quiz-page">
      <section className="quiz-experience">
        <div className="quiz-visual">
          <div className="quiz-visual-bg" />
          <div className="floating-ticket">
            <span>Live match</span>
            <strong>{displayAnswer(answers.category) || "Daejeon"}</strong>
          </div>
          <div className="spotlight-stack">
            {spotlightPlaces.map((place, index) => (
              <article key={place.id} style={{ "--delay": `${index * 120}ms` }}>
                <img src={place.image} alt={place.name} />
                <div>
                  <span>{place.koreanName}</span>
                  <strong>{place.name}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="quiz-shell">
          <div className="quiz-progress">
            {steps.map((item, index) => (
              <span key={item} className={index <= step ? "active" : ""} />
            ))}
          </div>

          <p className="eyebrow">Question {step + 1} of {steps.length}</p>
          <h1>{question.question}</h1>

          <div className="option-grid">
            {question.options.map((option, index) => {
              const value = typeof option === "string" ? option : option.value;
              const label = typeof option === "string" ? option : option.label;
              const Icon = iconForOption(value, label);
              return (
                <button key={value} onClick={() => selectAnswer(value)} style={{ "--delay": `${index * 70}ms` }}>
                  <Icon size={22} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          <div className="quiz-footer">
            <button onClick={goBack} disabled={step === 0}>
              <ArrowLeft size={18} /> Back
            </button>
            <button onClick={resetQuiz}>
              <RotateCcw size={18} /> Reset
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function getQuestion(step, category) {
  if (step === "category") return quizFlow.categories;
  if (step === "preference") return quizFlow.followUps[category] || quizFlow.followUps.cafe;
  if (step === "companion") {
    return {
      question: "Who are you going with?",
      options: quizFlow.companions[category] || ["Alone", "Friends", "Partner"]
    };
  }
  return {
    question: "What's your budget?",
    options: quizFlow.budgets
  };
}

function labelForKey(key) {
  return {
    category: "Category",
    preference: "Mood",
    companion: "With",
    budget: "Budget"
}[key];
}

function displayAnswer(value) {
  return {
    cafe: "Cafe",
    food: "Food",
    nightlife: "Nightlife & Entertainment",
    nature: "Relax & Nature",
    mustVisit: "Must-Visit Daejeon"
  }[value] || value;
}

function iconForOption(value, label) {
  const text = `${value} ${label}`.toLowerCase();
  if (text.includes("cafe")) return Coffee;
  if (text.includes("food") || text.includes("meal") || text.includes("korean")) return Utensils;
  if (text.includes("night") || text.includes("cocktail") || text.includes("karaoke")) return Moon;
  if (text.includes("nature") || text.includes("forest") || text.includes("picnic") || text.includes("river")) return Trees;
  if (text.includes("photo")) return Camera;
  return MapPinned;
}

function getSpotlightPlaces(allPlaces, answers, currentStep) {
  const category = answers.category || "mustVisit";
  const scored = getRecommendations(allPlaces, {
    category,
    preference: answers.preference,
    companion: answers.companion,
    budget: answers.budget
  });

  if (scored.length >= 3) return scored.slice(0, 3);

  return allPlaces
    .filter((place) => place.category === category || currentStep === "category")
    .slice(0, 3);
}

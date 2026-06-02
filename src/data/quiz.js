export const quizFlow = {
  categories: {
    question: "What are you looking for today?",
    options: [
      { value: "cafe", label: "Cafe" },
      { value: "food", label: "Food" },
      { value: "nightlife", label: "Nightlife & Entertainment" },
      { value: "nature", label: "Relax & Nature" },
      { value: "mustVisit", label: "Must-Visit Daejeon" }
    ]
  },
  followUps: {
    cafe: {
      question: "What kind of cafe do you prefer?",
      options: ["Study Cafe", "Cozy Cafe", "Photo Cafe", "Dessert Cafe"]
    },
    food: {
      question: "What are you craving?",
      options: ["Korean Food", "International Food", "Student Budget Meal", "Late-night Food"]
    },
    nightlife: {
      question: "What kind of night do you want?",
      options: ["Casual Drinks", "Cocktail & Lounge", "Karaoke Night", "Night Walk & City Lights"]
    },
    nature: {
      question: "What kind of experience do you want?",
      options: ["River Walk", "Forest Escape", "Picnic Spot", "Photography Spot"]
    },
    mustVisit: {
      question: "What interests you most?",
      options: ["Food Culture", "City Landmarks", "Science & Technology", "Night Views"]
    }
  },
  companions: {
    cafe: ["Alone", "Friends", "Partner"],
    food: ["Alone", "Friends", "Family"],
    nightlife: ["Alone", "Friends", "Partner"],
    nature: ["Alone", "Friends", "Partner", "Family"],
    mustVisit: ["Alone", "Friends", "Family"]
  },
  budgets: ["Budget-friendly", "Moderate", "Premium"]
};

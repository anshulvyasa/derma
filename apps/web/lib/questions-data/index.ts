export interface QuestionType {
    QuestionStatement: string;
    options: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
}

export const HairConditionQuestions: QuestionType[] = [
    {
        QuestionStatement: "How long have you been experiencing hairfall?",
        options: {
            1: "<6 months",
            2: "6 months-1 year",
            3: "1-5 years",
            4: ">5 years",
        },
    },
    {
        QuestionStatement: "How much hair fall do you experience per day?",
        options: {
            1: "Minimal (Up to 20 strands)",
            2: "Moderate (40-100 strands)",
            3: "Significant (100-200 strands)",
            4: "Severe (More than 200 strands)",
        },
    },
    {
        QuestionStatement: "Has your hair volume reduced?",
        options: {
            1: "Not much",
            2: "Reduced but no thinning",
            3: "Reduced with overall thinning",
            4: "Reduced with frontal/sideways thinning",
        },
    },
    {
        QuestionStatement: "How does your hair feel on touch?",
        options: {
            1: "Dry",
            2: "Frizzy",
            3: "Sometimes soft/ sometimes rough",
            4: "Breaks easily",
        },
    },
    {
        QuestionStatement: "Have you taken any hair treatments in last 1 year?",
        options: {
            1: "Smoothening/straightening",
            2: "Hair colour",
            3: "Chemical hair repair treatment",
            4: "None",
        },
    },
    {
        QuestionStatement: "Are you experiencing dandruff currently?",
        options: {
            1: "Not at all",
            2: "Not on wash day, but on day 2-3",
            3: "Dandruff appears on wash day itself",
            4: "Persistent scaly patches on scalp",
        },
    },
    {
        QuestionStatement: "Do you experience itching in scalp?",
        options: {
            1: "Yes, often",
            2: "Sometimes",
            3: "Not at all",
            4: "Yes, severe and constant",
        },
    },
    {
        QuestionStatement: "Does hairloss run in your family?",
        options: {
            1: "Yes, my mother’s side",
            2: "Yes, my father’s side",
            3: "Yes, both on my mother and father’s side",
            4: "Not genetic",
        },
    },
];

export const InternalHealthQuestions: QuestionType[] = [
  {
    QuestionStatement: "How are your iron levels?",
    options: {
      1: "Normal",
      2: "Low (Anemic)",
      3: "High",
      4: "I don't know / Haven't been tested",
    },
  },
  {
    QuestionStatement: "Have you noticed any of these hormonal issues? (Female only)",
    options: {
      1: "Increase in facial hair",
      2: "Irregular periods",
      3: "Acne along jawline or chin",
      4: "None of the above",
    },
  },
  {
    QuestionStatement: "Do you relate to any of the following events? (Female only)",
    options: {
      1: "Planning to get pregnant",
      2: "Currently pregnant or recently post-pregnancy",
      3: "Haven't had a period for over 1 year",
      4: "None of the above",
    },
  },
  {
    QuestionStatement: "Have you experienced any of the following recent changes?",
    options: {
      1: "Change in living area or city",
      2: "Change in water supply",
      3: "Significant weight gain or loss",
      4: "No recent changes",
    },
  },
  {
    QuestionStatement: "Have you undergone hospitalization or surgery in the last 1 year?",
    options: {
      1: "Yes, major surgery",
      2: "Yes, hospitalization due to illness",
      3: "No, but I had a severe illness (like Dengue/COVID)",
      4: "No, none of the above",
    },
  },
  {
    QuestionStatement: "How is your digestive health?",
    options: {
      1: "Normal and regular",
      2: "Often constipated or bloated",
      3: "Frequent acidity or heartburn",
      4: "Frequent loose motions",
    },
  },
  {
    QuestionStatement: "How is your sleep quality?",
    options: {
      1: "Normal (6-8 hours of uninterrupted sleep)",
      2: "Disturbed (Wake up frequently)",
      3: "Difficulty falling asleep",
      4: "Inadequate (Less than 5 hours a night)",
    },
  },
  {
    QuestionStatement: "How are your stress levels?",
    options: {
      1: "No major stress",
      2: "Mild (1-2 times a week, but manageable)",
      3: "Moderate (3-5 times a week, affects mood)",
      4: "Severe (Almost every day, affects focus)",
    },
  },
  {
    QuestionStatement: "How are your energy levels during the day?",
    options: {
      1: "Consistently energetic",
      2: "Energetic during the day, but low by evening",
      3: "Occasional episodes of low energy",
      4: "Always tired and feeling low",
    },
  },
  {
    QuestionStatement: "Are you currently taking any hair supplements?",
    options: {
      1: "Yes, currently taking them",
      2: "Used to take them, but stopped",
      3: "Planning to start taking them soon",
      4: "No, I have never taken any",
    },
  },
  {
    QuestionStatement: "How are your daily food habits?",
    options: {
      1: "Mostly healthy home-cooked meals",
      2: "Mostly home-cooked, but I often skip meals",
      3: "Outside food 1-2 times a week",
      4: "Frequent outside or junk food",
    },
  },
];


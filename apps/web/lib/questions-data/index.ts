export interface OptionType {
    text: string;
    imageUrl?: string;
}

export interface QuestionType {
    QuestionStatement: string;
    options: Record<string, OptionType>;
}

export const hairConditionQuestions: QuestionType[] = [
    {
        QuestionStatement: "How long have you been experiencing hairfall?",
        options: {
            "1": { text: "<6 months" },
            "2": { text: "6 months-1 year" },
            "3": { text: "1-5 years" },
            "4": { text: ">5 years" },
        },
    },
    {
        QuestionStatement: "How much hair fall do you experience per day?",
        options: {
            "1": { text: "Minimal (Up to 20 strands)" },
            "2": { text: "Moderate (40-100 strands)" },
            "3": { text: "Significant (100-200 strands)" },
            "4": { text: "Severe (More than 200 strands)" },
        },
    },
    {
        QuestionStatement: "Has your hair volume reduced?",
        options: {
            "1": { text: "Not much" },
            "2": { text: "Reduced but no thinning" },
            "3": { text: "Reduced with overall thinning" },
            "4": { text: "Reduced with frontal/sideways thinning" },
        },
    },
    {
        QuestionStatement: "How does your hair feel on touch?",
        options: {
            "1": { text: "Dry" },
            "2": { text: "Frizzy" },
            "3": { text: "Sometimes soft/ sometimes rough" },
            "4": { text: "Breaks easily" },
        },
    },
    {
        QuestionStatement: "Have you taken any hair treatments in last 1 year?",
        options: {
            "1": { text: "Smoothening/straightening" },
            "2": { text: "Hair colour" },
            "3": { text: "Chemical hair repair treatment" },
            "4": { text: "None" },
        },
    },
    {
        QuestionStatement: "Are you experiencing dandruff currently?",
        options: {
            "1": { text: "Not at all" },
            "2": { text: "Not on wash day, but on day 2-3" },
            "3": { text: "Dandruff appears on wash day itself" },
            "4": { text: "Persistent scaly patches on scalp" },
        },
    },
    {
        QuestionStatement: "Do you experience itching in scalp?",
        options: {
            "1": { text: "Yes, often" },
            "2": { text: "Sometimes" },
            "3": { text: "Not at all" },
            "4": { text: "Yes, severe and constant" },
        },
    },
    {
        QuestionStatement: "Does hairloss run in your family?",
        options: {
            "1": { text: "Yes, my mother’s side" },
            "2": { text: "Yes, my father’s side" },
            "3": { text: "Yes, both on my mother and father’s side" },
            "4": { text: "Not genetic" },
        },
    },
];

export const hairConditionQuestionsLength =
    hairConditionQuestions.length - 1;



export const internalHealthQuestions: QuestionType[] = [
    {
        QuestionStatement: "How are your iron levels?",
        options: {
            "1": { text: "Normal" },
            "2": { text: "Low (Anemic)" },
            "3": { text: "High" },
            "4": { text: "I don't know / Haven't been tested" },
        },
    },
    {
        QuestionStatement:
            "Have you noticed any of these hormonal issues? (Female only)",
        options: {
            "1": { text: "Increase in facial hair" },
            "2": { text: "Irregular periods" },
            "3": { text: "Acne along jawline or chin" },
            "4": { text: "None of the above" },
        },
    },
    {
        QuestionStatement:
            "Do you relate to any of the following events? (Female only)",
        options: {
            "1": { text: "Planning to get pregnant" },
            "2": { text: "Currently pregnant or recently post-pregnancy" },
            "3": { text: "Haven't had a period for over 1 year" },
            "4": { text: "None of the above" },
        },
    },
    {
        QuestionStatement:
            "Have you experienced any of the following recent changes?",
        options: {
            "1": { text: "Change in living area or city" },
            "2": { text: "Change in water supply" },
            "3": { text: "Significant weight gain or loss" },
            "4": { text: "No recent changes" },
        },
    },
    {
        QuestionStatement:
            "Have you undergone hospitalization or surgery in the last 1 year?",
        options: {
            "1": { text: "Yes, major surgery" },
            "2": { text: "Yes, hospitalization due to illness" },
            "3": { text: "No, but I had a severe illness (like Dengue/COVID)" },
            "4": { text: "No, none of the above" },
        },
    },
    {
        QuestionStatement: "How is your digestive health?",
        options: {
            "1": { text: "Normal and regular" },
            "2": { text: "Often constipated or bloated" },
            "3": { text: "Frequent acidity or heartburn" },
            "4": { text: "Frequent loose motions" },
        },
    },
    {
        QuestionStatement: "How is your sleep quality?",
        options: {
            "1": { text: "Normal (6-8 hours)" },
            "2": { text: "Disturbed" },
            "3": { text: "Difficulty falling asleep" },
            "4": { text: "Less than 5 hours" },
        },
    },
    {
        QuestionStatement: "How are your stress levels?",
        options: {
            "1": { text: "No major stress" },
            "2": { text: "Mild" },
            "3": { text: "Moderate" },
            "4": { text: "Severe" },
        },
    },
    {
        QuestionStatement: "How are your energy levels during the day?",
        options: {
            "1": { text: "Energetic" },
            "2": { text: "Low by evening" },
            "3": { text: "Sometimes low" },
            "4": { text: "Always tired" },
        },
    },
    {
        QuestionStatement: "Are you currently taking any hair supplements?",
        options: {
            "1": { text: "Yes" },
            "2": { text: "Used to" },
            "3": { text: "Planning" },
            "4": { text: "Never" },
        },
    },
    {
        QuestionStatement: "How are your daily food habits?",
        options: {
            "1": { text: "Healthy" },
            "2": { text: "Skip meals" },
            "3": { text: "Outside sometimes" },
            "4": { text: "Junk often" },
        },
    },
];

export const internalHealthQuestionsLength =
    internalHealthQuestions.length - 1;


export const scalpAnalysisQuestion: QuestionType[] = [
    {
        QuestionStatement: "On Which Stage You are On?",
        options: {
            "1": { text: "Baseline: Full Hair", imageUrl: "/hairfall-stage-1.png" },
            "2": { text: "Minor Recession (V-Shape)", imageUrl: "/hairfall-stage-2.png" },
            "3": { text: "Defined M-Shape (Frontal only)", imageUrl: "/hairfall-stage-3.png" },
            "4": { text: "M-Shape + Vertex Start", imageUrl: "/hairfall-stage-4.png" },
            "5": { text: "Narrow Bridge (Advanced Vertex involvement)", imageUrl: "/hairfall-stage-5.png" },
            "6": { text: "Horseshoe Pattern (Merged)", imageUrl: "/hairfall-stage-6.png" }
        }
    }
]

export const scalpAnalysisQuestionLength = scalpAnalysisQuestion.length - 1;

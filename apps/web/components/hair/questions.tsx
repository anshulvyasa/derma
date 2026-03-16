import { useMajorIndex } from "@/lib/redux/selectorAndDispatcher/useMajorIndex"
import { useQuestions } from "@/lib/redux/selectorAndDispatcher/useQuestions";
import { Question } from "./question";
import { hairConditionQuestions, internalHealthQuestions, scalpAnalysisQuestion } from "@/lib/questions-data";
import { useMemo } from "react";

export const Questions = () => {
    const { majorIndex } = useMajorIndex();
    const { questionSelector } = useQuestions();

    const question = useMemo(() => {
        let question;

        if (majorIndex.majorIndex === 1) {
            question = hairConditionQuestions[questionSelector.questionIndex];
        }
        else if (majorIndex.majorIndex === 2) {
            question = internalHealthQuestions[questionSelector.questionIndex];
        }
        else{
            question= scalpAnalysisQuestion[questionSelector.questionIndex];
        }

        return question;
    }, [majorIndex, questionSelector]);

    if (!question) return <div>There is Some Error in The System, We Are Working on It</div>

    return <Question QuestionStatement={question.QuestionStatement} options={question.options} />
}
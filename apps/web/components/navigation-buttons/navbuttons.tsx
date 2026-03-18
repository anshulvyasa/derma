import React from "react"
import { Button } from "../ui/button"
import { toast } from 'sonner';
import { useMajorIndex } from "@/lib/redux/selectorAndDispatcher/useMajorIndex";
import { usePersonalInfo } from "@/lib/redux/selectorAndDispatcher/usePersonalInfo";
import { personalInfoSchema } from '@repo/zod/personal-info';
import { useQuestions } from "@/lib/redux/selectorAndDispatcher/useQuestions";
import { hairConditionQuestionsLength, internalHealthQuestionsLength, scalpAnalysisQuestionLength } from "@/lib/questions-data";
import { useRouter } from "next/navigation";


export const NavigationButton = () => {
    const { majorIndex, updateMajorIndex } = useMajorIndex();
    const { personalInfo } = usePersonalInfo();
    const { questionSelector, updateQuestionIndex } = useQuestions();
    const router = useRouter();

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();

        // Handling The Personal Info Part
        if (majorIndex.majorIndex === 0) {
            const parsedPersonalInfo = personalInfoSchema.safeParse(personalInfo);


            if (!parsedPersonalInfo.success) {
                // 1. Access the array using .issues instead of .errors
                const firstIssue = parsedPersonalInfo.error.issues[0]?.path[0];
                const feild = firstIssue as string;

                const message = `${feild.toUpperCase()} Feild is Invalid`;
                toast.error(message, {
                    position: "top-center",
                });
                return;
            }

            updateMajorIndex(1);
        }
        else {
            const key = `${majorIndex.majorIndex}.${questionSelector.questionIndex}`

            if (!questionSelector.selectedOptions[key]) {
                toast.error("Please Select a Option to Continue", {
                    position: "top-center"
                });
                return;
            }

            if (majorIndex.majorIndex === 1 && questionSelector.questionIndex === hairConditionQuestionsLength) {
                updateMajorIndex(2);
                updateQuestionIndex(0);
                return;
            }
            if (majorIndex.majorIndex === 2 && questionSelector.questionIndex === internalHealthQuestionsLength) {
                updateMajorIndex(3);
                updateQuestionIndex(0);
                return;
            }
            if (majorIndex.majorIndex === 3 && questionSelector.questionIndex === scalpAnalysisQuestionLength) {
                router.push('/hair-test/result');
                return;
            }

            updateQuestionIndex(questionSelector.questionIndex + 1);
        }

    }

    const handlePrevious = (e: React.MouseEvent) => {
        e.preventDefault();

        if (majorIndex.majorIndex === 0) {
            router.back();
            return;
        }

        if (questionSelector.questionIndex > 0) {
            updateQuestionIndex(questionSelector.questionIndex - 1);
            return;
        }

        const prevMajorIndex = majorIndex.majorIndex - 1;

        let lastQuestionIndex = 0;

        if (prevMajorIndex === 1) {
            lastQuestionIndex = hairConditionQuestionsLength;
        } else if (prevMajorIndex === 2) {
            lastQuestionIndex = internalHealthQuestionsLength;
        }

        updateMajorIndex(prevMajorIndex);
        updateQuestionIndex(lastQuestionIndex);
    };

    return <div className="flex justify-center gap-8 mt-10! [&_button]:px-6! [&_button]:py-5! [&_button]:bg-[#25544C]
                           [&_button]:hover:bg-[#2F6A60] [&_button]:cursor-pointer [&_button]:text-[17px]">
        <Button size="lg" onClick={handlePrevious}>
            Previous
        </Button>
        <Button size="lg" onClick={handleNext} >
            Next
        </Button>
    </div>
}


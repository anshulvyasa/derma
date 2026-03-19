import { useMajorIndex } from "@/lib/redux/selectorAndDispatcher/useMajorIndex"
import { NavigationButton } from "../navigation-buttons/navbuttons"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { useQuestions } from "@/lib/redux/selectorAndDispatcher/useQuestions"
import { QuestionType } from "@/lib/questions-data"
import { useMemo } from "react"
import Image from "next/image"

export const Question = ({ QuestionStatement, options }: QuestionType) => {
    const { majorIndex } = useMajorIndex();
    const { questionSelector, updateSelectedOption } = useQuestions();

    const key = useMemo(() => {
        const key = `${majorIndex.majorIndex}.${questionSelector.questionIndex}`;
        return key;
    }, [majorIndex.majorIndex, questionSelector.questionIndex])

    const handleRadioOnChange = (value: string) => {
        updateSelectedOption(key, value);
    }

    const hasImages = useMemo(() => {
        return Object.values(options).some((opt) => opt.imageUrl !== undefined);
    }, [options]);

    return (
        <div className="mt-15! font-sans text-[#25544C]">
            <h2 className={`text-3xl font-bold mb-4! font-(family-name:--font-roboto) ${hasImages ? 'italic text-2xl mb-8!' : ''}`}>
                {QuestionStatement}
            </h2>
            
            <RadioGroup
                key={key}
                className={`
                    [&_label]:text-[17px] font-(family-name:--font-roboto) [&_button]:border-[#25544C] [&_button[data-state=checked]]:bg-[#25544C]
                    ${hasImages ? "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4" : "flex flex-col gap-3"}
                `}
                onValueChange={handleRadioOnChange}
                value={questionSelector.selectedOptions[key]}
            >
                {Object.keys(options).map((index) => {
                    const option = options[index];
                    const hasImage = !!option?.imageUrl;

                    return (
                        <div
                            key={index}
                            className={`flex items-center ${hasImage ? 'justify-between' : 'justify-start'} gap-3 cursor-pointer bg-[#A6D1CA4F] px-5! py-3! rounded-sm`}
                            onClick={() => handleRadioOnChange(index)}
                        >
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value={index} id={index} />
                                <Label
                                    htmlFor={index}
                                    className="cursor-pointer"
                                >
                                    {option?.text}
                                </Label>
                            </div>

                          
                            {hasImage && (
                                <Image 
                                    src={option.imageUrl??""} 
                                    alt={option.text??""} 
                                    className="h-21 w-auto object-contain mix-blend-multiply" 
                                    height={100}
                                    width={100}
                                />
                            )}
                        </div>
                    )
                })}
            </RadioGroup>
            
            <div className="mt-8 mb-15!">
                <NavigationButton />
            </div>
        </div>
    )
}
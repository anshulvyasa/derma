import React from "react"
import { Button } from "../ui/button"
import { toast } from 'sonner';
import { useMajorIndex } from "@/lib/redux/selectorAndDispatcher/useMajorIndex";
import { usePersonalInfo } from "@/lib/redux/selectorAndDispatcher/usePersonalInfo";
import { personalInfoSchema } from '@repo/zod/personal-info';


export const NavigationButton = () => {
    const { majorIndex } = useMajorIndex();
    const { personalInfo } = usePersonalInfo();

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

            
        }

    }


    return <div className="flex justify-center gap-8 mt-10! [&_button]:px-6! [&_button]:py-5! [&_button]:bg-[#25544C]
                           [&_button]:hover:bg-[#2F6A60] [&_button]:cursor-pointer [&_button]:text-[17px]">
        <Button size="lg">
            Previous
        </Button>
        <Button size="lg" onClick={handleNext}>
            Next
        </Button>
    </div>
}


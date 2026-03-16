"use client";

import { CurrentHairSection } from "@/components/hair/hair-current-section";
import { PersonalInfoForm } from "@/components/hair/personal-form";
import { Questions } from "@/components/hair/questions";
import { readMajorIndex, readPersonalInfo, readQuestions } from "@/lib/redux/middlewareAndReaders";
import { useMajorIndex } from "@/lib/redux/selectorAndDispatcher/useMajorIndex";
import { usePersonalInfo } from "@/lib/redux/selectorAndDispatcher/usePersonalInfo";
import { useQuestions } from "@/lib/redux/selectorAndDispatcher/useQuestions";
import { useEffect, useState } from "react";

const HairTreatement = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const { majorIndex, initializeMajorIndex } = useMajorIndex();
    const { initializePersonalInfo } = usePersonalInfo();
    const { initializeQuestions, questionSelector } = useQuestions();


    useEffect(() => {
        const info = readPersonalInfo();
        if (info) initializePersonalInfo(info);

        const majorIndex = readMajorIndex();
        if (majorIndex) initializeMajorIndex(majorIndex);

        const questions = readQuestions();
        if (questions) initializeQuestions(questions);

        setLoading(false);
    }, [])


    if (loading) return <div>Loading...</div>

    return (
        <main className="px-30! overflow-hidden">
            <h1 className="text-[#25544C] font-serif text-[44px] mt-20! font-semibold ">Let us know more about you.</h1>

            <CurrentHairSection />
            <div className="flex justify-center">
                {majorIndex.majorIndex == 0 && <PersonalInfoForm />}
                {majorIndex.majorIndex != 0 && <Questions />}
               
            </div>
        </main>
    )
}

export default HairTreatement;
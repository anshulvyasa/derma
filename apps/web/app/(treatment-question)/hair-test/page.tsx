"use client";

import { CurrentHairSection } from "@/components/hair/hair-current-section";
import { PersonalInfoForm } from "@/components/hair/personal-form";
import { Question } from "@/components/hair/question";
import { readPersonalInfo } from "@/lib/redux/middlewareAndReaders";
import { useMajorIndex } from "@/lib/redux/selectorAndDispatcher/useMajorIndex";
import { usePersonalInfo } from "@/lib/redux/selectorAndDispatcher/usePersonalInfo";
import { useEffect, useState } from "react";

const HairTreatement = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const { majorIndex } = useMajorIndex();
    const { initializePersonalInfo } = usePersonalInfo();


    useEffect(() => {
        const info = readPersonalInfo();
        initializePersonalInfo(info);

        setLoading(false);
    }, [])

   if(loading) return <div>Loading...</div>

    return (
        <main className="px-30! ">
            <h1 className="text-[#25544C] font-serif text-[44px] mt-20! font-semibold ">Let us know more about you.</h1>

            <CurrentHairSection />
            <div className="flex justify-center">
                {majorIndex.majorIndex == 0 && <PersonalInfoForm />}
                {majorIndex.majorIndex != 0 && <Question />}
            </div>
        </main>
    )
}

export default HairTreatement;
"use client";

import { CurrentHairSection } from "@/components/hair/hair-current-section";
import { PersonalInfoForm } from "@/components/hair/personal-form";
import { Questions } from "@/components/hair/questions";
import { useMajorIndex } from "@/lib/redux/selectorAndDispatcher/useMajorIndex";

const HairTreatement = () => {
    const { majorIndex} = useMajorIndex();

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
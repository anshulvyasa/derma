"use client";

import { useEffect, useState } from "react";
import { readMajorIndex, readPersonalInfo, readQuestions } from "@/lib/redux/middlewareAndReaders";
import { useQuestions } from "@/lib/redux/selectorAndDispatcher/useQuestions";
import { usePersonalInfo } from "@/lib/redux/selectorAndDispatcher/usePersonalInfo";
import { useMajorIndex } from "@/lib/redux/selectorAndDispatcher/useMajorIndex";

export default function HairTreatmentLayout({ children }: { children: React.ReactNode }) {
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

    return (<main>{children}</main>);
}
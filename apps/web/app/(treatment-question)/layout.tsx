import React from "react";
import StoreProvider from "../../providers/storeprovider";

export default function TreatmentLayout({ children }: { children: React.ReactNode }) {
    return <StoreProvider>{children}</StoreProvider>
}
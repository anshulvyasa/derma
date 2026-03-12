import StoreProvider from "../../providers/storeprovider";
import { Toaster } from "@/components/ui/sonner";

export default function TreatmentLayout({ children }: { children: React.ReactNode }) {
    return <StoreProvider>
        <main>{children}</main>
        <Toaster />
    </StoreProvider>
}
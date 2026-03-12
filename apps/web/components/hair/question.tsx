import { NavigationButton } from "../navigation-buttons/navbuttons"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

export const Question = () => {
    return <div className="mt-15! font-sans text-[#25544C]">
        <h2 className="text-3xl font-bold mb-4!">Do you have a family history of hair loss ?</h2>
        <RadioGroup className="[&_label]:text-[17px] [&_div]:bg-[#A6D1CA4F] [&_div]:px-5! [&_div]:py-3! [&_div]:rounded-sm [&_button]:border-[#25544C] [&_button[data-state=checked]]:bg-[#25544C]">
            <div className="flex items-center gap-3">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1" className="">Mother or any from mother&apos; s side of the family</Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Mother or any from mother&apos;s side of the family</Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem value="compact2" id="r3" />
                <Label htmlFor="r3">Mother or any from mother&apos;s side of the family</Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem value="compact3" id="r4" />
                <Label htmlFor="r4">Mother or any from mother&apos;s side of the family</Label>
            </div>
        </RadioGroup>
        <NavigationButton />
    </div>

}
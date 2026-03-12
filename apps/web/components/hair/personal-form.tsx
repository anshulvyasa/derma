import React from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { User, Phone, Calendar, Users } from "lucide-react"
import { NavigationButton } from "../navigation-buttons/navbuttons"
import { usePersonalInfo } from "@/lib/redux/selectorAndDispatcher/usePersonalInfo"
import { Gender } from "@/lib/redux/features/personalInfo"

export const PersonalInfoForm = () => {

    const { updateName, updateAge, updatePhone, updateGender, personalInfo } = usePersonalInfo();


    const inputStyles = "w-full pl-12! py-6! bg-custom-2 border-transparent shadow-none transition-colors outline-none focus:outline-none focus-visible:outline-none focus:ring-1! focus-visible:ring-1 focus:ring-[#4F8F87] focus-visible:ring-[#4F8F87] focus:border-[#4F8F87] focus-visible:border-[#4F8F87] focus:ring-offset-0 focus-visible:ring-offset-0 autofill:transition-colors autofill:duration-[5000s] autofill:ease-in-out"


    return (
        <React.Fragment>
            <form className="py-2!">
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-10! md:mt-20 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-2">

                    {/* Name */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name" className="text-custom-1 font-bold text-lg md:text-[22px]">Hi there, can we get your name?</Label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
                            <Input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                className={inputStyles}
                                required
                                value={personalInfo.name}
                                onChange={(e) => updateName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="phone" className="text-custom-1 font-bold text-lg md:text-[22px]">Phone Number</Label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="Your phone number"
                                className={`${inputStyles} [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield]`}
                                required
                                value={personalInfo.phone}
                                onChange={(e) => updatePhone(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Age */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="age" className="text-custom-1 font-bold text-lg md:text-[22px]">Age</Label>
                        <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
                            <Input
                                id="age"
                                type="number"
                                placeholder="20"
                                className={`${inputStyles} [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield]`}
                                required
                                value={personalInfo.age ?? ""}
                                onChange={(e) => {
                                    const value = e.target.value;

                                    if (value.trim() === "") {
                                        updateAge(undefined);
                                        return;
                                    }
                                    updateAge(Number(value));
                                }}
                            />
                        </div>
                    </div>

                    {/* Gender Select */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="gender" className="text-custom-1 font-bold text-lg md:text-[22px]">Gender</Label>
                        <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none z-10" />
                            <Select
                                value={personalInfo.gender}
                                onValueChange={(value) => {
                                    updateGender(value as Gender);
                                }}>
                                <SelectTrigger
                                    className={`w-full pl-12! py-6! bg-custom-2 border-transparent shadow-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-[#4F8F87] focus-visible:ring-1 focus-visible:ring-[#4F8F87] data-[state=open]:border-[#4F8F87] data-[state=open]:ring-1 data-[state=open]:ring-[#4F8F87]`}
                                >
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent
                                    position="popper"
                                    side="bottom"
                                    sideOffset={4}
                                    className="w-[var(--radix-select-trigger-width)] relative"
                                >
                                    <SelectGroup className="px-1! py-1!">
                                        <SelectItem value="MALE">Male</SelectItem>
                                        <SelectItem value="FEMALE">Female</SelectItem>
                                        <SelectItem value="OTHERS">Others</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                </div>

                <NavigationButton />
            </form>

        </React.Fragment>
    )
}
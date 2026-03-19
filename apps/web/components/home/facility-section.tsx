import { ChevronRight } from "lucide-react";
import Image from "next/image";

const features = [
  "State-of-the-art facility and technology",
  "Trusted by thousands of satisfied patients",
  "Dedicated to excellence in skin and hair care",
]; 
const stats = [
    { value: "96%", label: "Patient Satisfaction rate",images:"/icons/circles.png",size:60 },
    { value: "5+", label: "Years of experience" ,images:"/icons/medal.png",size:60},
    { value: "500+", label: "Successful treatments",images:"/icons/circles.png",size:60 },
    { value: "10+", label: "State-of-the-art facilities" ,images:"/icons/diamond.png",size:45},
  ];



export default function FacilitySection() {
  return (
    <section className="w-full py-7! items-center">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-30! lg:py-6!">
        <div className="flex flex-col lg:flex-row items-center  gap-10 lg:gap-60">
          <div className="relative w-full max-w-sm lg:max-w-md mx-auto lg:mx-0">
            <div className="w-[80%] rounded-2xl">
              <Image
                src="/images/sub1.png"
                alt="Dermatology treatment top"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -right-20 -bottom-20 z-0 w-[89%] rounded-2xl overflow-hidden ml-auto">
              <Image
                src="/images/sub2.png"
                alt="Dermatology treatment bottom"
                width={500}
                height={360}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-5 text-center lg:text-left mt-16!">
            <h2 className="font-(family-name:--font-subhead) font-bold italic text-4xl sm:text-3xl lg:text-[3rem] text-[#25544c]">
              Why choose us for all your <br className="hidden sm:block" />
              dermatology needs
            </h2>

            <p className="font-(family-name:--font-subhead) font-medium text-gray-500/90 text-sm sm:text-base lg:text-[19px] max-w-2xl mx-auto lg:mx-0">
              We are dedicated to helping you achieve and maintain beautiful,
              healthy skin and hair. Trust us to provide exceptional care
              tailored to you.
            </p>

            {/* Feature list */}
            <ul className="flex flex-col gap-6! mt-2!">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3! font-(family-name:--font-subhead) text-gray-500 text-sm sm:text-base justify-center lg:justify-start lg:text-[18px]"
                >
                  <Image
                    src="/icons/image.png"
                    alt="certified"
                    width={40}
                    height={40}
                    className="w-8 h-8 object-contain shrink-0"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-2! flex justify-center lg:justify-start">
              <button className="flex items-center gap-2 bg-[#22554c] text-white font-(family-name:--font-viga) text-sm font-medium px-6! py-3! rounded-full hover:bg-[#1f4d39] transition-colors duration-200 group cursor-pointer lg:text-[15px]">
                Explore all treatments
                <ChevronRight></ChevronRight>
              </button>
            </div>
          </div>
        </div>
</div>
        <div className="w-full pt-14! flex items-center justify-center">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6! w-full">

    {stats.map((stat, index) => (
        
      <div key={index} className="flex items-center gap-4!">

        <Image
        src={stat.images}
        alt={stat.label}
        width={stat.size}
        height={stat.size}
        >
        </Image>

        <div>
          <h3 className="text-4xl font-(family-name:--font-subhead) font-semibold text-green-900">
            {stat.value}
          </h3>
          <p className="text-[18px] font-(family-name:--font-subhead) text-gray-500">
            {stat.label}
          </p>
        </div>

      </div>
    ))}

  </div>
</div>
    </section>
  );
}

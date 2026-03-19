import React from "react";
import Image from "next/image";
const service1 = [
  "Hydradical basic",
  "Hydradical advanced",
  "Radiant facial glow",
  "Acne facial",
  "Vampire facial",
  "Photofacial",
  "Deluxe facial",
  "Oxygene facial",
];
const service2=[
  "Hair Transplant",
  "PRP Basic",
  "PRP Advance",
  "Hair Revival",
  "Mesotherapy",
  "GFC",
  "Exosome Therapy",
  "Antidandruff Peel",
]
const service3=[
  "Hydradical basic",
  "Hydradical advanced",
  "Radiant facial glow",
  "Acne facial",
  "Vampire facial",
  "Photofacial",
  "Deluxe facial",
  "Oxygene facial",
]

export default function DermatologyUI() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen py-8! px-4!">
      <div className="w-full mx-auto">

        <h1 className="text-center text-3xl pb-10! md:text-[43px] font-(family-name:--font-heading) font-bold text-[#25544c]">
          List of Dermatology Services
        </h1>

        <div className="grid items-center md:grid-cols-2 p-4! gap-10! w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-[35px] font-(family-name:--font-heading) font-bold text-[#25544c] mb-2!">
              Medifacils
            </h2>
            <p className="lg:text-[22px] max-w-[620px] mx-auto md:text-[18px] text-gray-500 font-(family-name:--font-subhead) mb-4! leading-relaxed">
              Medifacials are advanced skin treatments that combine clinical,
              medical-grade ingredients to target specific issues like acne,
              pigmentation, and aging.
            </p>

            <h3 className="text-[24px] pb-4! font-(family-name:--font-subhead) font-semibold text-[#25544c] mb-2!">
              Types of medifacials that we provide
            </h3>

            <div className="w-fit text-left">
              <ul className="list-disc italic space-y-3! text-[#25544c] font-(family-name:--font-heading) font-medium text-[20px] pl-6!">
                {service1.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/service1.png"
              alt="facial"
              width={430}
              height={430}
            />
          </div>
        </div>

        {/* section2 */}
        <div className="relative bg-[#25544c] grid items-center md:grid-cols-2 p-34! gap-10! w-full overflow-hidden border-none">
  <div className="absolute top-0 left-0 w-full h-56! bg-[#f5f5f5] border-2 border-white
                  [clip-path:polygon(0_0,100%_0,0_100%)] z-10" />

  <div className="absolute bottom-0 left-0 w-full h-56! bg-[#f5f5f5] border-2 border-white outline-none
                  [clip-path:polygon(0_0,0_100%,100%_100%)] z-10" />
          <div className="flex justify-center">
            <Image
              src="/images/services3.png"
              alt="hair treatments"
              className="rounded-[100px] z-10"

              width={410}
              height={410}
            />
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-[35px] font-(family-name:--font-heading) font-bold text-white mb-2!">
              Hair Treatments
            </h2>
            <p className="lg:text-[22px] max-w-[620px] mx-auto md:text-[18px] text-[#d5d5d5] font-(family-name:--font-subhead) mb-4! leading-relaxed">
              Specialized procedures designed to improve hair health, texture, 
              and appearance by targeting issues like dryness, damage, frizz, 
              or scalp conditions.
            </p>
            
            <h3 className="text-[24px] pb-4! font-(family-name:--font-subhead) font-semibold text-white mb-2!">
              Types of hair treatments that we provide
            </h3>

            <div className="w-fit text-left">
              <ul className="list-disc italic space-y-3! text-[#d5d5d5] font-(family-name:--font-heading) font-medium text-[20px] pl-6!">
                {service2.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>


{/* section 3 */}
        <div className="grid items-center md:grid-cols-2 p-4! gap-10! w-full border-none pb-16!">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-[35px] font-(family-name:--font-heading) font-bold text-[#25544c] mb-2!">
              Medifacils
            </h2>
            <p className="lg:text-[22px] max-w-[620px] mx-auto md:text-[18px] text-gray-500 font-(family-name:--font-subhead) mb-4! leading-relaxed">
              Medifacials are advanced skin treatments that combine clinical,
              medical-grade ingredients to target specific issues like acne,
              pigmentation, and aging.
            </p>

            <h3 className="text-[24px] pb-4! font-(family-name:--font-subhead) font-semibold text-[#25544c] mb-2!">
              Types of medifacials that we provide
            </h3>

            <div className="w-fit text-left">
              <ul className="list-disc italic space-y-3! text-[#25544c] font-(family-name:--font-heading) font-medium text-[20px] pl-6!">
                {service3.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/service2.png"
              alt="facial"
              width={430}
              height={430}
            />
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-[#25544c] font-(family-name:--font-viga) text-white px-6! py-2! rounded-full text-xl hover:opacity-90 transition">
            For more detailed information of each treatments, Click here
          </button>
        </div>

      </div>
    </div>
  );
}

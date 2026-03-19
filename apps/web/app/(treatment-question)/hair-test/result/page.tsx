"use client";

import { TreatmentRecommended } from "@/components/hair/treatment-recommended";
import { usePersonalInfo } from "@/lib/redux/selectorAndDispatcher/usePersonalInfo";
import Image from "next/image";

const HairTestResultPage = () => {
  const { personalInfo } = usePersonalInfo();

  return (
    <main className="px-4! sm:px-8! md:px-12! lg:px-20! py-8! sm:py-12! md:py-15!">
      <h1 className="text-[#25544C] font-(family-name:--font-roboto) text-2xl sm:text-3xl md:text-4xl font-bold">
        Your personalised assessment report
      </h1>

      {/* Patrient Info  */}
      <section className="mt-8! sm:mt-10! max-w-6xl  bg-[#25544CF2] px-4! sm:px-5! py-6! rounded-2xl text-white relative">
        <h2 className="mb-2! font-medium text-lg sm:text-xl font-(family-name:--font-roboto)">
          Patient Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 font-normal font-(family-name:--font-roboto)">
          <div className="flex flex-col gap-0.5">
            <span>
              Name:{" "}
              {personalInfo.name
                .toLowerCase()
                .replace(/\b[a-z]/g, (c) => c.toUpperCase())}
            </span>
            <span>Phone No: {personalInfo.phone}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span>Age: {personalInfo.age}</span>
            <span>Gender {personalInfo.gender}</span>
          </div>
        </div>

        <Image
          height={40}
          width={40}
          alt="Hair assessment decorative leaf icon"
          src="/hair-assesment-leaf.png"
          className="h-20 w-20 sm:h-30 sm:w-30 absolute -top-2 -right-2 -rotate-[160deg]"
        />
      </section>

      {/* Report  */}
      <section className="mt-8! sm:mt-10! text-[#4F4F4F]">
        <h2 className="text-[#25544C] text-3xl font-semibold mb-4! font-(family-name:--font-roboto)">
          Hair and Scalp Report
        </h2>

        <div>
          <h3 className="text-[23px] font-semibold mb-1! font-(family-name:--font-heading)">
            You are currently at Stage 2 of Male Pattern Hairfall{" "}
          </h3>
          <p className="max-w-3xl text-wrap font-normal text-[17px] font-(family-name:--font-heading)">
            Stage 2 male pattern hairfall is caused by internal hormone ,thisns
            jjfna awf h dt shst g she gsthe h hbak bawfuaibrinu b uarbh fu awnu
            a r ii ainfin fianfionw finaf nin fian
          </p>
        </div>

        <div className="mt-3!">
          <h3 className="text-[23px] font-semibold mb-1! font-(family-name:--font-heading)">
            Your Hairfall root cause
          </h3>
          <p className="font-(family-name:--font-roboto) text-[17px] font-normal">
            Todo
          </p>
        </div>

        <div className="mt-3!">
          <h3 className="text-[#4F4F4F] text-[23px] font-semibold mb-1! font-(family-name:--font-heading)">
            Hair regrowth possibility
          </h3>
          <div className="max-w-3xl rounded-lg border-[#25544C] border-2 h-7 pl-0!">
            <div className="w-[85%] h-full bg-[#25544C] rounded-sm flex justify-end text-white items-center font-(family-name:--font-viga) text-[18px] pr-3! py-3! ">
              85%
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Recommended For You  */}
      <section className="mt-8! sm:mt-10!">
        <h2 className="text-[#25544C] text-3xl font-semibold mb-4! font-(family-name:--font-roboto)">
          Treatments recommended for your scalp{" "}
        </h2>
        <TreatmentRecommended
          title="PRP Basic"
          decription1="A quick, minimally invasive procedure with little downtime, so you can return to your routine soon after treatment"
          decription2="We use your body's own growth-rich platelets to nourish the scalp and support healing"
          price={90000}
          imageUrl="/dummy-therapy.png"
        />
      </section>
    </main>
  );
};

export default HairTestResultPage;

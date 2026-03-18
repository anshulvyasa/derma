// this is the main services section component 


import ServiceBlock from "./ServiceBlock";
import facialImg from "@/public/facial.jpg";
import hairImg from "@/public/hair.png";

export default function ServicesSection() {
  return (
    <section className="bg-[#F7F5F0]">

      {/* PAGE TITLE */}
      <h1
        className="text-center font-semibold text-[#25544C]"
        style={{
          fontSize: "clamp(24px, 4vw, 34px)",
          paddingTop: "80px",
          marginBottom: "16px",
        }}
      >
        Care for Healthy Skin & Hair
      </h1>

      <div className="flex flex-col">

        <div>
          <ServiceBlock
            title="Medifacials"
            description="Medifacials are advanced skin treatments that combine clinical, medical-grade ingredients to target specific issues like acne, pigmentation, and aging"
            items={["Hydradacial basic","Hydradacial advanced","Radiant facial glow","Acne facial","Vampire facial","Photofacial","Exoluxe facial","Oxygeneo facial"]}
            image={facialImg}
          />
        </div>

        <div>
          <ServiceBlock
            title="Hair Treatments"
            description="Specialized salon or home procedures designed to improve hair health, texture, and appearance by targeting issues like dryness, damage, frizz, or scalp conditions"
            items={["Hair Transplant","PRP Basic","PRP Advance","Hair Revival","Mesotherapy","GFC","Exosome Therapy","Antidandruff Peel"]}
            image={hairImg}
            reverse
            dark
          />
        </div>

        <div>
          <ServiceBlock
            title="Medifacials"
            description="Medifacials are advanced skin treatments that combine clinical, medical-grade ingredients to target specific issues like acne, pigmentation, and aging"
            items={["Hydradacial basic","Hydradacial advanced","Radiant facial glow","Acne facial","Vampire facial","Photofacial","Exoluxe facial","Oxygeneo facial"]}
            image={facialImg}
          />
        </div> 
             
      </div>

      <div className="flex justify-center pb-10 -mt-8">
            <a href="/services/medifacials" className="bg-[#25544C] text-white font-semibold rounded-full px-16 py-4 text-base hover:bg-[#1d4039] transition-colors" style={{color: "white", paddingTop: "8px", paddingBottom: "8px", paddingLeft: "50px", paddingRight: "50px"}}>
              For more detailed information of each treatments, Click here
            </a>
        </div>

    </section>
  );
}
import React from 'react';

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    title: "Microneedling",
    description: "A procedure that uses a laser, or a concentrated beam of light, to get rid of hair in different areas of the body.",
    imageUrl: "/images/image.png"
  },
  {
    title: "MediPeels",
    description: "Utilize advanced peptide science and collagen technology for anti-aging, lifting, and brightening.",
    imageUrl: "/images/image copy.png"
  },
  {
    title: "Laser Hair Removal",
    description: "A procedure that uses a laser, or a concentrated beam of light, to get rid of hair in different areas of the body.",
    imageUrl: "/images/image copy 2.png"
  }
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-9! px-45!">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10! flex flex-col justify-center items-center text-center gap-y-2">
          <span className="text-gray-600/90 font-(family-name:--font-viga) text-[23px] font-semibold">
            Our Services
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold font-(family-name:--font-heading) text-[#25544C] mt-2 mb-4 leading-tight">
            Comprehensive dermatology services for <br className="hidden md:block" /> every skin and hair need
          </h1>
          <p className="text-gray-500 max-w-[700px] mx-auto lg:text-[20px] font-(family-name:--font-subhead)  leading-relaxed">
            Expert care for all skin and hair concerns, offering safe and personalized 
            treatments for healthy, confident results.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-10!">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative sm:w-80 h-[380px] w-[380px] rounded-[35px] overflow-hidden group transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Background Image */}
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#25544c] from-0% to-transparent to-80% flex flex-col justify-end p-6!">
                <h3 className="text-white text-2xl font-normal mb-3! font-(family-name:--font-viga)">
                  {service.title}
                </h3>
                <p className="text-white font-normal text-[15px] leading-relaxed font-(family-name:--font-subhead)">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

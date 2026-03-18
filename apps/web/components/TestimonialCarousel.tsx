//this is the main testimonial carousel component

import Image from "next/image";
import { Lato } from "next/font/google";
import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import LeafLeft from "@/public/leftLeaf.png";
import LeafRight from "@/public/rightLeaf.png";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function TestimonialCarousel() {
  return (
    <section className={`w-full flex justify-center py-10 md:py-20 bg-white ${lato.className}`}>
      <div className="w-full max-w-5xl text-center px-8 md:px-12">

        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Image src={LeafLeft} alt="leaf" className="w-9 h-9 md:w-[90px] md:h-[90px] -rotate-[8deg]" />
          <h2 className="text-lg md:text-2xl font-semibold text-[#25544C]">Client Feedback</h2>
          <Image src={LeafRight} alt="leaf" className="w-9 h-9 md:w-[90px] md:h-[90px] rotate-[8deg]" />
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-0">
            {testimonials.map((t) => (
              <CarouselItem key={t.id} className="basis-full pl-0">
                <div className="flex justify-center">

                  {/* Card */}
                  <div className="bg-[#E5E5E5] shadow-sm rounded-3xl max-w-xl w-full px-6 py-10 md:px-12 md:py-14 flex flex-col items-center gap-4 text-center" style={{padding: "10px 10px", marginBottom: "20px"}}>

                    {/* Title */}
                    <h3 className="text-base md:text-xl font-semibold text-gray-800">
                      {t.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-[#8B8B8B] italic leading-relaxed">
                      {t.text}
                    </p>

                    {/* Stars */}
                    <div className="flex justify-center items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="text-[#25544C] text-lg md:text-xl">★</span>
                      ))}
                      <span className="ml-1 text-sm md:text-base text-gray-700">{t.rating}.0</span>
                    </div>

                    {/* Name + Role */}
                    <div className="mt-2">
                      <p className="text-sm md:text-lg font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs md:text-sm text-gray-500">{t.role}</p>
                    </div>

                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows */}
          <CarouselPrevious className="bg-[#25544C] text-white border-none shadow-md w-8 h-8 md:w-10 md:h-10 left-0" />
          <CarouselNext className="bg-[#25544C] text-white border-none shadow-md w-8 h-8 md:w-10 md:h-10 right-0" />
        </Carousel>

      </div>
    </section>
  );
}
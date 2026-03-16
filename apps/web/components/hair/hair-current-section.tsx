import { useMajorIndex } from "@/lib/redux/selectorAndDispatcher/useMajorIndex"

export const CurrentHairSection = () => {
  const { majorIndex } = useMajorIndex();

  const isActive = (step: number) => majorIndex.majorIndex >= step;

  return (
    <div className="flex items-center justify-center my-5! [&_div]:border-[#25544C] [&_div]:flex [&_div]:justify-center [&_div]:items-center [&_div]:font-bold [&_div]:text-[#25544C]">

      <div
        className={`relative h-[60px] w-[60px] rounded-full mr-1!
        ${isActive(0) ? "border-[3.5px]" : "border-2"}`}
      >
        <span className="text-[19px]">1</span>
        <span className="absolute top-full mt-2! left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-[#555555]">
          About You
        </span>
      </div>

      <div
        className={`w-[90px] border-dashed rounded-full
        ${isActive(1) ? "border-2 border-[#25544C]" : "border"}`}
      />

      <div
        className={`relative h-[60px] w-[60px] rounded-full mx-1!
        ${isActive(1) ? "border-[3.5px]" : "border-2"}`}
      >
        2
        <span className="absolute top-full mt-2! left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-[#555555]">
          Hair Condition
        </span>
      </div>

      <div
        className={`w-[90px] border-dashed rounded-full
        ${isActive(2) ? "border-2 border-[#25544C]" : "border"}`}
      />

      <div
        className={`relative h-[60px] w-[60px] rounded-full mx-1!
        ${isActive(2) ? "border-[3.5px]" : "border-2"}`}
      >
        3
        <span className="absolute top-full mt-2! left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-[#555555]">
          Internal Health
        </span>
      </div>

      <div
        className={`w-[90px] border-dashed rounded-full
        ${isActive(3) ? "border-2 border-[#25544C]" : "border"}`}
      />

      <div
        className={`relative h-[60px] w-[60px] rounded-full ml-1!
        ${isActive(3) ? "border-[3.5px]" : "border-2"}`}
      >
        4
        <span className="absolute top-full mt-2! left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-[#555555]">
          Scalp Analysis
        </span>
      </div>

    </div>
  )
}
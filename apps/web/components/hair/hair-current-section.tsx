export const CurrentHairSection = () => {
  return (
    <div className="flex items-center justify-center my-5! [&_div]:border-[#25544C] [&_div]:flex [&_div]:justify-center [&_div]:items-center [&_div]:font-bold [&_div]:text-[#25544C]">
      
      {/* Step 1 */}
      <div className="relative h-[60px] w-[60px] rounded-full border-[3.5px] mr-1!">
        <span className="text-[19px]">1</span>
        <span className="absolute top-full mt-2! left-1/2 -translate-x-1/2 whitespace-nowrap text-sm  font-semibold  text-[#555555] ">
          About You
        </span>
      </div>
      
      <div className="w-[90px] border border-dashed rounded-full" />
      
      {/* Step 2 */}
      <div className="relative h-[60px] w-[60px] rounded-full border-2 mx-1!">
        2
        <span className="absolute top-full mt-2! left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-[#555555] ">
          Hair Condition
        </span>
      </div>
      
      <div className="w-[90px] border border-dashed rounded-full" />
      
      {/* Step 3 */}
      <div className="relative h-[60px] w-[60px] rounded-full border-2 mx-1!">
        3
        <span className="absolute top-full mt-2! left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-[#555555]">
          Internal Health
        </span>
      </div>
      
      <div className="w-[90px] border border-dashed rounded-full" />
      
      {/* Step 4 */}
      <div className="relative h-[60px] w-[60px] rounded-full border-2 ml-1!">
        4
        <span className="absolute top-full mt-2! left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-[#555555]">
          Scalp Analysis
        </span>
      </div>

    </div>
  )
}
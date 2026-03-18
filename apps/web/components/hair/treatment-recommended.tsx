import React from 'react';
import Image from 'next/image';

interface TreatmentRecommendedProps {
    title: string;
    decription1: string;
    decription2: string;
    price: number;
    imageUrl: string;
}

export const TreatmentRecommended = ({ 
    title, 
    decription1, 
    decription2, 
    price, 
    imageUrl 
}: TreatmentRecommendedProps) => {
    return (
        <article className="relative bg-[#2A4D45] rounded-3xl w-full max-w-6xl  flex flex-col md:flex-row shadow-lg"> 
     
            <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none z-0">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
                    <path d="M12 2L12 22M12 12C12 12 18 10 18 5C18 10 12 12 12 12ZM12 12C12 12 6 10 6 5C6 10 12 12 12 12ZM12 16C12 16 16 15 16 11C16 15 12 16 12 16ZM12 16C12 16 8 15 8 11C8 15 12 16 12 16Z" />
                </svg>
            </div>

            <div className="flex-1 px-6! pb-8! pt-16! md:px-10! md:pb-6! md:pt-15! relative z-10 flex flex-col justify-between">
                
               
                <div className="bg-[#F8F9FA] absolute top-0 left-0 rounded-tl-3xl rounded-br-[2rem] px-8! py-3! z-20">
                    <h2 className="text-[#2A4D45] font-bold text-xl tracking-wide m-0">
                        {title}
                    </h2>
                </div>

                <div className="text-[#E8EAE9] space-y-2">
                    <p className="italic text-lg md:text-xl leading-relaxed font-light m-0">
                        {decription1}
                    </p>
                    <p className="italic text-lg md:text-xl leading-relaxed font-light m-0">
                        {decription2}
                    </p>
                </div>

                <div className='mt-3!'>
                    <p className="text-white font-bold text-xl md:text-2xl tracking-wide m-0!">
                        Estimated price : Rs {price.toLocaleString('en-IN')}
                    </p>
                </div>
            </div>


            <div className="w-full md:w-[30%] p-6 flex items-stretch justify-center relative z-10">
                <div className="relative w-full min-h-[180px] md:min-h-[200px] rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src={imageUrl}
                        alt={`Procedure and results for ${title} treatment`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 45vw"
                    />
                </div>
            </div>

        </article>
    );
};
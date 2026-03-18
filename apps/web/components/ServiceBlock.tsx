// this is the block component(there are 3 block in the services section)


import Image from "next/image";
import { Raleway, Lato } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

type Props = {
  title: string;
  description: string;
  items: string[];
  image: any;
  reverse?: boolean;
  dark?: boolean;
};

export default function ServiceBlock({
  title,
  description,
  items,
  image,
  reverse = false,
  dark = false,
}: Props) {
  return (
    <div className="relative flex justify-center overflow-hidden">

      {/* PLANE GREEN BACKGROUND */}
      {dark && (
        <div
          className="absolute inset-0 bg-[#25544C] z-0"
        />
      )}

      {/* CONTENT */}
      <div
        className={`
          relative z-10
          w-full max-w-5xl
          flex flex-col md:flex-row
          items-center
          px-8 md:px-16
          py-24 md:py-32
          ${reverse ? "md:flex-row-reverse" : ""}
        `}
        style={{ gap: "64px" }}
      >

        {/* TEXT */}
        <div className="flex-1 max-w-[480px] text-center md:text-left">

          {/* Title */}
          <h2
            className={`${raleway.className} text-[30px] md:text-[34px] font-semibold ${
              dark ? "text-white" : "text-[#25544C]"
            }`}
            style={{ marginBottom: "24px" }}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className={`${lato.className} text-[16px] leading-[1.85] ${
              dark ? "text-[#DDDDDD]" : "text-[#858585]"
            }`}
            style={{ marginBottom: "36px" }}
          >
            {description}
          </p>

          {/* Subheading */}
          <h3
            className={`${lato.className} font-bold text-[18px] ${
              dark ? "text-white" : "text-[#25544C]"
            }`}
            style={{ marginBottom: "24px" }}
          >
            Types of {title.toLowerCase()} that we provide
          </h3>

          {/* Bullet List */}
          <ul>
            {(items || []).map((item, i) => (
              <li
                key={i}
                className={`${lato.className} flex items-center text-[16px] italic ${
                  dark ? "text-[#DDDDDD]" : "text-[#25544C]"
                }`}
                style={{ marginBottom: "14px", gap: "14px" }}
              >
                <span
                  className="shrink-0 rounded-full"
                  style={{
                    width: "9px",
                    height: "9px",
                    backgroundColor: dark ? "#DDDDDD" : "#25544C",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>

        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center">
          <div
            className="relative rounded-[20px] overflow-hidden"
            style={{ width: "300px", aspectRatio: "3/4" }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
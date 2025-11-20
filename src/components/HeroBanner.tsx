import { Card } from "@/components/ui/card";
import heroStretch from "@/assets/Streching.jpg";

export function HeroBanner() {
  return (
    <Card className="relative overflow-hidden border-0 p-0 shadow-xl rounded-2xl">
      <div className="flex items-center w-full h-[230px] relative">

        {/* LEFT ORANGE BLOCK */}
       <div className="w-[45%] h-full bg-[#FC6212] p-8 text-white flex flex-col justify-center relative overflow-hidden">

  {/* --- Ellipse 3 (Exact Figma Circle) --- */}
  <div
    className="absolute rounded-full"
    style={{
      background: "hsla(21, 100%, 74%, 0.2)",
      width: "150px",
      height: "150px",
      top: "115px",
      left: "-35px",
    }}
  ></div>


         <div
    className="absolute rounded-full"
    style={{
      background: "hsla(21, 100%, 74%, 0.2)",
      width: "67px",
      height: "67px",
      top: "195.66px",
      left: "-32.32px",
    }}
  ></div>

          {/* TEXT */}
          <h2 className="text-3xl font-bold mb-3 leading-tight relative ">
            Track Your Daily Activities
          </h2>
          <p className="text-white/90 leading-relaxed relative ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-[55%] h-full relative overflow-hidden rounded-r-2xl">
          <img
            src={heroStretch}
            alt="Person stretching"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* ORANGE GRADIENT OVER IMAGE */}
          <div className="absolute inset-0 
             bg-linear-to-r from-[#FC6212]/90 via-[#FC6212]/60 to-transparent">
          </div>
        </div>

      </div>
    </Card>
  );
}

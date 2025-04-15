import Image from "next/image";
import React from "react";

const StrategySection = () => {
  const strategy = [
    {
      src: "image-2-1.png",
      text: "What Recruiters Actually Look For",
    },
    {
      src: "image-2-2.png",
      text: "How Hiring Managers Make Decisions in 6 Seconds or Less",
    },
    {
      src: "image-2-3.png",
      text: "How ATS Software Reads and Ranks Resumes",
    },
    {
      src: "image-2-4.png",
      text: "How to Turn Your Experience Into Value-Driven Impact Statements",
    },
  ];
  return (
    <section className="px-8 py-12 bg-gray-50 ">
      <div className="bg-red-500 px-10 md:h-80 rounded-xl  text-white text-center py-12 ">
        <h3 className="text-xl sm:text-3xl font-semibold">
          What You Need Is Strategy, Positioning, And Precision.
        </h3>
        <p className="mt-3 text-md capitalize">
          At ATS RESUME, every resume is crafted by a seasoned HR professional
          who understands
        </p>

        {/* Feature Cards Section */}
        <div className="md:pr-18 md:absolute md:pb-10">
          <div className="max-w-7xl  mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strategy.map((item, index) => (
              <div
                key={index}
                className="bg-white px-6 pt-5 h-64 gap-2 grid grid-rows-2 rounded-lg shadow-xl text-center "
              >
                <div className="flex row-span-1 items-center justify-center">
                  <Image
                    src={`/images/${item.src}`}
                    alt="Recruiters"
                    width={100}
                    height={50}
                    className="mx-auto object-cover"
                  />
                </div>
                <h4 className="text-md row-span-1 font-medium text-gray-800">
                  {item.text}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;

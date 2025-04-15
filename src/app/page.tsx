import Image from "next/image";
import NavBar from "./components/nav-bar";
import StrategySection from "./components/strategy-section";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* Header Section */}
      <div className="max-w-7xl h-32 flex flex-col items-center justify-center mx-auto relative text-center">
        <div className=" flex justify-between bg-[#ffecea] absolute w-full items-center -z-10 overflow-clip">
          <Image
            src="/images/bg-img.png"
            alt="Some banner bg image."
            width={400}
            height={400}
            className="object-contain"
          />
          <Image
            src="/images/bg-img.png"
            alt="Some banner bg image."
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Why Choose Us
        </h2>
        <div className="flex bg-red-500 justify-center absolute mt-32 space-x-2 text-sm text-white py-1 px-3 rounded">
          <span>Home</span>
          <span>›</span>
          <span className="font-semibold">Why Choose Us</span>
        </div>
      </div>

      <section className="bg-gray-50 pt-12">
        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto px-8 md:mt-12 grid md:grid-cols-2 gap-8 items-center">
          {/* Left Text Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Why a Manually Crafted Resume{" "}
              <span className="text-red-500">Beats AI</span> and Templates Every
              Time
            </h3>
            <p className=" my-4 capitalize text-black">
              <strong>
                If your resume sounds like everyoune else's, it wont get you
                anywhere.
              </strong>
            </p>
            <p className="mt-4 capitalize text-gray-700 leading-relaxed">
              In today's hyper-competitive job market, using an AI tool or
              downloading a generic template might seem like the easy fix. But
              here's the truth: AI doesn't understand your career, your
              achievements, or how hiring really works. And templates? They're
              built for speed—not strategy.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <Image
              src="/images/image-1.png"
              alt="Illustration"
              width={400}
              height={300}
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </section>
      {/* Strategy Section */}
      <StrategySection />
    </>
  );
}

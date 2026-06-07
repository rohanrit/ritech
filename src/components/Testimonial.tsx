import React, { FunctionComponent, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    occupation: "Owner of a Boutique Clothing Store",
    quote:
      "“RiTech delivers exceptional service! Highly responsive and effective digital marketing strategies have boosted our website traffic and conversions”.",
  },
  {
    name: "John Doe",
    occupation: "CEO of XYZ Company",
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec odio nec massa tincidunt suscipit. Nullam efficitur justo in diam laoreet fringilla.”",
  },
  {
    name: "Doe Joe",
    occupation: "Lorem ipsum Company",
    quote:
      "“consectetur adipiscing elit. Fusce nec odio nec massa tincidunt suscipit. Nullam efficitur justo in diam laoreet fringilla.”",
  },
];

const Testimonial: FunctionComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, [currentSlide]); // Restart interval when currentSlide changes

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div>
      <div>
        <section className="self-stretch bg-neutral-black overflow-hidden flex flex-col items-center justify-start pt-[100px] px-5 pb-[108px] box-border gap-[50px] max-w-full text-left text-13xl text-ghostwhite font-body-l-medium sm:gap-[25px] md800:pt-[65px] md800:pb-[70px] md800:box-border">
          <div className="w-[858px] flex flex-row items-start justify-center py-0 pr-0 pl-[7px] box-border max-w-full">
            <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[42px] font-bold font-inherit sm:text-lgi sm:leading-[25px] md800:text-7xl md800:leading-[33px]">
              Here’s what They say about RiTech?
            </h1>
          </div>
          <div className="w-[857px] rounded-11xl bg-primary-lilac overflow-hidden flex flex-col items-start justify-start py-[34px] px-[81px] box-border max-w-full text-center text-base text-background-paper sm:pt-[22px] sm:pb-[22px] sm:box-border lg:pl-10 lg:pr-10 lg:box-border">
            <div className="self-stretch flex flex-col items-center justify-start gap-[30px]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[30px]">
                <div className="flex flex-col items-center justify-start gap-[15px]">
                  <img
                    className="w-20 h-20 relative rounded-[50%] object-contain"
                    loading="lazy"
                    alt=""
                    src="/ellipse-35@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start gap-[5px]">
                    <b className="relative leading-[150%] inline-block min-w-[124px]">
                      {currentSlide + 1}-{testimonials[currentSlide].name}
                    </b>
                    <b className="relative leading-[150%]">
                      {testimonials[currentSlide].occupation}
                    </b>
                  </div>
                </div>
                <b className="self-stretch relative text-xl leading-[150%] sm:text-base sm:leading-[24px]">
                  {testimonials[currentSlide].quote}
                </b>
              </div>
            </div>
          </div>
          {/* Circle navigation */}
          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full bg-yellow cursor-pointer ${
                  index === currentSlide ? "bg-white" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;

import React from 'react';

const Service: React.FC = () => {
  return (
    <section className="bg-primary-indigo-light overflow-hidden flex flex-col items-center justify-start pt-16 px-6 md:pt-10 md:px-4 lg:px-10 xl:px-20 2xl:px-24 pb-20 md:pb-36">
      <div className="max-w-full text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24">
        <h1 className="text-5xl md:text-7xl font-semibold text-ghostwhite">
          Services
        </h1>
        <p className="text-xl md:text-2xl font-medium leading-normal text-ghostwhite mt-4">
          Strategic services drive digital success with tailored, comprehensive approaches.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 sm:grid-cols-1 md:grid-cols-2 md800:grid-cols-2">
        <div className="rounded-xl bg-primary-lilac overflow-hidden flex flex-col items-center justify-start py-10 px-8 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <img
            className="w-20 h-20 mb-6"
            loading="lazy"
            alt=""
            src="/laptop-metrics@2x.png"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-ghostwhite">
            SEO Marketing
          </h3>
        </div>
        <button className="rounded-xl bg-primary-lilac overflow-hidden flex flex-col items-center justify-start py-10 pb-14 px-8 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <img
            className="w-20 h-20 mb-6"
            alt=""
            src="/web-marketing@2x.png"
          />
          <p className="text-xl md:text-2xl font-semibold text-ghostwhite text-center">
            Research Topic Trends
          </p>
        </button>
        <div className="rounded-xl bg-primary-lilac overflow-hidden flex flex-col items-center justify-start py-10 pb-14 px-8 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <img
            className="w-16 h-16 mb-6"
            loading="lazy"
            alt=""
            src="/email-open@2x.png"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-ghostwhite">
            Email Marketing
          </h3>
        </div>
        <div className="rounded-xl bg-primary-lilac overflow-hidden flex flex-col items-center justify-start py-10 pb-14 px-8 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <img
            className="w-16 h-16 mb-6"
            loading="lazy"
            alt=""
            src="/paid-search@2x.png"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-ghostwhite">
            Google PPC
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Service;

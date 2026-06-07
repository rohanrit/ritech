import React from 'react';

const Service: React.FC = () => {
  return (
    <section className="bg-brand-surface overflow-hidden flex flex-col items-center justify-start pt-16 px-6 md:pt-10 md:px-4 lg:px-10 xl:px-20 2xl:px-24 pb-20 md:pb-36">
      <div className="max-w-full text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24">
        <h1 className="text-5xl md:text-7xl font-semibold text-white font-sans">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan">Services</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium leading-normal text-slate-300 mt-4">
          Strategic services drive digital success with tailored, comprehensive approaches.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 sm:grid-cols-1 md:grid-cols-2 md800:grid-cols-2">
        <div className="group relative rounded-xl border border-brand-border bg-surface-gradient p-6 shadow-panel-glow hover:border-brand-purple/40 transition-all overflow-hidden">
          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand-purple/10 blur-2xl group-hover:bg-brand-cyan/15 transition-all" />
          <img
            className="w-20 h-20 mb-6 relative z-10"
            loading="lazy"
            alt=""
            src="/laptop-metrics@2x.png"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-white relative z-10">
            SEO Marketing
          </h3>
        </div>
        <div className="group relative rounded-xl border border-brand-border bg-surface-gradient p-6 shadow-panel-glow hover:border-brand-purple/40 transition-all overflow-hidden">
          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand-purple/10 blur-2xl group-hover:bg-brand-cyan/15 transition-all" />
          <img
            className="w-20 h-20 mb-6 relative z-10"
            alt=""
            src="/web-marketing@2x.png"
          />
          <p className="text-xl md:text-2xl font-semibold text-white text-center relative z-10">
            Research Topic Trends
          </p>
        </div>
        <div className="group relative rounded-xl border border-brand-border bg-surface-gradient p-6 shadow-panel-glow hover:border-brand-purple/40 transition-all overflow-hidden">
          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand-purple/10 blur-2xl group-hover:bg-brand-cyan/15 transition-all" />
          <img
            className="w-16 h-16 mb-6 relative z-10"
            loading="lazy"
            alt=""
            src="/email-open@2x.png"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-white relative z-10">
            Email Marketing
          </h3>
        </div>
        <div className="group relative rounded-xl border border-brand-border bg-surface-gradient p-6 shadow-panel-glow hover:border-brand-purple/40 transition-all overflow-hidden">
          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand-purple/10 blur-2xl group-hover:bg-brand-cyan/15 transition-all" />
          <img
            className="w-16 h-16 mb-6 relative z-10"
            loading="lazy"
            alt=""
            src="/paid-search@2x.png"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-white relative z-10">
            Google PPC
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Service;

import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
import Companies from './components/Companies';
import Service from './components/Service';
import WhyChooseUs from './components/WhyChooseUs';
import Metrics from './components/Metrics';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import Quotes from './components/Quotes';
import Footer from './components/Footer';

function App() {
  const scrollRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    Home: useRef<HTMLDivElement>(null),
    About: useRef<HTMLDivElement>(null),
    Features: useRef<HTMLDivElement>(null),
    Pricing: useRef<HTMLDivElement>(null),
    Testimonial: useRef<HTMLDivElement>(null),
    Contact: useRef<HTMLDivElement>(null),
  };
 
  return (
    <div >
      <Navbar scrollRefs={scrollRefs} />
        <div ref={scrollRefs.Home}>
          <HeroPage />
        </div>
          <Companies />
        <div ref={scrollRefs.Features}>
          <Service />
        </div>
        <div ref={scrollRefs.About}>
          <WhyChooseUs />
        </div>
          <Metrics />
        <div ref={scrollRefs.Testimonial}>
          <Testimonial />
        </div>
        <div ref={scrollRefs.Pricing}>
          <Pricing />
        </div>
          <Quotes />
        <div ref={scrollRefs.Contact}>
          <Footer />
        </div>
      </div>
      
  );
}
export default App;

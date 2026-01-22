import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import StickyCTA from './components/StickyCTA';
import Services from './components/Services';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Process from './components/Process';
import About from './components/About';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import FeaturedEndorsement from './components/FeaturedEndorsement';
import ChatAssistant from './components/ChatAssistant';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <ScrollProgress />
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Navbar />
      <main>
        {/* 1. Introduction: Who I am */}
        <Hero isLoaderActive={loading} />

        <Experience />
        <Testimonials />
        <Projects />

        {/* 2. Instant Trust: High-level endorsement */}

        {/* 3. The Proof: Show the work immediately */}


        {/* 4. The Scale: Quantitative Impact */}
        <Stats />

        {/* 5. The Offer: What I do */}
        <Services />

        {/* 6. The Method: How I do it (Technical Assurance) */}

        <About />

        {/* 9. Expertise Breakdown */}
        <Skills />

        <Process />

        {/* 7. The History: Resume & Track Record */}


        {/* 8. The Story: Founder & Community Leader */}


        {/* 10. More Social Proof */}


        {/* 11. Final Call to Action */}
        <Contact />
        <FeaturedEndorsement />

      </main>
      <Footer />
      {/* <ChatAssistant /> */}
      <StickyCTA />
    </div>
  );
}

export default App;
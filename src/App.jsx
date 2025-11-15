import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import AdvisoryCTA from './components/AdvisoryCTA';
import Audience from './components/Audience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0f0f0f]">
      <Navbar />
      <Hero />
      <FeatureCards />
      <AdvisoryCTA />
      <Audience />
      <section id="cta" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-black/5 p-8 md:p-10 bg-gradient-to-br from-[#00e5cc]/10 to-[#ff006e]/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold">Start building your brighter financial future</h3>
                <p className="mt-2 text-gray-700">Join the waitlist and be the first to try Dhanvam’s AI advisor.</p>
              </div>
              <form className="grid sm:grid-cols-[1fr_auto] gap-3">
                <input type="email" placeholder="Enter your email" className="h-12 rounded-xl border border-black/10 px-4 focus:outline-none focus:ring-2 focus:ring-[#00e5cc]" />
                <button type="button" className="h-12 rounded-xl bg-[#ff006e] text-white font-semibold px-6 hover:opacity-95">Join waitlist</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;

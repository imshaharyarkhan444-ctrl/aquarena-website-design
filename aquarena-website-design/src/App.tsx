import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-sand-800 bg-sand-50 selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Experience />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

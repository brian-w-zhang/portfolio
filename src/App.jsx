import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Explore from './pages/Explore';
import Flight from './pages/Flight';
import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import { initAudio, cleanupAudio } from './utils/howlerAudio';

// Move the Router wrapper outside the App component
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/flight') {
      console.log('Navigated to Flight route');
      initAudio();
    } else {
      console.log('Navigated away from Flight route');
      cleanupAudio();
    }

    // Cleanup function
    return () => {
      console.log('Cleaning up audio on route change');
      cleanupAudio();
    };
  }, [location.pathname]);

  return (
    <main className="bg-custom-background">
      <Navbar />
        <AnimatePresence mode='wait'> {/* Wrap your Routes in AnimatePresence */}
          <Routes>
            <Route path="/" element={<Flight />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="explore" element={<Explore />} />
            <Route path="flight" element={<Flight />} />
            {/* <Route path="contact" element={<Contact />} /> */}
          </Routes>
        </AnimatePresence>
      {/* <Footer /> */}
    </main>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

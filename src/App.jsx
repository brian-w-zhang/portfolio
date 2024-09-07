import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Explore from './pages/Explore';
import Flight from './pages/Flight';
import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence

function App() {
  return (
    <main className="bg-custom-background">
      <Router>
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
      </Router>
    </main>
  );
}

export default App;

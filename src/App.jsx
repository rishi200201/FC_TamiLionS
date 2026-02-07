import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import History from './pages/History';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import Commitment from './pages/Commitment';
import Founder from './pages/Founder';
import CoachingTeam from './pages/CoachingTeam';
import Leagues from './pages/Leagues';
import Partnerships from './pages/Partnerships';
import Achievements from './pages/Achievements';
import Offerings from './pages/Offerings';
import Sponsor from './pages/Sponsor';
import Contact from './pages/Contact';
import Upload from './pages/Upload';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/commitment" element={<Commitment />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/team" element={<CoachingTeam />} />
            <Route path="/leagues" element={<Leagues />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/sponsors" element={<Sponsor />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import './App.css';

import Home from './pages/Home';
import Collection from './pages/Collection';
import ArtworkPage from './pages/ArtworkPage';
import Story from './pages/Story';
import Contacts from './pages/Contacts';
import SmoothScroll from './components/SmothScroll';
import ScrollToTop from './components/ScrollToTop';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <SmoothScroll />
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/collection/:slug" element={<ArtworkPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

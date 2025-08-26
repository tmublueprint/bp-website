import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/ContactPage';
import NpoPage from './pages/NPO/NpoPage';
import StudentPage from './pages/Students/StudentPage';
import ProjectPage from './pages/Projects/ProjectPage';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/HomePage/NavBar';
import Footer from './components/HomePage/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter basename="/bp-website">
      <ScrollToTop />
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/npo" element={<NpoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

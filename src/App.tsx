import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/ContactPage';
import NpoPage from './pages/NpoPage';
import StudentPage from './pages/Students/StudentPage';
import ProjectPage from './pages/Projects/ProjectPage';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/HomePage/Footer';

function App() {

  return (
    <BrowserRouter>
      <div className='content-wrapper'>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/npo" element={<NpoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App

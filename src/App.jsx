import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';
import NotFound from './pages/NotFound.jsx';
import Footer from './components/Footer/Footer.jsx';


export default function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  )

}
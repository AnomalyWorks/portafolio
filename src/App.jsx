import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import AboutMe from './pages/aboutMe/aboutMe';
import NotFound from './pages/notFound/notFound';
import Works from './pages/works/works';
import Navbar from './components/navbar/navbar';
import './i18n';
import './App.css';

function AppWrapper() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/works" element={<Works />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

function App() {
  return (
    <>
      <Navbar/>
      <AppWrapper/>
    </>
  );
}

export default App

import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Skills />
    <About />
    <Projects />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ContactForm />
      <ToastContainer />
    </div>
    <Footer />
    </>
  )
}
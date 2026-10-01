import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Machines from './pages/Machines';
import ContactUs from './pages/ContactUs';

function App() {
  const isAboutUsPage = window.location.pathname === '/about-us';
  const isMachinesPage = window.location.pathname === '/machines';
  const isContactUsPage = window.location.pathname === '/contact-us';

  return (
    <div className="app-container">
      <Header />
      <main>
        {isAboutUsPage ? <AboutUs /> : isMachinesPage ? <Machines /> : isContactUsPage ? <ContactUs /> : <Home />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

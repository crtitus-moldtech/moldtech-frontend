import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Machines from './pages/Machines';
import ContactUs from './pages/ContactUs';
import Components from './pages/Components';

function App() {
  const isAboutUsPage = window.location.pathname === '/about-us';
  const isMachinesPage = window.location.pathname === '/machines';
  const isContactUsPage = window.location.pathname === '/contact-us';
  const isComponentsPage = window.location.pathname === '/components';

  return (
    <div className="app-container">
      <Header />
      <main>
        {isAboutUsPage ? <AboutUs /> : isMachinesPage ? <Machines /> : isContactUsPage ? <ContactUs /> : isComponentsPage ? <Components /> : <Home />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ui/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import DigitalMarketing from "./pages/DigitalMarketing";
import Contact from "./pages/Contact";

// Service Detail Pages
import ITConsultancy from "./pages/services/ITConsultancy";
import ITSupport from "./pages/services/ITSupport";
import ITAudit from "./pages/services/ITAudit";
import ManagedIT from "./pages/services/ManagedIT";

// Solution Detail Pages
import Cybersecurity from "./pages/solutions/Cybersecurity";
import Infrastructure from "./pages/solutions/Infrastructure";
import CloudAI from "./pages/solutions/CloudAI";
import CADEngineering from "./pages/solutions/CADEngineering";
import Hospitality from "./pages/solutions/Hospitality";
import Automation from "./pages/solutions/Automation";
import SmartBuilding from "./pages/solutions/SmartBuilding";

// Digital Marketing Detail Pages
import WebDevelopment from "./pages/digital-marketing/WebDevelopment";
import AppDevelopment from "./pages/digital-marketing/AppDevelopment";
import Seo from "./pages/digital-marketing/SEO";
import SocialMedia from "./pages/digital-marketing/SocialMedia";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/it-consultancy" element={<ITConsultancy />} />
          <Route path="services/it-support" element={<ITSupport />} />
          <Route path="services/it-audit" element={<ITAudit />} />
          <Route path="services/managed-it" element={<ManagedIT />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="solutions/infrastructure" element={<Infrastructure />} />
          <Route path="solutions/cloud-ai" element={<CloudAI />} />
          <Route path="solutions/cybersecurity" element={<Cybersecurity />} />
          <Route
            path="solutions/cad-engineering"
            element={<CADEngineering />}
          />
          <Route path="solutions/hospitality" element={<Hospitality />} />
          <Route path="solutions/networking" element={<Infrastructure />} />
          <Route path="solutions/automation" element={<Automation />} />
          <Route path="solutions/smart-building" element={<SmartBuilding />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route
            path="digital-marketing/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="digital-marketing/app-development"
            element={<AppDevelopment />}
          />
          <Route path="digital-marketing/seo" element={<Seo />} />
          <Route
            path="digital-marketing/social-media"
            element={<SocialMedia />}
          />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

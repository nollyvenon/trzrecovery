import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import WaiverSuccess from "./pages/Contact/waiverSuccess";

const Faq = React.lazy(() => import("pages/Faq"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Contact = React.lazy(() => import("pages/Contact"));
const ContactSuccess = React.lazy(() => import("pages/Contact/contactSuccess"));
const SubscriberSuccess = React.lazy(() => import("pages/Contact/subscriberSuccess"));
const WaiverInfo = React.lazy(() => import("pages/WaiverInfo"));
const RecoveryServices = React.lazy(() =>
  import("pages/RecoveryServices")
);
const Beauty = React.lazy(() =>
  import("pages/Beauty")
);
const Home = React.lazy(() => import("pages/Home"));
const LandingPageOne = React.lazy(() => import("pages/LandingPageOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpageone" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/beauty"
            element={<Beauty />}
          />
          <Route
            path="/recoveryservices"
            element={<RecoveryServices />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactSuccess" element={<ContactSuccess />} />
          <Route path="/subscriberSuccess" element={<SubscriberSuccess />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/waiverinfo" element={<WaiverInfo />} />
          <Route path="/waiverSuccess" element={<WaiverSuccess />} />
          <Route path="/faq" element={<Faq />} />

        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

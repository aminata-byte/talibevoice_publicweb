import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DonatePage from "./pages/DonatePage";
import DaarasPage from "./pages/DaarasPage";
import BecomePartnerPage from "./pages/BecomePartnerPage";
import PartnerLoginPage from "./pages/partner/PartnerLoginPage";
import PartnerDashboardPage from "./pages/partner/PartnerDashboardPage";
import SubmitOfferPage from "./pages/partner/SubmitOfferPage";
import EnrolledTalibesPage from "./pages/partner/EnrolledTalibesPage";
import AboutPage from "./pages/AboutPage";
import PartnerImpactPage from "./pages/partner/PartnerImpactPage";
import PartnerProfilePage from "./pages/partner/PartnerProfilePage";
import ConfidentialitePage from "./pages/ConfidentialitePage";
import ConditionsPage from "./pages/ConditionsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/faire-un-don" element={<DonatePage />} />
        <Route path="/daaras" element={<DaarasPage />} />
        <Route path="/devenir-partenaire" element={<BecomePartnerPage />} />

        {/* Espace partenaire */}
        <Route path="/partenaire/login" element={<PartnerLoginPage />} />
        <Route
          path="/partenaire/dashboard"
          element={<PartnerDashboardPage />}
        />
        <Route
          path="/partenaire/soumettre-offre"
          element={<SubmitOfferPage />}
        />
        <Route
          path="/partenaire/talibe-inscrits"
          element={<EnrolledTalibesPage />}
        />

        <Route path="/partenaire/impact" element={<PartnerImpactPage />} />
        <Route path="/partenaire/profil" element={<PartnerProfilePage />} />

        <Route path="/confidentialite" element={<ConfidentialitePage />} />

        <Route path="/conditions" element={<ConditionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

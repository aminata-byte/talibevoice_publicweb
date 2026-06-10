import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DonatePage from "./pages/DonatePage";
import DaarasPage from "./pages/DaarasPage";
import BecomePartnerPage from "./pages/BecomePartnerPage";
import AboutPage from "./pages/AboutPage";
import ConfidentialitePage from "./pages/ConfidentialitePage";
import ConditionsPage from "./pages/ConditionsPage";
import ContactPage from "./pages/ContactPage";
import PartnerLoginPage from "./pages/partner/PartnerLoginPage";
import PartnerDashboardPage from "./pages/partner/PartnerDashboardPage";
import SubmitOfferPage from "./pages/partner/SubmitOfferPage";
import EnrolledTalibesPage from "./pages/partner/EnrolledTalibesPage";
import PartnerImpactPage from "./pages/partner/PartnerImpactPage";
import PartnerProfilePage from "./pages/partner/PartnerProfilePage";
import ProtectedRoute from "./components/layout/ProtectedRoute";

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
        <Route path="/confidentialite" element={<ConfidentialitePage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Login partenaire */}
        <Route path="/partenaire/login" element={<PartnerLoginPage />} />

        {/* Espace partenaire protégé */}
        <Route
          path="/partenaire/dashboard"
          element={
            <ProtectedRoute>
              <PartnerDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/partenaire/soumettre-offre"
          element={
            <ProtectedRoute>
              <SubmitOfferPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/partenaire/talibe-inscrits"
          element={
            <ProtectedRoute>
              <EnrolledTalibesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/partenaire/impact"
          element={
            <ProtectedRoute>
              <PartnerImpactPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/partenaire/profil"
          element={
            <ProtectedRoute>
              <PartnerProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

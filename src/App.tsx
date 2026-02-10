import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageTransitionLoader } from "@/components/PageTransitionLoader";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
import Apply from "./pages/Apply";
import Hire from "./pages/Hire";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/WhoWeAre";
import CareerConsulting from "./pages/CareerConsulting";

import Specialization from "./pages/Specialization";
import OurServices from "./pages/OurServices";
import DomesticStaffing from "./pages/DomesticStaffing";
import TrainingProgram from "./pages/TrainingProgram";

import OverseasRecruitmentPage from "./pages/OverseasRecruitment";
import OverseasHotelJobs from "./pages/OverseasHotelJobs";
import ResortPlacements from "./pages/ResortPlacements";
import CruiseLineJobs from "./pages/CruiseLineJobs";
import VisaProcessing from "./components/layout/VisaProcessing";
import DocumentationSupport from "./components/home/DocumentationSupport";
import ImmigrationConsulting from "./components/home/ImmigrationConsulting";
import ManageHospitality from "./pages/ManageHospitality";
import SuccessStories from "./pages/SuccessStories";
import Sitemap from "./pages/Sitemap";
import Blogs from "./pages/Blogs";
import Privacy from "./pages/Privacy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <PageTransitionLoader />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/careerconsulting" element={<CareerConsulting />} />

          <Route path="/specialization" element={<Specialization />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/domesticstaffing" element={<DomesticStaffing />} />
          <Route path="/overseasrecruitment" element={<OverseasRecruitmentPage />} />
          <Route path="/manage-hospitality" element={<ManageHospitality />} />
          <Route path="/trainingprogram" element={<TrainingProgram />} />
          <Route path="/overseashoteljobs" element={<OverseasHotelJobs />} />
          <Route path="/resortplacements" element={<ResortPlacements />} />
          <Route path="/cruiselinejobs" element={<CruiseLineJobs />} />
          <Route path="/visaprocessing" element={<VisaProcessing />} />
          <Route path="/documentationsupport" element={<DocumentationSupport />} />
          <Route path="/immigrationconsulting" element={<ImmigrationConsulting />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

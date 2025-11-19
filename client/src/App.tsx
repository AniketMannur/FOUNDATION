import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ModernNavigation } from "@/components/ModernNavigation";
import Footer from "@/components/Footer";
import Home from "@/pages/home";
import AboutUs from "@/pages/about-us";
import Impact from "@/pages/impact";
import Programs from "@/pages/programs";
import GalleryPage from "@/pages/gallery";
import Contact from "@/pages/contact";
import Feedback from "@/pages/feedback";
import SectorPage from "@/pages/sector";
import CampaignPage from "@/pages/campaign";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/impact" component={Impact} />
      <Route path="/programs" component={Programs} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/feedback" component={Feedback} />
      <Route path="/sectors/:sector" component={SectorPage} />
      <Route path="/campaigns/:campaignId" component={CampaignPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <ModernNavigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import Agents from "@/components/Agents";
import Integrations from "@/components/Integrations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Workflow />
      <Agents />
      <Integrations />
      <Footer />
    </div>
  );
};

export default Index;

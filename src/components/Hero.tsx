import { Button } from "@/components/ui/button";
import heroChameleon from "@/assets/hero-chameleon.png";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="bg-card border-2 border-border rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-6 right-6 w-16 h-16 bg-primary rounded-bl-[2rem] opacity-80" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Bugster: The{" "}
                <span className="block">AI QA Engineer</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Bugster uses your app like a real user so you can find bugs without writing tests.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="accent" size="lg" className="text-base">
                  START TESTING
                </Button>
                <Button variant="outline" size="lg" className="text-base">
                  BOOK DEMO
                </Button>
              </div>

              <p className="text-sm text-muted-foreground pt-2">
                Excited to see more?{" "}
                <a href="#" className="text-foreground font-semibold underline underline-offset-4 hover:text-primary transition-colors">
                  WATCH WALKTHROUGH
                </a>
              </p>
            </div>

            <div className="relative">
              <img 
                src={heroChameleon} 
                alt="Bugster chameleon inspecting code" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

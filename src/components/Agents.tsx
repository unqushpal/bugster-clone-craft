import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TestTube2, Zap } from "lucide-react";

const Agents = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Agents</h2>
          <p className="text-xl text-muted-foreground">Two powerful AI agents working for you</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 md:p-10 space-y-6 hover:shadow-xl transition-all bg-gradient-to-br from-card to-primary/5 border-2">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <TestTube2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold">E2E Agent</h3>
            </div>

            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Runs tests on every PR in real browsers.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Creates and updates tests for critical flows in YAML.</span>
              </li>
            </ul>

            <Button variant="link" className="text-primary p-0 h-auto">
              See Example →
            </Button>
          </Card>

          <Card className="p-8 md:p-10 space-y-6 hover:shadow-xl transition-all bg-gradient-to-br from-card to-destructive/5 border-2">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-destructive rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-destructive-foreground" />
              </div>
              <h3 className="text-3xl font-bold">Destructive</h3>
            </div>

            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-destructive font-bold">→</span>
                <span>Targets recent changes and aggressively tests them.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive font-bold">→</span>
                <span>Simulates unpredictable user behavior uncovering edge-case bugs traditional tests miss.</span>
              </li>
            </ul>

            <Button variant="link" className="text-destructive p-0 h-auto">
              See Example →
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Agents;

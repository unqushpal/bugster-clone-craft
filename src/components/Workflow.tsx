import { Code2, GitPullRequest, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const Workflow = () => {
  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works</h2>
          <p className="text-xl text-muted-foreground">Seamless integration with your workflow</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border-2">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">DEVELOPER</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="font-medium">Creates a new feature</p>
              <p>Pull Request to main</p>
              <p>Feature ready in production</p>
            </div>
          </Card>

          <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border-2">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <GitPullRequest className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">BUGSTER</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="font-medium">Creates and updates the tests</p>
              <p>Bugster Agents test your app in real browsers</p>
            </div>
          </Card>

          <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border-2">
            <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-2xl font-bold">RESULTS</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="font-medium">Tests run on every PR</p>
              <p>Catch bugs before production</p>
              <p>Ship with confidence</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Workflow;

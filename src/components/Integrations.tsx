import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ThumbsUp } from "lucide-react";

const integrations = [
  {
    title: "Frontend Frameworks",
    description: "Integrate testing with your favorite frameworks",
    items: [
      { name: "Next.js", status: "active" },
      { name: "React", status: "soon" },
      { name: "Javascript", status: "soon" },
      { name: "Angular", status: "soon" },
      { name: "Vue", status: "vote" },
    ],
  },
  {
    title: "Git Providers",
    description: "Connect your Git repository for automated testing",
    items: [
      { name: "GitHub", status: "active" },
      { name: "Gitlab", status: "soon" },
      { name: "Bitbucket", status: "vote" },
    ],
  },
  {
    title: "Deployment Platforms",
    description: "Deploy and run tests across multiple platforms",
    items: [
      { name: "Vercel", status: "active" },
      { name: "Netlify", status: "soon" },
      { name: "AWS", status: "vote" },
    ],
  },
];

const Integrations = () => {
  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Stack and more</h2>
          <p className="text-xl text-muted-foreground">
            Help us prioritize which tools and frameworks we should add. Vote for the ones you use most 
            to help us build the best platform for your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {integrations.map((category) => (
            <Card key={category.title} className="p-6 space-y-4 bg-card border-2">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>

              <div className="space-y-2">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      {item.status === "active" && (
                        <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                      )}
                      <span className="font-medium">{item.name}</span>
                    </div>
                    {item.status === "soon" && (
                      <span className="text-xs bg-muted px-2 py-1 rounded-md">Soon</span>
                    )}
                    {item.status === "vote" && (
                      <Button variant="ghost" size="sm" className="h-8">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Vote
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;

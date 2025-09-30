import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { BookOpen, Bot, Lightbulb, Award, FileText, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Upload CTA Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Upload Your Study Materials</h2>
            <p className="text-xl text-muted-foreground">Drag and drop your PDFs to get started. Max 50MB per file.</p>
          </div>
          <Card className="p-12 border-2 border-dashed border-border hover:shadow-lg transition-shadow">
            <CardContent className="text-center space-y-6">
              <FileText className="w-16 h-16 mx-auto text-muted-foreground" />
              <div>
                <p className="text-2xl font-semibold mb-2">Drop your PDF here</p>
                <p className="text-muted-foreground">Or click to browse</p>
              </div>
              <Button variant="accent" size="lg" className="w-full max-w-md mx-auto">
                <Upload className="w-5 h-5 mr-2" />
                UPLOAD PDF
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modes Overview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Learning Modes</h2>
            <p className="text-xl text-muted-foreground">Choose how you want to learn and master your material</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Readalong</h3>
              <p className="text-muted-foreground">Interactive PDF viewer with AI explanations on highlights.</p>
            </Card>
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border-2">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">AI Tutor</h3>
              <p className="text-muted-foreground">Socratic teaching with adaptive modules and gamification.</p>
            </Card>
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Reviser</h3>
              <p className="text-muted-foreground">Feynman technique with feedback to simplify and refine explanations.</p>
            </Card>
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border-2">
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold">Coach</h3>
              <p className="text-muted-foreground">MCQ quizzes, exam tracking, and spaced repetition for mastery.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Dashboard</h2>
            <p className="text-xl text-muted-foreground">Track your progress and access your materials</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1,2,3].map((i) => (
              <Card key={i} className="p-6 space-y-4 bg-card border-2 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Algebra Notes.pdf</h4>
                  <FileText className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: `${65 + i*10}%`}}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">{65 + i*10}% Mastery</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">Modes</Button>
                  <Button variant="ghost" size="sm">Delete</Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="accent" size="lg">
              VIEW FULL DASHBOARD
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

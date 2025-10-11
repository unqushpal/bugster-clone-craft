import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { BookOpen, Bot, Lightbulb, Award, FileText, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Upload CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Upload Your Study Materials</h2>
            <p className="text-xl text-slate-600">Drag and drop your PDFs to get started. Max 50MB per file.</p>
          </div>
          <Card className="p-12 border-2 border-dashed border-slate-300 hover:shadow-xl transition-all duration-300">
            <CardContent className="text-center space-y-6">
              <FileText className="w-16 h-16 mx-auto text-slate-400" />
              <div>
                <p className="text-2xl font-semibold mb-2 text-slate-800">Drop your PDF here</p>
                <p className="text-slate-600">Or click to browse</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Our Learning Modes</h2>
            <p className="text-xl text-slate-600">Choose how you want to learn and master your material</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 border-2">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Readalong</h3>
              <p className="text-slate-600">Interactive PDF viewer with AI explanations on highlights.</p>
            </Card>
            <Card className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 border-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">AI Tutor</h3>
              <p className="text-slate-600">Socratic teaching with adaptive modules and gamification.</p>
            </Card>
            <Card className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 border-2">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Reviser</h3>
              <p className="text-slate-600">Feynman technique with feedback to simplify and refine explanations.</p>
            </Card>
            <Card className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 border-2">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Coach</h3>
              <p className="text-slate-600">MCQ quizzes, exam tracking, and spaced repetition for mastery.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Your Dashboard</h2>
            <p className="text-xl text-slate-600">Track your progress and access your materials</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1,2,3].map((i) => (
              <Card key={i} className="p-6 space-y-4 border-2 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-800">Algebra Notes.pdf</h4>
                  <FileText className="w-5 h-5 text-slate-400" />
                </div>
                <div className="space-y-2">
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full transition-all duration-500" style={{width: `${65 + i*10}%`}}></div>
                  </div>
                  <p className="text-sm text-slate-600">{65 + i*10}% Mastery</p>
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

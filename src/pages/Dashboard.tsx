import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  BookOpen,
  Bot,
  Lightbulb,
  Award,
  User,
  Plus,
  Upload,
  Play,
  Clock,
  TrendingUp,
  Target,
  Brain,
  Sparkles,
  Menu,
  X
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data for the new dashboard design
  const currentUser = {
    name: "John",
    currentActivity: {
      document: "Physics Fundamentals.pdf",
      mode: "AI Tutor",
      progress: 65,
      topic: "Thermodynamics"
    }
  };

  // Chart data for visualizations
  const masteryData = [
    { name: "Mastered", value: 68, color: "#217098" },
    { name: "Needs Review", value: 32, color: "#e5e7eb" }
  ];

  const performanceData = [
    { day: "Mon", score: 75 },
    { day: "Tue", score: 82 },
    { day: "Wed", score: 78 },
    { day: "Thu", score: 88 },
    { day: "Fri", score: 92 },
    { day: "Sat", score: 85 },
    { day: "Sun", score: 90 }
  ];

  const studyGaps = [
    { topic: "Ohm's Law", subject: "Physics PDF", questionsMissed: 3 },
    { topic: "Cell Division", subject: "Biology PDF", questionsMissed: 2 }
  ];

  const handleModeSelect = (mode: string) => {
    switch (mode) {
      case "readalong":
        window.location.href = "/readalong";
        break;
      case "tutor":
        window.location.href = "/tutor";
        break;
      case "reviser":
        window.location.href = "/reviser";
        break;
      case "coach":
        window.location.href = "/coach";
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Top Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Hello, {currentUser.name}!</h1>
                <p className="text-sm text-muted-foreground">Ready to learn?</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Upload className="w-4 h-4 mr-2" />
                Upload PDF
              </Button>
              <Button size="sm" className="lg:hidden" variant="ghost" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Upload PDF Card */}
            <Card className="border-2 border-dashed border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-2">Upload Your Study Materials</h2>
                    <p className="text-muted-foreground">Drag and drop your PDFs to get started. Max 50MB per file.</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full max-w-md mx-auto" size="lg">
                      <Upload className="w-4 h-4 mr-2" />
                      UPLOAD PDF
                    </Button>
                    <p className="text-sm text-muted-foreground">Or click to browse</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continue Studying & Study Gaps Cards Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Continue Studying Card */}
              <Card className="border-2 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Continue Studying</h2>
                      <p className="text-muted-foreground">Pick up where you left off</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{currentUser.currentActivity.progress}%</div>
                      <div className="text-sm text-muted-foreground">Complete</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{currentUser.currentActivity.document}</h3>
                      <p className="text-muted-foreground">
                        {currentUser.currentActivity.mode}: {currentUser.currentActivity.topic}
                      </p>
                    </div>

                    <Progress value={currentUser.currentActivity.progress} className="h-3" />

                    <div className="flex gap-3">
                      <Button className="flex-1">
                        <Play className="w-4 h-4 mr-2" />
                        Resume
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Document
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Study Gaps Card */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Your Study Gaps
                  </h3>
                  <div className="space-y-4">
                    {studyGaps.map((gap, index) => (
                      <div key={index} className="p-3 bg-muted/30 rounded-lg">
                        <h4 className="font-medium text-sm">{gap.topic}</h4>
                        <p className="text-xs text-muted-foreground mb-2">from {gap.subject}</p>
                        <p className="text-xs text-destructive mb-3">Missed {gap.questionsMissed} questions</p>
                        <Button size="sm" className="w-full">
                          Start Review
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Launch Tiles */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-2 hover:shadow-md transition-all cursor-pointer group" onClick={() => handleModeSelect("readalong")}>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Readalong</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-md transition-all cursor-pointer group" onClick={() => handleModeSelect("tutor")}>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                    <Bot className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold">AI Tutor</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-md transition-all cursor-pointer group" onClick={() => handleModeSelect("reviser")}>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-secondary/20 transition-colors">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold">Reviser</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-md transition-all cursor-pointer group" onClick={() => handleModeSelect("coach")}>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-destructive/20 transition-colors">
                    <Award className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold">Coach</h3>
                </CardContent>
              </Card>
            </div>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mastery Meter */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold mb-2">Concept Mastery</h3>
                    <div className="text-3xl font-bold text-primary">Excellent!</div>
                    <div className="text-sm text-muted-foreground">68% Mastered</div>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={masteryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {masteryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Performance Trend */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold mb-2">7-Day Performance</h3>
                    <div className="text-sm text-muted-foreground">MCQ Practice Scores</div>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#217098"
                        strokeWidth={3}
                        dot={{ fill: "#217098", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Time & Focus Metrics */}
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Study Focus</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">4.5h</div>
                    <div className="text-sm text-muted-foreground">This Week</div>
                  </div>
                  <div>
                    <Target className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-muted-foreground">Topics Reviewed</div>
                  </div>
                  <div>
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-sm text-muted-foreground">Avg. Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar/Recommendations */}
          <div className={`lg:col-span-1 space-y-6 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
            {/* Feynman Challenge - Expanded */}
            <Card className="border-2 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Feynman Challenge
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ready for a deep dive? Explain Thermodynamics to the AI using the Feynman Technique.
                </p>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground mb-4">
                  Try Reviser Mode
                </Button>

                <div className="pt-4 border-t border-accent/20">
                  <h4 className="font-medium text-sm mb-2">What is Feynman Technique?</h4>
                  <p className="text-xs text-muted-foreground">
                    Explain concepts simply as if teaching someone else. The AI will give feedback to help you identify gaps in your understanding.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    View All Documents
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Target className="w-4 h-4 mr-2" />
                    Practice Quiz
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Clock className="w-4 h-4 mr-2" />
                    Study History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
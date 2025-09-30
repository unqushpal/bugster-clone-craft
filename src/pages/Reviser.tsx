import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lightbulb, MessageCircle, Send, Award, AlertCircle, User, Sparkles, BookOpen } from "lucide-react";
import { useState } from "react";

const Reviser = () => {
  const availableTopics = [
    "Photosynthesis",
    "Newton's First Law",
    "Chemical Bonding",
    "Cell Division",
    "World War I Causes",
    "Mitochondrial Respiration",
    "Ancient Rome",
    "Algebra Basics"
  ];

  const [selectedTopic, setSelectedTopic] = useState("");
  const [explanation, setExplanation] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState({ strengths: "", gaps: "" });

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setShowFeedback(false);
    setExplanation("");
    setFeedback({ strengths: "", gaps: "" });
  };

  const handleSubmitExplanation = () => {
    if (explanation.trim() && selectedTopic) {
      setShowFeedback(true);

      // Mock AI feedback with two-part structure
      setTimeout(() => {
        setFeedback({
          strengths: `Excellent work explaining ${selectedTopic.toLowerCase()}! I love how you broke down the core concept simply and clearly. Your explanation shows real understanding of the fundamental principles involved.`,
          gaps: `I notice we could strengthen the explanation by exploring what happens when ${selectedTopic.toLowerCase()} doesn't work as expected. Could you explain why this process is so important for life on Earth? What would happen if this process stopped working?`
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />

      {/* Centered Focus Area with Vignette Effect */}
      <div className="pt-20 pb-16 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl mx-auto w-full">
          {/* Topic Selector */}
          {!selectedTopic && (
            <Card className="border-2 shadow-lg mb-8">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Choose Your Challenge</h2>
                <p className="text-slate-600 mb-6">Select a topic to explain using the Feynman Technique</p>
                <Select onValueChange={handleTopicSelect}>
                  <SelectTrigger className="w-full max-w-md mx-auto">
                    <SelectValue placeholder="Select a topic to explain..." />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTopics.map((topic) => (
                      <SelectItem key={topic} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          )}

          {/* Main Feynman Technique Interface */}
          {selectedTopic && !showFeedback && (
            <Card className="border-2 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Friendly Child Prompt */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-xl font-bold text-slate-800">Explain {selectedTopic}</h2>
                      <p className="text-slate-600">as if I were a curious 12-year-old</p>
                    </div>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
                </div>

                {/* Large Explanation Input */}
                <div className="space-y-6">
                  <Textarea
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    placeholder={`Imagine explaining ${selectedTopic.toLowerCase()} to a curious middle schooler who loves to ask "why?" and "how?". Use simple words, fun examples, and help them really understand the concept...`}
                    className="min-h-[200px] text-lg p-6 border-2 border-slate-200 rounded-xl resize-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    autoFocus
                  />

                  <div className="flex justify-center">
                    <Button
                      onClick={handleSubmitExplanation}
                      size="lg"
                      className="px-8 py-4 text-lg font-medium"
                      disabled={!explanation.trim()}
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Get Feynman Feedback
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* AI Feedback Card - Two Part Structure */}
          {showFeedback && (
            <Card className="border-2 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Feynman Feedback</h2>
                  <p className="text-slate-600">Here's what you did well and where you can deepen your understanding</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Positive Reinforcement - Emerald */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                      <h3 className="text-lg font-semibold text-emerald-700">What You Explained Well</h3>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                      <p className="text-emerald-800 leading-relaxed">{feedback.strengths}</p>
                    </div>
                  </div>

                  {/* Gaps & Suggestions - Amber */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                      <h3 className="text-lg font-semibold text-amber-700">Areas to Explore Deeper</h3>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <p className="text-amber-800 leading-relaxed">{feedback.gaps}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                  <Button
                    onClick={() => {
                      setShowFeedback(false);
                      setExplanation("");
                    }}
                    variant="outline"
                    size="lg"
                  >
                    Try Again
                  </Button>
                  <Button
                    onClick={() => {
                      setSelectedTopic("");
                      setShowFeedback(false);
                      setExplanation("");
                    }}
                    size="lg"
                  >
                    Choose Different Topic
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviser;
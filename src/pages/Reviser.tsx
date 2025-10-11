import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Lightbulb,
  MessageCircle,
  Send,
  Award,
  AlertCircle,
  User,
  Sparkles,
  BookOpen,
  Mic,
  Download,
  Clock,
  ArrowLeft,
  Star,
  ThumbsUp,
  Bot,
  ChevronDown,
  HelpCircle,
  Paperclip,
  CheckCircle,
  TriangleAlert,
  ArrowRight,
  FileSpreadsheet
} from "lucide-react";
import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface FeedbackSection {
  title: string;
  content: string[];
  type: 'strengths' | 'gaps' | 'nextSteps';
  icon: React.ReactNode;
  color: string;
}

const Reviser = () => {
  const { username } = useAuth();
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
  const [feedbackSections, setFeedbackSections] = useState<FeedbackSection[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [showTopicConfirmation, setShowTopicConfirmation] = useState(false);
  const [autoSave, setAutoSave] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSocraticQuestion, setCurrentSocraticQuestion] = useState("");
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Timer functionality
  useEffect(() => {
    if (timerActive) {
      timerRef.current = setInterval(() => {
        setSessionTime(prev => prev + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timerActive]);

  // Auto-save functionality
  useEffect(() => {
    if (explanation.trim()) {
      setAutoSave(true);
      const saveTimer = setTimeout(() => {
        setAutoSave(false);
      }, 2000);
      return () => clearTimeout(saveTimer);
    }
  }, [explanation]);

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setShowTopicConfirmation(true);
    setShowFeedback(false);
    setExplanation("");
    setFeedbackSections([]);
    setSessionTime(0);
    setCurrentSocraticQuestion("");
    
    // Hide confirmation after 3 seconds
    setTimeout(() => setShowTopicConfirmation(false), 3000);
  };

  const handleSubmitExplanation = () => {
    if (explanation.trim() && selectedTopic) {
      setShowFeedback(true);
      setTimerActive(false);

      // Generate structured feedback
      const strengths = [
        `You broke down ${selectedTopic.toLowerCase()} into simple, understandable parts`,
        `Your explanation showed genuine curiosity about the topic`,
        `You used clear language that even a child could follow`
      ];

      const gaps = [
        `The explanation could explore what happens when ${selectedTopic.toLowerCase()} doesn't work as expected`,
        `Consider explaining why this concept is important in everyday life`,
        `Think about the real-world applications of this principle`,
        `What would happen if this process didn't exist?`
      ];

      const nextSteps = [
        `To close the loop on Gap 1, can you re-explain the concept without using technical jargon?`,
        `For Gap 2, how does this connect to things we experience every day?`,
        `To address Gap 3, can you think of a simple experiment that demonstrates this?`
      ];

      setFeedbackSections([
        {
          title: "What You Nailed!",
          content: strengths,
          type: 'strengths',
          icon: <CheckCircle className="w-5 h-5 text-green-600" />,
          color: 'bg-green-50 border-green-200'
        },
        {
          title: "The Gaps in Your Thinking",
          content: gaps,
          type: 'gaps',
          icon: <TriangleAlert className="w-5 h-5 text-amber-600" />,
          color: 'bg-amber-50 border-amber-200'
        },
        {
          title: "Your Next Steps",
          content: nextSteps,
          type: 'nextSteps',
          icon: <ArrowRight className="w-5 h-5 text-blue-600" />,
          color: 'bg-blue-50 border-blue-200'
        }
      ]);
    }
  };

  const handleSocraticReExplain = (question: string) => {
    setCurrentSocraticQuestion(question);
    setExplanation("");
    setShowFeedback(false);
    setTimerActive(true);
    
    // Scroll to input
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, this would start/stop speech recognition
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const exportToSheets = () => {
    alert("Export functionality would save this analysis to Google Sheets here!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 h-16">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Left: Logo and Back Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors hover:drop-shadow-[0_0_6px_rgba(0,123,255,0.3)] p-2 rounded-lg hover:bg-gray-50"
              aria-label="Go back to previous page"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Back</span>
            </button>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">AI Study Buddy</span>
            </div>
          </div>

          {/* Center: Mode Indicator */}
          <div className="text-center hidden sm:block">
            <h1 className="text-base sm:text-lg font-bold text-gray-900">Reviser Mode: Feynman Challenge</h1>
            <p className="text-xs text-gray-600">Explain simply - get structured feedback</p>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden p-2 rounded-lg hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <div className={`w-4 h-0.5 bg-gray-600 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-4 h-0.5 bg-gray-600 transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-4 h-0.5 bg-gray-600 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>

          {/* Right: User Profile and Mode Switcher */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-purple-600 hover:text-purple-700 p-2"
                aria-label="Switch learning mode"
              >
                Switch Mode
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-700"
                aria-label="User profile"
              >
                {username?.charAt(0).toUpperCase() || 'U'}
              </div>
              <span className="text-sm text-gray-700 hidden sm:block max-w-20 truncate">{username || 'User'}</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="text-center mb-4">
                <h1 className="text-lg font-bold text-gray-900">Reviser Mode: Feynman Challenge</h1>
                <p className="text-sm text-gray-600">Explain simply - get structured feedback</p>
              </div>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Dashboard
                </button>
                <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Readalong
                </button>
                <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  AI Tutor
                </button>
                <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  AI Coach
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-8 min-h-screen">
        <div className="container mx-auto px-4 py-4 sm:py-8">
          {/* Topic Selector */}
          {!selectedTopic && (
            <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 sm:w-16 h-12 sm:w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Lightbulb className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Choose Your Challenge</h2>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Select a topic to explain using the Feynman Technique</p>
                  
                  <Select onValueChange={handleTopicSelect}>
                    <SelectTrigger 
                      className="w-full max-w-md mx-auto h-10 sm:h-12 border-gray-300 text-gray-700"
                      aria-label="Select a topic to explain"
                    >
                      <SelectValue placeholder="Choose a topic from your PDF..." />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTopics.map((topic) => (
                        <SelectItem key={topic} value={topic} className="flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-purple-500" />
                          <span className="font-medium">{topic}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Topic Confirmation Toast */}
          {showTopicConfirmation && (
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg px-6 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <span className="text-yellow-800 font-medium">Great! Let's start the Feynman Challenge.</span>
                </div>
              </div>
            </div>
          )}

          {/* Dual Column Interface */}
          {selectedTopic && (
            <div className="grid lg:grid-cols-[55%_45%] gap-8 max-w-7xl mx-auto">
              {/* Left Column: Explanation Space (55%) */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-6">
                {/* Topic Header */}
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-blue-600 mb-2">
                    Feynman Challenge: {selectedTopic}
                  </h1>
                  <p className="text-gray-600 italic">Explain to me</p>
                </div>

                {/* The Prompt */}
                <div className="flex items-center gap-3 mb-6 p-4 bg-white rounded-lg border border-gray-200">
                  <User className="w-6 h-6 text-purple-600" />
                  <p className="text-gray-700">
                    Explain this concept to me as if I were a bright 8-year-old. I'm curious!
                  </p>
                </div>

                {/* Input Area */}
                <div className="space-y-4">
                  <Textarea
                    ref={inputRef}
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    placeholder={`Start your explanation here... For example: "${selectedTopic} is when..."`}
                    className="min-h-[300px] p-6 border-2 border-gray-300 rounded-lg resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-lg"
                    autoFocus
                    aria-label="Explanation area for Feynman challenge"
                  />

                  {/* Character Count and Auto-save */}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{explanation.length} characters</span>
                    {autoSave && (
                      <div className="flex items-center gap-1 text-green-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Saving...</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      onClick={toggleRecording}
                      size="lg"
                      className={`flex-1 ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-all`}
                      disabled={showFeedback}
                      aria-label={isRecording ? "Stop recording voice input" : "Start voice to text recording"}
                    >
                      <Mic className="w-5 h-5 mr-2" />
                      {isRecording ? 'Stop Recording' : 'Voice to Text'}
                    </Button>

                    <Button
                      onClick={handleSubmitExplanation}
                      size="lg"
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!explanation.trim() || showFeedback}
                      aria-label="Submit explanation for analysis"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Listen and Analyze
                    </Button>
                  </div>

                  {/* Socratic Question Display */}
                  {currentSocraticQuestion && (
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <ArrowRight className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold text-blue-800">Your Socratic Challenge</h3>
                      </div>
                      <p className="text-blue-700 mb-3">{currentSocraticQuestion}</p>
                      <p className="text-sm text-blue-600">Explain this concept to address the question above.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: AI Feedback Loop (45%) */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                {!showFeedback ? (
                  /* Initial State */
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                      <FileSpreadsheet className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Ready for Analysis</h3>
                    <p className="text-gray-500 mb-6">
                      Submit your explanation to reveal your learning gaps and personalized next steps.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Analysis will appear here</span>
                    </div>
                  </div>
                ) : (
                  /* Post-Submission State */
                  <div className="space-y-6">
                    {/* Title Bar */}
                    <div className="text-center border-b border-gray-200 pb-4">
                      <h2 className="text-xl font-bold text-purple-600">Your Feynman Analysis</h2>
                      <p className="text-sm text-gray-600 mt-1">Personalized learning insights</p>
                    </div>

                    {/* Feedback Sections */}
                    {feedbackSections.map((section, index) => (
                      <Card key={section.type} className={`${section.color} border-2 rounded-lg p-5`}>
                        <div className="flex items-start gap-3 mb-4">
                          {section.icon}
                          <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
                        </div>
                        <ul className="space-y-3">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                                section.type === 'strengths' ? 'bg-green-500' : 
                                section.type === 'gaps' ? 'bg-amber-500' : 'bg-blue-500'
                              }`}></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Re-explain Button for Next Steps */}
                        {section.type === 'nextSteps' && (
                          <div className="mt-4 pt-4 border-t border-gray-300">
                            <p className="text-sm text-gray-600 mb-3">Choose a question to explore:</p>
                            <div className="flex flex-wrap gap-2">
                              {section.content.map((item, itemIndex) => (
                                <Button
                                  key={itemIndex}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleSocraticReExplain(item)}
                                  className="text-xs border-blue-300 text-blue-700 hover:bg-blue-50"
                                >
                                  Re-Explain Now
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                      </Card>
                    ))}

                    {/* Export Button */}
                    <div className="pt-4 border-t border-gray-200">
                      <Button
                        onClick={exportToSheets}
                        variant="outline"
                        className="w-full border-blue-300 text-blue-700 hover:bg-blue-50"
                        aria-label="Export analysis to Google Sheets"
                      >
                        <FileSpreadsheet className="w-4 h-4 mr-2" />
                        Export to Sheets
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-xs sm:text-sm text-gray-700">Session: {formatTime(sessionTime)}</span>
            </div>
            
            <p className="text-xs sm:text-sm italic text-gray-600 text-center sm:text-left">
              "The best way to learn is to teach. The best way to teach is to simplify."
            </p>
            
            <button 
              className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1"
              aria-label="Get help with Feynman technique"
            >
              <HelpCircle className="w-3 h-3" />
              <span>Need help?</span>
            </button>
          </div>
        </div>
      </footer>

      <Footer />
    </div>
  );
};

export default Reviser;
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Bot, Star, CheckCircle, BookOpen, HelpCircle, ChevronRight, Award, Lightbulb, Send, MessageCircle, Zap } from "lucide-react";
import { useState } from "react";

const Tutor = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "ai",
      content: "Welcome to your AI tutoring session! I'm excited to help you master algebraic concepts. Let's start with the fundamentals of variables and expressions.",
      timestamp: new Date(),
      type: "text"
    },
    {
      id: 2,
      role: "ai",
      content: "## Variables in Algebra\n\nVariables are the foundation of algebraic thinking. They represent **unknown quantities** that we can solve for, manipulate, and use to express mathematical relationships.\n\n**Key characteristics:**\n- Represent unknown values (like x, y, z)\n- Can change or vary\n- Allow us to generalize mathematical concepts\n- Essential for solving real-world problems",
      timestamp: new Date(),
      type: "structured"
    },
    {
      id: 3,
      role: "ai",
      content: "Consider this example: In the equation **2x + 5 = 15**, the letter 'x' represents an unknown value. We can solve for x by isolating it on one side of the equation.\n\n**Solution steps:**\n1. Subtract 5 from both sides: 2x = 10\n2. Divide both sides by 2: x = 5\n\nThe variable allowed us to find the unknown value!",
      timestamp: new Date(),
      type: "example"
    },
    {
      id: 4,
      role: "ai",
      content: "Now that we've covered the basics of variables, why do you think they're so important in mathematics? Share your thoughts!",
      timestamp: new Date(),
      type: "question"
    }
  ]);

  const [input, setInput] = useState("");
  const [points, setPoints] = useState(0);
  const [currentTopic, setCurrentTopic] = useState("Module 1: Variables & Expressions");
  const [progress, setProgress] = useState(25);

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      const userMessage = {
        id: messages.length + 1,
        role: "user",
        content: input,
        timestamp: new Date(),
        type: "text"
      };

      setMessages([...messages, userMessage]);

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          role: "ai",
          content: "Excellent insight! Variables are indeed fundamental because they allow us to:\n\n• **Generalize patterns** - Instead of solving each specific case\n• **Model real-world situations** - Like speed, distance, and time relationships\n• **Create predictive equations** - Essential for science, engineering, and economics\n\n+10 points for your thoughtful response! 🎉",
          timestamp: new Date(),
          type: "feedback"
        };

        setMessages(prev => [...prev, aiResponse]);
        setPoints(prev => prev + 10);
        setProgress(prev => Math.min(100, prev + 25));
      }, 1000);

      setInput("");
    }
  };

  const handleRaiseDoubt = () => {
    setInput("I have a question about this concept...");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Persistent Topic/Progress Header */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-10">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-teal-600" />
                <span className="font-semibold text-slate-800">{currentTopic}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-slate-600">{points} points</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600">Progress</span>
              <div className="w-40 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-500 transition-all duration-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm text-slate-600 w-8">{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout with Sidebar */}
      <div className="flex h-screen pt-20 pb-32">
        {/* Left Sidebar - 20% */}
        <div className="w-80 bg-white border-r border-slate-200 flex flex-col">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-800 mb-1">Course Modules</h2>
            <p className="text-sm text-slate-600">Basics of Algebra</p>
          </div>

          {/* Course Structure */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {[
                { id: 1, title: "Variables & Expressions", completed: true },
                { id: 2, title: "Linear Equations", completed: true },
                { id: 3, title: "Quadratic Equations", completed: false },
                { id: 4, title: "Systems of Equations", completed: false },
                { id: 5, title: "Polynomials", completed: false },
              ].map((module) => (
                <div
                  key={module.id}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    module.id === 1 ? 'bg-teal-50 border border-teal-200' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${
                    module.completed ? 'bg-emerald-400' : 'bg-slate-300'
                  }`} />
                  <span className={`flex-1 text-sm ${
                    module.id === 1 ? 'text-teal-700 font-medium' : 'text-slate-700'
                  }`}>
                    {module.title}
                  </span>
                  {module.completed && (
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Conversation Panel - 80% of screen */}
        <div className="flex-1 pt-4">
          <div className="h-full px-6">
            <Card className="h-full bg-white/80 backdrop-blur-sm border-slate-200/50">
                <CardContent className="p-0 h-full flex flex-col">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-3xl ${message.role === 'user' ? 'order-2' : 'order-1'}`}>
                        {/* AI Teacher Bubble */}
                        {message.role === 'ai' && (
                          <div className="bg-teal-50 border border-teal-200 rounded-2xl rounded-tl-md p-4 mb-2">
                            {message.type === 'structured' && (
                              <div className="prose prose-sm max-w-none">
                                <div
                                  className="text-slate-800"
                                  dangerouslySetInnerHTML={{
                                    __html: message.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                      .replace(/\•/g, '•')
                                      .replace(/\n\n/g, '</p><p>')
                                      .replace(/\n/g, '<br>')
                                  }}
                                />
                              </div>
                            )}
                            {message.type === 'example' && (
                              <div className="space-y-3">
                                <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-lg">
                                  <p className="text-sm text-slate-700 font-medium mb-2">Example Problem:</p>
                                  <div className="font-mono text-slate-800">{message.content}</div>
                                </div>
                              </div>
                            )}
                            {message.type === 'question' && (
                              <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                  <HelpCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                  <p className="text-slate-800 font-medium">{message.content}</p>
                                </div>
                              </div>
                            )}
                            {message.type === 'feedback' && (
                              <div className="space-y-3">
                                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                                  <div className="flex items-center gap-2 text-emerald-700 mb-2">
                                    <Award className="w-4 h-4" />
                                    <span className="font-medium">Excellent response!</span>
                                  </div>
                                  <div
                                    className="text-sm text-emerald-800"
                                    dangerouslySetInnerHTML={{
                                      __html: message.content.replace(/^\w+/, '').replace(/\n\n/g, '</p><p>')
                                    }}
                                  />
                                </div>
                              </div>
                            )}
                            {message.type === 'text' && (
                              <p className="text-slate-800">{message.content}</p>
                            )}
                          </div>
                        )}

                        {/* Student Response Bubble */}
                        {message.role === 'user' && (
                          <div className="bg-slate-600 text-white rounded-2xl rounded-tr-md p-4 mb-2">
                            <p className="text-sm">{message.content}</p>
                          </div>
                        )}

                        {/* Timestamp */}
                        <div className={`text-xs text-slate-500 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fixed Input Bar at Bottom */}
                <div className="border-t border-slate-200 bg-white p-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-end gap-3">
                      <div className="flex-1 relative">
                        <textarea
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Ask a question or share your thoughts..."
                          className="w-full min-h-[60px] max-h-32 p-4 pr-12 border border-slate-300 rounded-xl resize-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSend();
                            }
                          }}
                          rows={2}
                        />
                        <Button
                          onClick={handleRaiseDoubt}
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 bottom-2 text-slate-400 hover:text-teal-600"
                        >
                          <HelpCircle className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        onClick={handleSend}
                        size="lg"
                        className="px-6 py-3 h-auto"
                        disabled={!input.trim()}
                      >
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                      <span>Press Enter to send, Shift+Enter for new line</span>
                      <span>💡 Tip: Ask questions anytime to get instant help</span>
                    </div>
                  </div>
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

export default Tutor;
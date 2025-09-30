import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, MessageCircle, Lightbulb, ChevronLeft, ChevronRight, Search, Bot, Sparkles } from "lucide-react";
import { useState } from "react";

const Readalong = () => {
  const [highlightedText, setHighlightedText] = useState("");
  const [explanation, setExplanation] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleHighlight = (text: string) => {
    setHighlightedText(text);
    setExplanation("Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose. This process requires chlorophyll, sunlight, water, and carbon dioxide. The chemical equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂");
  };

  const handleChatSend = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, {
        user: chatInput,
        ai: "That's an excellent question! Chlorophyll is a pigment that absorbs light energy, primarily in the blue and red wavelengths. The green light is reflected, which is why plants appear green to us."
      }]);
      setChatInput("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Main Readalong Interface */}
      <div className="pt-16 h-screen flex">
        {/* PDF Viewer - 65-70% of screen */}
        <div className="flex-1 bg-white flex flex-col">
          {/* PDF Controls */}
          <div className="border-b border-slate-200 bg-white px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Search className="w-4 h-4 text-teal-600" />
                <span>Search document...</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => setCurrentPage(p => Math.max(1, p-1))} className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm text-slate-600">Page {currentPage} of 10</span>
                <Button variant="ghost" size="sm" onClick={() => setCurrentPage(p => Math.min(10, p+1))} className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* PDF Content */}
          <div className="flex-1 overflow-auto p-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-100 p-8 rounded-lg mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Chapter 1: Biology Basics</h2>

                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p className="text-lg">
                    Photosynthesis is a fundamental biological process that sustains life on Earth.
                    Through this process, green plants and other organisms convert light energy into chemical energy.
                  </p>

                  <p
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      highlightedText
                        ? 'bg-emerald-100 border-l-4 border-emerald-400'
                        : 'hover:bg-slate-50'
                    }`}
                    onClick={() => handleHighlight("Photosynthesis is the process by which plants convert light energy into chemical energy.")}
                  >
                    {highlightedText || "Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose. This process requires chlorophyll, sunlight, water, and carbon dioxide."}
                  </p>

                  <p>
                    The significance of photosynthesis extends far beyond individual plants. It produces oxygen,
                    forms the base of most food chains, and has shaped the Earth's atmosphere over billions of years.
                  </p>

                  <p>
                    Understanding photosynthesis is crucial for fields ranging from agriculture to climate science,
                    as it represents one of nature's most efficient solar energy conversion systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Sidebar - 30-35% of screen */}
        <div className="w-96 bg-slate-100 border-l border-slate-200 flex flex-col">
          {/* Explanation Box */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <h3 className="font-semibold text-teal-700">Concept Breakdown</h3>
            </div>

            {highlightedText ? (
              <div className="bg-white p-4 rounded-lg border border-emerald-100">
                <p className="text-sm text-slate-700 leading-relaxed">{explanation}</p>
                <div className="mt-3 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-teal-600" />
                  <span className="text-xs text-teal-600 font-medium">AI Explanation</span>
                </div>
              </div>
            ) : (
              <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                <Lightbulb className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-slate-500">Highlight any text to see an AI explanation</p>
              </div>
            )}
          </div>

          {/* Chat Interface */}
          <div className="flex-1 p-6">
            <h3 className="font-semibold text-slate-800 mb-4">Ask Follow-up Questions</h3>

            {/* Chat Messages */}
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              {chatMessages.length === 0 && !highlightedText && (
                <div className="text-center py-8">
                  <MessageCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">Ask questions about the content</p>
                </div>
              )}

              {chatMessages.map((msg, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-teal-800 text-white p-3 rounded-lg max-w-xs">
                      <p className="text-sm">{msg.user}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-200 p-3 rounded-lg max-w-xs">
                      <div className="flex items-center gap-2 mb-1">
                        <Bot className="w-3 h-3 text-teal-600" />
                        <span className="text-xs text-teal-600 font-medium">AI Assistant</span>
                      </div>
                      <p className="text-sm text-slate-700">{msg.ai}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="border-t border-slate-200 pt-4">
              <div className="flex gap-2">
                <Input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask a question..."
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                  className="flex-1"
                />
                <Button onClick={handleChatSend} size="sm" className="px-3">
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Readalong;
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Calendar, BarChart3, Flame, Clock, Check, X, Play, TrendingUp, Target, BookOpen, Bell, Plus } from "lucide-react";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

const Coach = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'practice'>('dashboard');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(7);

  // Chart data for visualizations
  const masteryData = [
    { name: "Mastered", value: 68, color: "#0891b2" },
    { name: "Needs Review", value: 32, color: "#e2e8f0" }
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

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["A. Berlin", "B. Madrid", "C. Paris", "D. Rome"],
      correct: 2,
      explanation: "Paris is the capital and largest city of France."
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["A. Venus", "B. Mars", "C. Jupiter", "D. Saturn"],
      correct: 1,
      explanation: "Mars is called the Red Planet because of its reddish appearance due to iron oxide on its surface."
    },
    {
      question: "What is 2 + 2?",
      options: ["A. 3", "B. 4", "C. 5", "D. 6"],
      correct: 1,
      explanation: "Basic arithmetic: 2 + 2 equals 4."
    }
  ];

  const studyNudges = [
    { id: 1, title: "Review Chapter 3", time: "Today at 7 PM", type: "review" },
    { id: 2, title: "Practice Quiz", time: "Tomorrow at 2 PM", type: "quiz" },
    { id: 3, title: "Weak Topics Review", time: "Friday at 10 AM", type: "review" }
  ];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
    if (index === questions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setStreak(prev => prev + 1);
      setCurrentView('dashboard');
    }
  };

  if (currentView === 'practice') {
    const q = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
      return (
        <div className="min-h-screen bg-slate-50">
          <Navbar />
          <div className="pt-20 pb-16 min-h-screen flex items-center justify-center p-6">
            <Card className="border-2 shadow-xl bg-white/95 backdrop-blur-sm max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Quiz Complete!</h2>
                <p className="text-slate-600 mb-6">Final Score: {Math.round((score / questions.length) * 100)}%</p>
                <Button onClick={() => setCurrentView('dashboard')} size="lg">
                  Return to Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
          <Footer />
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {currentView === 'dashboard' ? (
        /* Exam Tracker Dashboard */
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-6 py-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Exam Coach Dashboard</h1>
              <p className="text-xl text-slate-600">Track your progress and practice systematically</p>
            </div>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Mastery Meter */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold mb-2">Concept Mastery</h3>
                    <div className="text-3xl font-bold text-teal-600">68% Mastered</div>
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
                    <div className="text-sm text-slate-600">MCQ Practice Scores</div>
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
                        stroke="#0891b2"
                        strokeWidth={3}
                        dot={{ fill: "#0891b2", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Study Schedule & Nudges */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-500" />
                    Study Goals
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Daily Practice</span>
                      <span className="text-sm font-medium">4/5 days</span>
                    </div>
                    <Progress value={80} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Weekly Quizzes</span>
                      <span className="text-sm font-medium">2/3 completed</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    Practice Streak
                  </h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{streak}</div>
                    <div className="text-sm text-slate-600">Days in a row</div>
                    <div className="w-full bg-orange-100 rounded-full h-3 mt-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-emerald-500" />
                    Study Nudges
                  </h3>
                  <div className="space-y-3">
                    {studyNudges.map((nudge) => (
                      <div key={nudge.id} className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                        <h4 className="font-medium text-sm text-emerald-800">{nudge.title}</h4>
                        <p className="text-xs text-emerald-600 mt-1">{nudge.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Start Practice Button */}
            <div className="text-center">
              <Button
                onClick={() => setCurrentView('practice')}
                size="lg"
                className="px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Practice Session
              </Button>
            </div>
          </div>
        </div>
      ) : (
        /* Practice Session Interface */
        <div className="pt-20 pb-16 min-h-screen flex items-center justify-center p-6">
          <Card className="border-2 shadow-xl bg-white/95 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-8">
              {/* Question Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-sm text-slate-600">Question {currentQuestion + 1} of {questions.length}</span>
                  <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-500 transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 leading-relaxed">{questions[currentQuestion].question}</h2>
              </div>

              {/* Answer Options - Button Tiles */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                {questions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = showFeedback && index === questions[currentQuestion].correct;
                  const isWrong = showFeedback && isSelected && !isCorrect;

                  return (
                    <Button
                      key={index}
                      variant={isCorrect ? "default" : isWrong ? "destructive" : isSelected ? "secondary" : "outline"}
                      className={`justify-start h-16 p-6 text-left text-lg font-medium transition-all duration-200 ${
                        isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                        isWrong ? 'border-red-500 bg-red-50 text-red-700' :
                        isSelected ? 'border-teal-500 bg-teal-50 text-teal-700' : 'hover:bg-slate-50'
                      }`}
                      onClick={() => !showFeedback && handleAnswer(index)}
                      disabled={showFeedback}
                    >
                      <span className="text-xl font-bold mr-4 min-w-[2rem]">{option.charAt(0)}</span>
                      <span className="flex-1">{option.slice(2)}</span>
                      {showFeedback && index === questions[currentQuestion].correct && (
                        <Check className="w-6 h-6 text-emerald-600 ml-2" />
                      )}
                      {showFeedback && isWrong && (
                        <X className="w-6 h-6 text-red-600 ml-2" />
                      )}
                    </Button>
                  );
                })}
              </div>

              {/* Feedback Section */}
              {showFeedback && (
                <div className="mb-8">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className={`w-3 h-3 rounded-full mt-1 ${
                        selectedAnswer === questions[currentQuestion].correct ? 'bg-emerald-400' : 'bg-red-400'
                      }`} />
                      <div>
                        <p className="text-sm text-slate-600 mb-2">Explanation:</p>
                        <p className="text-slate-700">{questions[currentQuestion].explanation}</p>
                        {selectedAnswer === questions[currentQuestion].correct ? (
                          <p className="text-emerald-600 font-medium mt-2">Correct! Well done!</p>
                        ) : (
                          <p className="text-red-600 font-medium mt-2">
                            Not quite. The correct answer is {String.fromCharCode(65 + questions[currentQuestion].correct)}.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="text-center">
                {showFeedback ? (
                  <Button onClick={handleNext} size="lg" className="px-8">
                    {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Quiz"}
                  </Button>
                ) : (
                  <p className="text-slate-500">Select an answer to continue</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Coach;
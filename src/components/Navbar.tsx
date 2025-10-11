import { Button } from "@/components/ui/button";
import { ChevronDown, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 bg-transparent border-none cursor-pointer"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-slate-800 hover:text-primary transition-colors">Membrain AI</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {isAuthenticated && (
              <>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => navigate("/readalong")}
                  className="text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  Readalong
                </button>
                <button
                  onClick={() => navigate("/tutor")}
                  className="text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  AI Tutor
                </button>
                <button
                  onClick={() => navigate("/reviser")}
                  className="text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  Revisor
                </button>
                <button
                  onClick={() => navigate("/coach")}
                  className="text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  AI Coach
                </button>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <User className="w-4 h-4" />
                <span>Welcome, {username}</span>
              </div>
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Button variant="ghost" className="hidden sm:inline-flex" onClick={() => navigate("/login")}>
                LOG IN
              </Button>
              <Button variant="accent" className="font-semibold" onClick={() => navigate("/login")}>
                GET STARTED
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

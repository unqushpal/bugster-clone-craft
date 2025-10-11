const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-slate-800">Membrain AI</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-800 transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors font-medium">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors font-medium">
              Documentation
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors font-medium">
              Contact
            </a>
          </div>

          <p className="text-sm text-slate-600 font-medium">
            © 2025 Membrain AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

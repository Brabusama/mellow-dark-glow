import CursorLight from "@/components/CursorLight";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced cursor lighting */}
      <CursorLight />
      
      {/* $DARK ticker */}
      <Ticker />
      
      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8">
          {/* Logo - supports GIF */}
          <Logo className="mb-8" />
          
          {/* Barely visible central element */}
          <div className="w-64 h-64 mx-auto relative">
            <div className="absolute inset-0 bg-dark-accent rounded-full opacity-20"></div>
          </div>
          
          {/* Hidden branding - barely visible */}
          <div className="space-y-4 opacity-10">
            <h1 className="text-6xl font-bold text-dark-text font-mono tracking-wider">
              $DARK
            </h1>
            <p className="text-xl text-dark-text font-medium opacity-50">
              Enter the Dark Side of DeFi
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer with social links */}
      <Footer />
      
      {/* Background gradient overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-radial from-dark-glow/5 via-transparent to-transparent -z-10"></div>
    </div>
  );
};

export default Index;

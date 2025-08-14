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
          
          {/* Central glowing orb */}
          <div className="glow-orb w-64 h-64 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-dark-accent via-dark-glow to-dark-accent rounded-full opacity-80"></div>
          </div>
          
          {/* Dark token branding */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-dark-glow font-mono tracking-wider dark-glow">
              $DARK
            </h1>
            <p className="text-xl text-dark-text font-medium">
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

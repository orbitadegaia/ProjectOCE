import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import oceLogo from "@/assets/oce-logo-horizontal.png";
import spaceBackground from "@/assets/space-background.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Space Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${spaceBackground})` }}
      />

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 py-12 sm:p-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
            {/* Logo */}
            <div className="flex items-center justify-center mb-6 sm:mb-8 animate-scale-in">
              <img 
                src={oceLogo} 
                alt="Orbit Credits Exchange" 
                className="h-26 sm:h-42 md:h-52 lg:h-62 w-auto drop-shadow-2xl"
              />
            </div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Discover the Future of LEO
                <span className="block mt-2 bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent animate-pulse">
                  with OCE
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-2">
                The First Marketplace for Low Earth Orbit Sustainability
              </p>
            </div>

            {/* Description */}
            <div className="bg-black/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto border border-white/10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                Trade orbital credits, finance debris removal, and lead space ESG compliance. 
                A revolutionary solution to make space sustainable for the next generations.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center items-center pt-2 sm:pt-4 px-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button
                onClick={() => navigate("/dashboard")}
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg rounded-lg shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all"
              >
                Start Simulation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 max-w-4xl mx-auto px-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="bg-black/40 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10 hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">34,000+</div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base">Tracked Debris</div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10 hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">100%</div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base">Real-time Simulation</div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10 hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">LEO</div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base">Sustainability Focus</div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400 px-4 animate-fade-in" style={{ animationDelay: "1s" }}>
              <p>Secure connection to the LEO sustainability network</p>
              <p className="mt-1">All data is simulated for demonstration purposes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

import heroImage from "@assets/stock_images/happy_children_learn_13113239.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function ModernHero() {
  return (
    <div className="relative w-full overflow-hidden" data-testid="hero-background">
      {/* Hero Image with Ken Burns Animation */}
      <img
        src={heroImage}
        alt="Shree Balaji Foundation"
        className="w-full h-[500px] object-cover object-top animate-ken-burns"
        data-testid="img-hero"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-3xl">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 drop-shadow-lg animate-fade-in-down" 
            data-testid="text-hero-title"
          >
            Shree Balaji Foundation
          </h1>
          <p 
            className="text-sm md:text-base lg:text-lg mb-6 opacity-90 animate-fade-in delay-200" 
            data-testid="text-hero-description"
          >
            Empowering Communities, Transforming Lives
          </p>
          <div className="animate-scale-in delay-400">
            <Link href="/contact">
              <Button 
                size="sm" 
                variant="secondary"
                className="text-sm px-6 py-2"
                data-testid="button-donate"
              >
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
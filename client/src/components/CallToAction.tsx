import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/60 animate-gradient"
        data-testid="cta-background"
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-scale-in">
            <Heart className="w-10 h-10 text-white" fill="white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up delay-100">
            Join Us in Making a Difference
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto animate-fade-in-up delay-200">
            Your support can transform lives. Together, we can create a brighter future
            for thousands of families in need.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up delay-300">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
            data-testid="button-donate-now"
          >
            <Heart className="mr-2 w-5 h-5" />
            Donate Now
          </Button>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-2xl"
              data-testid="button-become-volunteer"
            >
              Become a Volunteer
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-400">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover-elevate border border-white/20">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Make a Donation</h3>
            <p className="text-white/80 mb-4">
              Every contribution helps us reach more families in need
            </p>
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-white/10"
              data-testid="button-donate-info"
            >
              Learn More →
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover-elevate border border-white/20">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Partner With Us</h3>
            <p className="text-white/80 mb-4">
              Collaborate on programs that create lasting impact
            </p>
            <Link href="/contact">
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10"
                data-testid="button-partner-info"
              >
                Get in Touch →
              </Button>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover-elevate border border-white/20">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Volunteer</h3>
            <p className="text-white/80 mb-4">
              Share your time and skills to make a difference
            </p>
            <Link href="/contact">
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10"
                data-testid="button-volunteer-info"
              >
                Join Us →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ScrollNavigation() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <div 
      className="fixed right-6 bottom-6 z-40"
      data-testid="scroll-navigation"
    >
      <Button
        size="icon"
        variant="default"
        className="rounded-full shadow-lg bg-orange-500 hover:bg-orange-600 text-white"
        onClick={scrollToTop}
        data-testid="button-scroll-top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
}

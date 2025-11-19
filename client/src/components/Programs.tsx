import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface Program {
  title: string;
  category: string;
  description: string;
  image: string;
}

interface ProgramsProps {
  programs: Program[];
}

export default function Programs({ programs }: ProgramsProps) {
  return (
    <section id="programs" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We run comprehensive programs designed to create lasting impact in education,
            healthcare, and community development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-program-${index}`}>
              <div className="aspect-video overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge className="mb-3">{program.category}</Badge>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {program.description}
                </p>
                <Button
                  variant="ghost"
                  className="group px-0"
                  onClick={() => console.log(`Learn more about ${program.title}`)}
                  data-testid={`button-program-${index}`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

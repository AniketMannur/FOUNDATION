import { PageLayout } from '@/components/PageLayout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Camera, Heart, Users } from 'lucide-react';
import medicalBanner from '@assets/image_1762700142631.png';
import activitiesCollage from '@assets/image_1762700250649.png';
import { ScrollNavigation } from '@/components/ScrollNavigation';

export default function GalleryPage() {
  const highlights = [
    {
      icon: Heart,
      title: 'Medical Services',
      description: 'Free healthcare at marathon events and community camps',
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Educational programs and awareness sessions',
    },
    {
      icon: Camera,
      title: 'Impact Stories',
      description: 'Documenting lives transformed through our work',
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Our Gallery"
        subtitle="Moments That Matter"
        description="A glimpse into our work and the communities we serve. Every image tells a story of hope, compassion, and positive change."
        tagline="Our Journey in Pictures"
        primaryCta={{ label: 'View Our Programs', href: '/programs' }}
        secondaryCta={{ label: 'Get Involved', href: '/contact' }}
      />

      <AnimatedSection background="white">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={highlight.title}
                className={`p-6 text-center hover-elevate opacity-0 animate-fade-in-up delay-${
                  (index + 2) * 100
                }`}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-secondary/80 to-secondary rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="space-y-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Medical Services & Marathon Events
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Our foundation actively participates in public marathons across different cities,
              providing free medical services to runners and participants.
            </p>

            <div className="grid gap-8">
              <Card className="overflow-hidden shadow-xl hover-elevate">
                <img
                  src={medicalBanner}
                  alt="Free Medical Services Provided By Shree Balaji Foundation In Different Public Marathon"
                  className="w-full h-auto"
                  data-testid="img-medical-banner"
                />
              </Card>

              <Card className="overflow-hidden shadow-xl hover-elevate">
                <img
                  src={activitiesCollage}
                  alt="Medical Services at Marathons and Educational Lectures"
                  className="w-full h-auto"
                  data-testid="img-activities-collage"
                />
              </Card>
            </div>

            <Card className="mt-8 p-8 bg-gradient-to-r from-primary/70 to-primary text-white">
              <h3 className="text-2xl font-bold mb-4">Community Health Initiatives</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                From hydration stations to emergency medical care, our dedicated team ensures the
                safety and well-being of all marathon participants. We believe in making healthcare
                accessible to everyone, everywhere.
              </p>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Educational & Awareness Programs
            </h2>

            <Card className="p-8 bg-gray-50 dark:bg-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Empowering Through Knowledge
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                We organize free lectures and awareness sessions for females and students at various
                schools, institutes, and self-help groups. These programs focus on health education,
                personal development, and skill building.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                By empowering individuals with knowledge and skills, we create lasting positive
                impact in communities and help build a better future for all.
              </p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-secondary/80 to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Every Picture Tells a Story</h2>
            <p className="text-white/90 text-lg mb-4 max-w-3xl mx-auto">
              These images showcase the dedication and compassion of our team, the resilience of the
              communities we serve, and the transformative power of our programs.
            </p>
            <p className="text-white/80 max-w-2xl mx-auto">
              From medical camps to educational initiatives, each photograph tells a story of hope,
              empowerment, and positive change.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <ScrollNavigation />
    </PageLayout>
  );
}

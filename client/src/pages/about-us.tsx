import { PageLayout } from '@/components/PageLayout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Heart, Users, Target, Award, Shield, TrendingUp } from 'lucide-react';
import aboutImage from '@assets/download_1762698540874.png';
import { ScrollNavigation } from '@/components/ScrollNavigation';

export default function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We lead with empathy and care for those we serve',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparency and accountability in all our actions',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong, sustainable communities together',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Focused on creating measurable, lasting change',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of service',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Continuously evolving to serve better',
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="About Shree Balaji Foundation"
        subtitle="Making a Difference Since 2015"
        description="Committed to creating positive impact through education, healthcare, women empowerment, and community development programs across India."
        tagline="Our Story"
        primaryCta={{ label: 'View Our Programs', href: '/programs' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      />

      <AnimatedSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Established in 2015, Shree Balaji Foundation has been at the forefront of social change,
            transforming lives through dedicated service and innovative programs.
          </p>
        </div>

        <Card className="overflow-hidden shadow-xl">
          <img
            src={aboutImage}
            alt="Shree Balaji Foundation Description"
            className="w-full h-auto"
            data-testid="img-foundation-description"
          />
        </Card>

        <div className="mt-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Who We Are
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4 max-w-4xl mx-auto text-center">
              Shree Balaji Foundation is a registered non-profit organization committed to making a meaningful 
              impact in the areas of Health, Education, Skill Development, Women Empowerment, Community Development, 
              and Social Development.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto text-center">
              Registered under 12A and 80G of the Income Tax Act, as well as CSR-1 & Niti Aayog, we ensure complete 
              transparency and accountability through regular filing of ITRs and annual audit reports for the past 10 years.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection background="gray" delay={100}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Values
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            The principles that guide our work and define our commitment to the communities we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={value.title}
                className={`p-6 hover-elevate border-2 opacity-0 animate-fade-in-up delay-${
                  (index + 2) * 100
                }`}
                data-testid={`card-${value.title.toLowerCase()}`}
              >
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection background="white" delay={200}>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-green-500 to-green-600 text-white hover-elevate">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              To make a positive impact on society through our multifaceted approach focusing on Health/Medical, 
              Education and Skill Development, Women Empowerment, Community Development, and Social Development. 
              We believe in creating opportunities that enable individuals to build better futures for themselves 
              and their families.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary to-secondary/80 text-gray-900 dark:text-white hover-elevate">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-900/90 dark:text-white/90 text-lg leading-relaxed">
              To create lasting change by addressing critical needs in our communities and uplifting those who 
              need it most through transformative projects. We envision a society where every individual has 
              access to quality healthcare, education, and opportunities for growth.
            </p>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Support Our Work</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            By supporting Shree Balaji Foundation, your CSR funds and donations will contribute directly to 
            transformative projects that uplift communities and create lasting change. Together, we can build 
            a better future for those who need it most.
          </p>
        </Card>
      </AnimatedSection>
      <ScrollNavigation />
    </PageLayout>
  );
}

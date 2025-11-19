import { PageLayout } from '@/components/PageLayout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { GraduationCap, Heart, Users, Building2, Wrench, Leaf, ArrowRight } from 'lucide-react';
import { ScrollNavigation } from '@/components/ScrollNavigation';


import eduImage from '@assets/education_program.png';
import healthImage from '@assets/image_1763015102424.png';
import womenImage from '@assets/image_1763015026425.png';
import communityImage from '@assets/image_1763015571500.png';
import skillImage from '@assets/image_1763015445729.png';
import envImage from '@assets/image_1763015495034.png';

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Quality Education',
      category: 'Education',
      sectorKey: 'education',
      description: 'Providing access to quality education and learning resources for underprivileged children. We focus on holistic development through innovative teaching methods.',
      image: eduImage,
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Healthcare Services',
      category: 'Healthcare',
      sectorKey: 'health',
      description: 'Free medical camps and healthcare services for communities in need. Regular health checkups and awareness programs for preventive care.',
      image: healthImage,
      icon: Heart,
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Women Empowerment',
      category: 'Empowerment',
      sectorKey: 'women-empowerment',
      description: 'Skill development and empowerment programs for women and girls. Creating opportunities for economic independence and leadership.',
      image: womenImage,
      icon: Users,
      color: 'from-pink-500 to-pink-600',
    },
    {
      title: 'Community Development',
      category: 'Community',
      sectorKey: 'community-development',
      description: 'Building sustainable communities through infrastructure and social programs. Strengthening local institutions and community bonds.',
      image: communityImage,
      icon: Building2,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Skill Training',
      category: 'Training',
      sectorKey: 'skill-development',
      description: 'Vocational training programs to enhance employability and self-reliance. Industry-aligned courses for better job prospects.',
      image: skillImage,
      icon: Wrench,
      color: 'from-secondary/80 to-secondary',
    },
    {
      title: 'Environmental Initiatives',
      category: 'Environment',
      sectorKey: 'environment-conservation',
      description: 'Promoting environmental awareness and sustainable practices in communities. Tree plantation drives and waste management programs.',
      image: envImage,
      icon: Leaf,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Our Programs"
        subtitle="Creating Lasting Impact"
        description="Comprehensive initiatives designed to create sustainable impact across communities through education, healthcare, empowerment, and development."
        tagline="What We Do"
        primaryCta={{ label: 'Get Involved', href: '/contact' }}
        secondaryCta={{ label: 'View Impact', href: '/impact' }}
      />

      <AnimatedSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Transforming Lives Through Action
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Our programs are designed to address the most pressing needs of underserved communities,
            creating pathways to sustainable development and empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={program.title}
                className={`overflow-hidden hover-elevate opacity-0 animate-fade-in-up delay-${
                  (index + 2) * 100
                }`}
                data-testid={`card-program-${program.category.toLowerCase()}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-br ${program.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
                      {program.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <Link href={`/sectors/${program.sectorKey}`}>
                    <Button variant="ghost" className="group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection background="gray" delay={100}>
        <div className="bg-gradient-to-r from-primary/70 to-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join us in our mission to create lasting change. Whether through volunteering, donations,
            or partnerships, your support makes a real difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
      <ScrollNavigation />
    </PageLayout>
  );
}

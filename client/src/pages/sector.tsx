import { useRoute } from 'wouter';
import { PageLayout } from '@/components/PageLayout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { GraduationCap, Heart, Palette, Building2, Sprout, Briefcase, Users, HandHeart, CheckCircle2 } from 'lucide-react';
import { ScrollNavigation } from '@/components/ScrollNavigation';

import eduImage from '@assets/education_program.png';
import healthImage from '@assets/WhatsApp Image 2025-11-12 at 8.26.35 PM_1763017196320.jpeg';
import womenImage from '@assets/women empo_1763564384687.jpeg';
import communityImage from '@assets/comminity_1763564420236.jpeg';
import skillImage from '@assets/image_1763015445729.png';
import envImage from '@assets/NGOs-in-Pune-engage-young-people-in-environment-conservation-on-World-Earth-Day-4-1024x538_1763564454000.jpg';
import artImage from '@assets/art_1763564394640.jpeg';
import socialWelfareImage from '@assets/soical welfare_1763564435117.jpeg';

const sectorData: Record<string, { title: string; icon: any; description: string; details: string[]; image?: string; color: string }> = {
  education: {
    title: 'Education',
    icon: GraduationCap,
    description: 'Providing quality education and learning opportunities for underprivileged children across communities.',
    image: eduImage,
    color: 'from-primary to-primary/80',
    details: [
      'Free education programs for underprivileged children',
      'Scholarship programs for deserving students',
      'Digital learning initiatives',
      'Library and resource centers',
      'Teacher training and capacity building',
      'Career guidance and counseling',
    ],
  },
  'women-empowerment': {
    title: 'Women Empowerment',
    icon: Heart,
    description: 'Empowering women through skill development, education, and economic opportunities.',
    image: womenImage,
    color: 'from-pink-500 to-pink-600',
    details: [
      'Vocational training programs',
      'Financial literacy workshops',
      'Self-help group formation',
      'Entrepreneurship development',
      'Leadership training',
      'Women\'s health awareness campaigns',
    ],
  },
  'art-and-culture': {
    title: 'Art and Culture',
    icon: Palette,
    description: 'Preserving and promoting traditional art forms and cultural heritage.',
    image: artImage,
    color: 'from-purple-500 to-purple-600',
    details: [
      'Cultural festivals and events',
      'Traditional art workshops',
      'Heritage preservation initiatives',
      'Support for local artisans',
      'Cultural exchange programs',
      'Documentation of cultural practices',
    ],
  },
  health: {
    title: 'Health',
    icon: HandHeart,
    description: 'Providing accessible healthcare services and promoting wellness in underserved communities.',
    image: healthImage,
    color: 'from-red-500 to-red-600',
    details: [
      'Free medical camps and health check-ups',
      'Mobile healthcare units',
      'Medicine distribution programs',
      'Health awareness campaigns',
      'Preventive healthcare initiatives',
      'Maternal and child health programs',
    ],
  },
  'community-development': {
    title: 'Community Development',
    icon: Building2,
    description: 'Building sustainable and resilient communities through comprehensive development programs.',
    image: communityImage,
    color: 'from-primary/70 to-primary',
    details: [
      'Infrastructure development',
      'Clean water initiatives',
      'Sanitation programs',
      'Community centers',
      'Youth engagement programs',
      'Sports and recreation facilities',
    ],
  },
  'environment-conservation': {
    title: 'Environment Conservation',
    icon: Sprout,
    description: 'Promoting environmental sustainability and conservation through awareness and action.',
    image: envImage,
    color: 'from-green-500 to-green-600',
    details: [
      'Tree plantation drives',
      'Waste management programs',
      'Environmental awareness campaigns',
      'Conservation of natural resources',
      'Renewable energy promotion',
      'Climate change adaptation initiatives',
    ],
  },
  'skill-development': {
    title: 'Skill Development',
    icon: Briefcase,
    description: 'Equipping individuals with market-relevant skills for better employment opportunities.',
    image: skillImage,
    color: 'from-secondary/80 to-secondary',
    details: [
      'Technical and vocational training',
      'Computer and IT skills',
      'Employability enhancement programs',
      'Industry partnerships for placements',
      'Certification courses',
      'Entrepreneurship training',
    ],
  },
  'social-welfare': {
    title: 'Social Welfare',
    icon: Users,
    description: 'Comprehensive welfare programs addressing various social needs and challenges.',
    image: socialWelfareImage,
    color: 'from-primary to-secondary/30',
    details: [
      'Food distribution programs',
      'Elderly care services',
      'Support for differently-abled',
      'Disaster relief and rehabilitation',
      'Legal aid and counseling',
      'Child protection initiatives',
    ],
  },
};

export default function SectorPage() {
  const [, params] = useRoute('/sectors/:sector');
  const sectorKey = params?.sector || '';
  const sector = sectorData[sectorKey];

  if (!sector) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Sector Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400">The sector you're looking for doesn't exist.</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  const Icon = sector.icon;

  return (
    <PageLayout>
      <PageHero
        title={sector.title}
        description={sector.description}
        tagline="Our Focus Areas"
        primaryCta={{ label: 'Get Involved', href: '/contact' }}
        secondaryCta={{ label: 'View All Programs', href: '/programs' }}
      />

      {sector.image && (
        <AnimatedSection background="white">
          <Card className="overflow-hidden shadow-2xl">
            <img
              src={sector.image}
              alt={sector.title}
              className="w-full h-auto max-h-[600px] object-cover"
              data-testid="img-sector-hero"
            />
          </Card>
        </AnimatedSection>
      )}

      <AnimatedSection background={sector.image ? "gray" : "white"} delay={100}>
        <div className="text-center mb-16">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${sector.color} mb-6`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Initiatives
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive programs designed to create lasting impact in {sector.title.toLowerCase()}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sector.details.map((detail, index) => (
            <Card
              key={index}
              className={`p-6 hover-elevate opacity-0 animate-fade-in-up delay-${
                (index + 2) * 100
              }`}
              data-testid={`card-initiative-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${sector.color} flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-900 dark:text-white text-lg font-medium pt-2">{detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection background="white" delay={200}>
        <div className={`bg-gradient-to-r ${sector.color} rounded-2xl p-8 md:p-12 text-white text-center`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in This Mission</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Your support can help us expand our {sector.title.toLowerCase()} programs and reach more
            communities. Together, we can create lasting change.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </a>
            <a href="/programs">
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors">
                View All Programs
              </button>
            </a>
          </div>
        </div>
      </AnimatedSection>
      <ScrollNavigation />
    </PageLayout>
  );
}
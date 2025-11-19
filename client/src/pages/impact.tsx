import { PageLayout } from '@/components/PageLayout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Users, Heart, GraduationCap, Sprout, Building2, Award, TrendingUp, Target } from 'lucide-react';
import { ScrollNavigation } from '@/components/ScrollNavigation';

export default function Impact() {
  const impactStats = [
    {
      icon: Users,
      title: 'Lives Impacted',
      value: '50,000+',
      description: 'People directly benefited from our programs',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: GraduationCap,
      title: 'Students Educated',
      value: '15,000+',
      description: 'Children and youth provided with quality education',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Heart,
      title: 'Healthcare Services',
      value: '25,000+',
      description: 'Free medical checkups and treatments provided',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Award,
      title: 'Skill Training',
      value: '8,000+',
      description: 'Women and youth trained in vocational skills',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Building2,
      title: 'Communities Served',
      value: '100+',
      description: 'Villages and urban areas reached',
      color: 'from-secondary/80 to-secondary',
    },
    {
      icon: Sprout,
      title: 'Environmental Projects',
      value: '50+',
      description: 'Tree plantation and conservation initiatives',
      color: 'from-primary/70 to-primary',
    },
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Foundation Established',
      description: 'Shree Balaji Foundation was founded with a vision to create positive social impact',
    },
    {
      year: '2015',
      title: 'First Major Initiative',
      description: 'Launched comprehensive healthcare program serving 1,000+ families',
    },
    {
      year: '2018',
      title: 'Education Expansion',
      description: 'Expanded to 50+ schools with education and skill development programs',
    },
    {
      year: '2023',
      title: 'Milestone Achievement',
      description: 'Reached 50,000+ beneficiaries across 100+ communities',
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Our Impact"
        subtitle="10 Years of Transformation"
        description="Since 2015, we've been transforming lives and building stronger communities through dedicated service and innovative programs."
        tagline="Making a Difference"
        showStats={true}
      />

      <AnimatedSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Impact By The Numbers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Our work speaks through the lives we've touched and the communities we've empowered.
            Here's a snapshot of our journey so far.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className={`p-8 text-center hover-elevate opacity-0 animate-fade-in-up delay-${
                  (index + 2) * 100
                }`}
                data-testid={`card-impact-${index}`}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
              </Card>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection background="gray" delay={100}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            From humble beginnings to significant impact, here are the milestones that define our story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {milestones.map((milestone, index) => (
            <Card
              key={index}
              className={`p-8 hover-elevate opacity-0 animate-fade-in-up delay-${
                (index + 3) * 100
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/80 to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection background="white" delay={200}>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-primary/70 to-primary text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Commitment</h3>
              </div>
            </div>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              As a registered organization under 12A, 80G, and CSR-1 & Niti Aayog, we maintain the
              highest standards of transparency and accountability.
            </p>
            <p className="text-white/80">
              We have consistently filed our ITRs for the past 10 years and undergone annual audit
              reports, ensuring every donation makes a real difference.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/80 to-secondary text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Looking Ahead</h3>
              </div>
            </div>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              Our multifaceted approach focuses on Health/Medical, Education and Skill Development,
              Women Empowerment, Community Development, and Social Development.
            </p>
            <p className="text-white/80">
              Through CSR funds and donations, we continue to implement transformative projects that
              create lasting change in communities.
            </p>
          </Card>
        </div>
      </AnimatedSection>
      <ScrollNavigation />
    </PageLayout>
  );
}

import { Users, Heart, GraduationCap, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface AboutProps {
  stats?: {
    volunteers: number;
    beneficiaries: number;
    programs: number;
    years: number;
  };
}

export default function About({ stats = { volunteers: 500, beneficiaries: 10000, programs: 15, years: 10 } }: AboutProps) {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We serve with empathy and dedication to uplift every individual',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Knowledge is the foundation for personal and community growth',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Together we build stronger, healthier, and empowered societies',
    },
    {
      icon: TrendingUp,
      title: 'Sustainability',
      description: 'Creating lasting impact through sustainable development programs',
    },
  ];

  const statsData = [
    { label: 'Volunteers', value: stats.volunteers, icon: Users },
    { label: 'Beneficiaries', value: `${(stats.beneficiaries / 1000).toFixed(0)}K+`, icon: Heart },
    { label: 'Programs', value: stats.programs, icon: GraduationCap },
    { label: 'Years', value: stats.years, icon: TrendingUp },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              About Our Foundation
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Shree Balaji Foundation is committed to creating positive change through education,
              healthcare, and community empowerment programs. Founded on the principles of compassion
              and service, we work tirelessly to uplift underprivileged communities.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our mission is to provide equal opportunities for all, breaking barriers through
              sustainable development initiatives that transform lives and build stronger communities.
            </p>
            <div className="font-devanagari text-xl text-primary mt-8">
              सर्वे भवन्तु सुखिनः | सर्वे सन्तु निरामयाः
            </div>
            <p className="text-sm text-muted-foreground mt-2 italic">
              May all be happy, May all be free from illness
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {statsData.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover-elevate" data-testid={`card-stat-${stat.label.toLowerCase()}`}>
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-value-${index}`}>
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

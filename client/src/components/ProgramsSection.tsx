import { BookOpen, Heart, Users, GraduationCap, Utensils, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function ProgramsSection() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education ",
      description:
        "Providing quality education, scholarships, and learning resources to children from underprivileged backgrounds.",
      color: "from-blue-500 to-blue-600",
      beneficiaries: "5,000+",
    },
    {
      icon: Heart,
      title: "Health",
      description:
        "Free medical camps, health checkups, and access to essential healthcare services for rural communities.",
      color: "from-red-500 to-red-600",
      beneficiaries: "3,000+",
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description:
        "Skill development programs and vocational training to empower women for financial independence.",
      color: "from-purple-500 to-purple-600",
      beneficiaries: "2,000+",
    },
    {
      icon: Utensils,
      title: "Nutrition Programs",
      description:
        "Daily meal programs for children and elderly, ensuring no one goes to bed hungry in our communities.",
      color: "from-green-500 to-green-600",
      beneficiaries: "4,000+",
    },
    {
      icon: Home,
      title: "Shelter & Housing",
      description:
        "Building safe homes and providing shelter for homeless families and disaster-affected communities.",
      color: "from-yellow-500 to-yellow-600",
      beneficiaries: "1,500+",
    },
    {
      icon: BookOpen,
      title: "Digital Literacy",
      description:
        "Bridging the digital divide with computer education and internet access for rural youth.",
      color: "from-indigo-500 to-indigo-600",
      beneficiaries: "2,500+",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-lg mb-3 animate-fade-in-up">
            Our Programs
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up delay-100">
            How We Create Impact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto animate-fade-in-up delay-200">
            Our comprehensive programs address the most pressing needs of communities,
            creating sustainable change that lasts for generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className={`group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up delay-${
                  (index + 3) * 100
                } hover:-translate-y-2`}
                data-testid={`card-program-${program.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${program.color}`} />
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {program.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-200 dark:border-gray-700">
                    <div className="space-y-1">
                      <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {program.beneficiaries}
                      </p>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Beneficiaries
                      </p>
                    </div>
                    <Link href="/programs">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary group-hover:bg-primary/10 transition-colors"
                        data-testid={`button-learn-${program.title.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        Learn More →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in-up delay-900">
          <Link href="/programs">
            <Button
              size="lg"
              variant="secondary"
              className="px-8"
              data-testid="button-view-all-programs"
            >
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent & Community Member",
      content:
        "The education support from Shree Balaji Foundation changed my daughter's life. She's now the first in our family to attend college. Forever grateful!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Beneficiary",
      content:
        "The vocational training program gave me the skills I needed to start my own business. Now I can provide for my family with dignity and pride.",
      rating: 5,
    },
    {
      name: "Anita Devi",
      role: "Healthcare Program Beneficiary",
      content:
        "The free medical camp saved my mother's life. The doctors were caring and professional. This foundation truly cares about people's wellbeing.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-lg mb-3 animate-fade-in-up">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up delay-100">
            Stories of Hope & Change
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto animate-fade-in-up delay-200">
            Hear from the lives we've touched and the communities we've transformed together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`hover-elevate border-2 animate-fade-in-up delay-${(index + 3) * 100}`}
              data-testid={`card-testimonial-${testimonial.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-10 h-10 text-secondary/20" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

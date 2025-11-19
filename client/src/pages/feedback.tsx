import { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollNavigation } from '@/components/ScrollNavigation';

export default function Feedback() {
  const { toast } = useToast();

  // Google Form Integration
  const GOOGLE_FORM_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSc9KrKcFOBak26i5TIO_ioDMB5PZzKa4PX-ZmWzo4kmzKvi2w/formResponse';

  const ENTRY_NAME = 'entry.654654473';
  const ENTRY_EMAIL = 'entry.941601014';
  const ENTRY_RATING = 'entry.998776115';
  const ENTRY_CATEGORY = 'entry.898391782';
  const ENTRY_MESSAGE = 'entry.67651029';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    category: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const nameRegex = /^[A-Za-z\s]{3,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateInputs = () => {
    const newErrors: Record<string, string> = {};

    if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Enter a valid full name (letters only, min 3 characters)';
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateInputs()) return;

    const googleFormData = new FormData();
    googleFormData.append(ENTRY_NAME, formData.name);
    googleFormData.append(ENTRY_EMAIL, formData.email);
    googleFormData.append(ENTRY_RATING, formData.rating.toString());
    googleFormData.append(ENTRY_CATEGORY, formData.category);
    googleFormData.append(ENTRY_MESSAGE, formData.message);

    const iframe = document.createElement('iframe');
    iframe.name = 'hidden_iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const tempForm = document.createElement('form');
    tempForm.action = GOOGLE_FORM_URL;
    tempForm.method = 'POST';
    tempForm.target = 'hidden_iframe';

    googleFormData.forEach((value, key) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value.toString();
      tempForm.appendChild(input);
    });

    document.body.appendChild(tempForm);
    tempForm.submit();

    setTimeout(() => {
      toast({
        title: 'Thank you for your feedback!',
        description: 'We appreciate your input and will use it to improve our services.',
      });

      setFormData({
        name: '',
        email: '',
        rating: 5,
        category: '',
        message: '',
      });

      setErrors({ name: '', email: '' });

      iframe.remove();
      tempForm.remove();
    }, 900);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.name === 'rating' ? Number(e.target.value) : e.target.value,
    });
  };

  return (
    <PageLayout>
      <PageHero
        title="Share Your Feedback"
        description="Your opinions help us improve our programs and services."
        tagline="We're Listening"
      />

      <AnimatedSection background="white">
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE INFORMATION */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Why Your Feedback Matters</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Improve Our Services</h3>
                <p className="text-muted-foreground">
                  Your insights help us understand what works well and what needs improvement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Better Community Support</h3>
                <p className="text-muted-foreground">
                  Feedback helps us tailor our services to better meet community needs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Continuous Growth</h3>
                <p className="text-muted-foreground">
                  We're committed to improving constantly — your feedback guides us.
                </p>
              </div>
            </div>

            <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Quick Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Be specific about your experience</li>
                <li>• Share positives & areas for improvement</li>
                <li>• Suggest actionable improvements</li>
                <li>• All feedback is confidential</li>
              </ul>
            </Card>
          </div>

          {/* RIGHT SIDE FORM */}
          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">Feedback Form</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label className="block text-sm font-medium mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your name"
                  required
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="your.email@example.com"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* RATING */}
              <div>
                <label className="block text-sm font-medium mb-2">Overall Rating *</label>

                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="flex-1"
                  />

                  <div className="flex items-center gap-1">
                    {[...Array(formData.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                    {[...Array(5 - formData.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-muted" />
                    ))}
                  </div>
                </div>
              </div>

              {/* CATEGORY */}
              <div>
                <label className="block text-sm font-medium mb-2">Feedback Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Program/Service Quality">Program/Service Quality</option>
                  <option value="Staff Interaction">Staff Interaction</option>
                  <option value="Facility/Infrastructure">Facility/Infrastructure</option>
                  <option value="Website Experience">Website Experience</option>
                  <option value="General Feedback">General Feedback</option>
                  <option value="Suggestion">Suggestion</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium mb-2">Your Feedback *</label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md resize-none"
                  placeholder="Share your thoughts..."
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Feedback
              </Button>
            </form>
          </Card>
        </div>
      </AnimatedSection>

      <ScrollNavigation />
    </PageLayout>
  );
}
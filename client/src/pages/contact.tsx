// @ts-nocheck
import { PageLayout } from '@/components/PageLayout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { ScrollNavigation } from '@/components/ScrollNavigation';

export default function Contact() {

  const GOOGLE_FORM_URL ="https://docs.google.com/forms/d/e/1FAIpQLSeZXNxJ1bZHvzNjtBsoDgmcuVxg6G1KDvNicuTOBzloOv3GWw/formResponse";

  const ENTRY_NAME = "entry.113393804";
  const ENTRY_EMAIL = "entry.815919792";
  const ENTRY_PHONE = "entry.1337825908";
  const ENTRY_SUBJECT = "entry.294220062";
  const ENTRY_MESSAGE = "entry.492987420";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();


  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const nameRegex = /^[A-Za-z\s]{3,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const validateInputs = () => {
    let newErrors = {};

    if (!nameRegex.test(name)) {
      newErrors.name = "Enter a valid full name (letters only, min 3 characters)";
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const formData = new FormData();
    formData.append(ENTRY_NAME, name);
    formData.append(ENTRY_EMAIL, email);
    formData.append(ENTRY_PHONE, phone);
    formData.append(ENTRY_SUBJECT, subject);
    formData.append(ENTRY_MESSAGE, message);

    const iframe = document.createElement("iframe");
    iframe.name = "hidden_iframe";
    iframe.style.display = "none";

    const tempForm = document.createElement("form");
    tempForm.action = GOOGLE_FORM_URL;
    tempForm.method = "POST";
    tempForm.target = "hidden_iframe";

    for (const [key, value] of formData.entries()) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    }

    document.body.appendChild(iframe);
    document.body.appendChild(tempForm);

    tempForm.submit();

   setTimeout(() => {
  toast({
    title: "Message Sent Successfully",
    description: "Thank you for contacting Shree Balaji Foundation. We will get in touch soon!",
    variant: "default",   
  });

  setName("");
  setEmail("");
  setPhone("");
  setSubject("");
  setMessage("");

  document.body.removeChild(iframe);
}, 1000);


    document.body.removeChild(tempForm);
  };


  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: (
        <span
          className="cursor-pointer hover:text-primary"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=contact@shreebalajifoundation.org.in",
              "_blank"
            )
          }
        >
          contact@shreebalajifoundation.org.in
        </span>
      ),
      description: "Send us an email anytime",
      action: null
    },

    {
      icon: Phone,
      title: "Phone",
      value: (
        <div className="flex gap-3 items-center">
          <span
            className="cursor-pointer hover:text-primary"
            onClick={() => (window.location = "tel:+918087678977")}
          >
            +91 8087678977
          </span>

          <span className="opacity-60">|</span>

          <span
            className="cursor-pointer hover:text-primary"
            onClick={() => (window.location = "tel:+918459485202")}
          >
            +91 8459485202
          </span>
        </div>
      ),
      description: "Mon–Fri from 9am to 6pm",
      action: null
    },

    {
      icon: MapPin,
      title: "Address",
      value: "Pune, Maharashtra, India",
      description: "Visit our office",
      action: () =>
        window.open(
          "https://www.google.com/maps/search/?api=1&query=Pune,+Maharashtra,+India",
          "_blank"
        )
    },

    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon–Fri: 9:00 AM – 6:00 PM",
      description: "Saturday: 10:00 AM – 4:00 PM",
      action: null
    }
  ];


  return (
    <PageLayout>
      <PageHero
        title="Get In Touch"
        subtitle="We'd Love to Hear From You"
        description="Have questions about our programs? Want to volunteer or donate? Reach out to us and we'll get back to you as soon as possible."
        tagline="Contact Us"
      />

      <AnimatedSection background="white">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Send us a Message</h2>

            <Card className="p-4 sm:p-6 md:p-8 border-2">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <Label>Full Name *</Label>
                    <Input 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                      data-testid="input-name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Label>Email *</Label>
                    <Input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                      data-testid="input-email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <Label>Phone *</Label>
                  <Input 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                    data-testid="input-phone"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label>Subject *</Label>
                  <Input 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)} 
                    required 
                    data-testid="input-subject"
                  />
                </div>

                <div>
                  <Label>Message *</Label>
                  <Textarea 
                    rows={6} 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                    data-testid="input-message"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Contact Information</h2>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <Card
                  key={index}
                  className={`p-4 md:p-6 hover-elevate ${info.action ? "cursor-pointer" : ""}`}
                  onClick={info.action ? info.action : undefined}
                  data-testid={`card-contact-${index}`}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base md:text-lg font-bold">{info.title}</h3>
                      <div className="font-medium text-sm md:text-base break-words">{info.value}</div>
                      <p className="text-xs md:text-sm opacity-80 mt-1">{info.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}

            <Card className="p-6 md:p-8 bg-primary text-white mt-6 md:mt-8" data-testid="card-urgent">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Need Immediate Assistance?</h3>
              <p className="mb-4 md:mb-6 text-sm md:text-base">For urgent matters, call us or add "URGENT" in your email subject line.</p>
              <Button
                variant="outline"
                className="border-white text-white w-full sm:w-auto"
                onClick={() => (window.location = "tel:+918087678977")}
                data-testid="button-call-now"
              >
                Call Now
              </Button>
            </Card>
           
          </div>

        </div>
      </AnimatedSection>
      <ScrollNavigation />
    </PageLayout>
  );
}

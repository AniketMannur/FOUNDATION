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
          className="cursor-pointer hover:text-primary text-sm"
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
    },
    {
      icon: Phone,
      title: "Phone",
      value: (
        <div className="flex gap-2 items-center text-sm">
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
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title="Get In Touch"
        subtitle="We'd Love to Hear From You"
        description="Have questions about our programs? Want to volunteer or donate? Reach out to us."
        tagline="Contact Us"
      />

      <AnimatedSection background="white">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 px-2 sm:px-4">

          {/* LEFT FORM */}
          <div className="order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Send us a Message
            </h2>

            <Card className="p-3 sm:p-5 md:p-7 border-2">
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm">Full Name *</Label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-sm py-2"
                      required
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Label className="text-sm">Email *</Label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-sm py-2"
                      required
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <Label className="text-sm">Phone *</Label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-sm py-2"
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* SUBJECT */}
                <div>
                  <Label className="text-sm">Subject *</Label>
                  <Input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="text-sm py-2"
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <Label className="text-sm">Message *</Label>
                  <Textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-sm"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-base py-3">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* RIGHT CONTACT INFO */}
          <div className="space-y-4 order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Contact Information</h2>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <Card
                  key={index}
                  className="p-3 sm:p-5 hover-elevate cursor-pointer"
                  onClick={info.action ? info.action : undefined}
                >
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-bold">{info.title}</h3>
                      <div className="text-sm">{info.value}</div>
                      <p className="text-xs opacity-80 mt-1">{info.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* URGENT BOX */}
            <Card className="p-5 bg-primary text-white mt-5">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="text-sm mb-4">
                For urgent matters, call us or add "URGENT" in your email subject line.
              </p>
              <Button
                variant="outline"
                className="border-white text-white w-full"
                onClick={() => (window.location = "tel:+918087678977")}
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

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import logoImage from '@assets/image_1762696322960.png';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const weWorkInSectors = [
    { label: 'Education', href: '/sectors/education' },
    { label: 'Women Empowerment', href: '/sectors/women-empowerment' },
    { label: 'Art and Culture', href: '/sectors/art-and-culture' },
    { label: 'Health', href: '/sectors/health' },
    { label: 'Community Development', href: '/sectors/community-development' },
    { label: 'Environment Conservation', href: '/sectors/environment-conservation' },
    { label: 'Skill Development', href: '/sectors/skill-development' },
    { label: 'Social Welfare', href: '/sectors/social-welfare' },
  ];

  const aboutUsItems = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Impact', href: '/impact' },
  ];

  const contactItems = [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Feedback', href: '/feedback' },
  ];

  const campaignItems = [
    { label: 'Medical Camp', href: '/campaigns/medical-camp' },
    { label: 'Road Safety Camp', href: '/campaigns/road-safety-camp' },
    { label: 'Blood Donation Camp', href: '/campaigns/blood-donation-camp' },
    { label: 'Cancer Initiative Camp', href: '/campaigns/cancer-initiative-camp' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-3 hover-elevate rounded-md px-2 py-1 cursor-pointer">
              <img src={logoImage} alt="Shree Balaji Foundation" className="h-14 w-14" />
              <div>
                <div className="font-serif font-bold text-lg md:text-xl text-foreground">
                  Shree Balaji Foundation
                </div>
                <div className="font-devanagari text-xs text-muted-foreground hidden md:block">
                  सर्वे भवन्तु सुखिनः | सर्वे सन्तु निरामयाः
                </div>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link href="/">
              <Button variant="ghost" data-testid="link-nav-home">
                Home
              </Button>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="dropdown-about-us">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      {aboutUsItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <div
                            className="block px-4 py-2 hover-elevate rounded-md text-sm cursor-pointer"
                            data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="dropdown-we-work-in">
                    We Work In
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-2 w-[400px] p-4">
                      {weWorkInSectors.map((sector) => (
                        <Link key={sector.href} href={sector.href}>
                          <div
                            className="block px-4 py-2 hover-elevate rounded-md text-sm cursor-pointer"
                            data-testid={`link-sector-${sector.label.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {sector.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/gallery">
              <Button variant="ghost" data-testid="link-nav-gallery">
                Gallery
              </Button>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="dropdown-campaign">
                    Campaign
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-56 p-2">
                      {campaignItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <div
                            className="block px-4 py-2 hover-elevate rounded-md text-sm cursor-pointer"
                            data-testid={`link-campaign-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="dropdown-contact">
                    Contact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      {contactItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <div
                            className="block px-4 py-2 hover-elevate rounded-md text-sm cursor-pointer"
                            data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/contact">
              <Button
                variant="default"
                className="ml-4"
                data-testid="button-donate"
              >
                Donate Now
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="justify-start w-full" data-testid="link-mobile-home">
                  Home
                </Button>
              </Link>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">About Us</div>
                {aboutUsItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="justify-start pl-6 w-full" data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">We Work In</div>
                {weWorkInSectors.map((sector) => (
                  <Link key={sector.href} href={sector.href} onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="justify-start pl-6 w-full" data-testid={`link-mobile-sector-${sector.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {sector.label}
                    </Button>
                  </Link>
                ))}
              </div>

              <Link href="/gallery" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="justify-start w-full" data-testid="link-mobile-gallery">
                  Gallery
                </Button>
              </Link>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">Campaign</div>
                {campaignItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="justify-start pl-6 w-full" data-testid={`link-mobile-campaign-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">Contact</div>
                {contactItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="justify-start pl-6 w-full" data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>

              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="default"
                  className="mt-2 w-full"
                  data-testid="button-mobile-donate"
                >
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

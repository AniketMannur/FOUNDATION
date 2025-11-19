import HeroCarousel from '../HeroCarousel';
import heroImage1 from '@assets/generated_images/Children_learning_in_classroom_84a7fa6d.png';
import heroImage2 from '@assets/generated_images/Healthcare_community_camp_scene_2969fea1.png';
import heroImage3 from '@assets/generated_images/Women_vocational_skills_training_dcf0cbda.png';

export default function HeroCarouselExample() {
  const slides = [
    {
      image: heroImage1,
      title: 'Empowering Through Education',
      subtitle: 'Building brighter futures for underprivileged children across communities',
      cta: 'Support Education',
    },
    {
      image: heroImage2,
      title: 'Healthcare for All',
      subtitle: 'Providing essential medical care and wellness programs to those in need',
      cta: 'Learn More',
    },
    {
      image: heroImage3,
      title: 'Skills for Tomorrow',
      subtitle: 'Empowering women and youth with vocational training and opportunities',
      cta: 'Get Involved',
    },
  ];

  return <HeroCarousel slides={slides} />;
}

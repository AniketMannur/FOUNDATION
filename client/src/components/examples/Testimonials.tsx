import Testimonials from '../Testimonials';
import avatar1 from '@assets/generated_images/Indian_woman_portrait_headshot_ee4f7908.png';
import avatar2 from '@assets/generated_images/Indian_man_portrait_headshot_93412f40.png';
import avatar3 from '@assets/generated_images/Elderly_Indian_woman_headshot_9aa8c42c.png';
import avatar4 from '@assets/generated_images/Young_Indian_woman_headshot_f118dfba.png';

export default function TestimonialsExample() {
  const testimonials = [
    {
      quote: 'The foundation helped my daughter get quality education. Today she is pursuing her dreams as a teacher. We are forever grateful.',
      author: 'Priya Sharma',
      role: 'Parent & Beneficiary',
      image: avatar1,
    },
    {
      quote: 'Through the skill training program, I learned computer skills and found a job that changed my family\'s future. Thank you for believing in us.',
      author: 'Rajesh Kumar',
      role: 'Program Graduate',
      image: avatar2,
    },
    {
      quote: 'The healthcare camp saved my life. The doctors were caring and the treatment was excellent. This foundation is a blessing to our village.',
      author: 'Kamala Devi',
      role: 'Healthcare Recipient',
      image: avatar3,
    },
    {
      quote: 'Being part of the women empowerment program gave me confidence and skills. Now I run my own tailoring business and support my family.',
      author: 'Anjali Patel',
      role: 'Entrepreneur',
      image: avatar4,
    },
  ];

  return <Testimonials testimonials={testimonials} />;
}

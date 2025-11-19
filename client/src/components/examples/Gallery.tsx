import Gallery from '../Gallery';
import img1 from '@assets/generated_images/Children_cultural_educational_event_a6c74505.png';
import img2 from '@assets/generated_images/Volunteers_community_service_distribution_aee5a7dd.png';
import img3 from '@assets/generated_images/Community_foundation_event_gathering_3567fa03.png';
import img4 from '@assets/generated_images/Students_digital_technology_lab_fa3935ac.png';
import img5 from '@assets/generated_images/Foundation_volunteers_staff_group_c2460243.png';
import img6 from '@assets/generated_images/Rural_school_building_exterior_86924dde.png';
import img7 from '@assets/generated_images/Students_collaborative_learning_education_4ac6836b.png';
import img8 from '@assets/generated_images/Healthcare_medical_checkup_scene_932d6355.png';
import img9 from '@assets/generated_images/Women_empowerment_workshop_session_f072e1f6.png';

export default function GalleryExample() {
  const images = [
    { url: img1, alt: 'Children participating in cultural educational event', category: 'Education' },
    { url: img2, alt: 'Volunteers distributing essentials to communities', category: 'Community' },
    { url: img3, alt: 'Community members at foundation event', category: 'Events' },
    { url: img4, alt: 'Students learning in digital technology lab', category: 'Education' },
    { url: img5, alt: 'Foundation volunteers and staff', category: 'Team' },
    { url: img6, alt: 'Rural school building supported by foundation', category: 'Education' },
    { url: img7, alt: 'Students engaged in collaborative learning', category: 'Education' },
    { url: img8, alt: 'Healthcare professionals providing medical care', category: 'Healthcare' },
    { url: img9, alt: 'Women empowerment workshop in progress', category: 'Empowerment' },
  ];

  return <Gallery images={images} />;
}

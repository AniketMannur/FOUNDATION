import Programs from '../Programs';
import eduImage from '@assets/generated_images/Students_collaborative_learning_education_4ac6836b.png';
import healthImage from '@assets/generated_images/Healthcare_medical_checkup_scene_932d6355.png';
import womenImage from '@assets/generated_images/Women_empowerment_workshop_session_f072e1f6.png';
import communityImage from '@assets/generated_images/Community_development_project_teamwork_58719fa2.png';
import skillImage from '@assets/generated_images/Technical_skill_training_center_a91ec481.png';
import envImage from '@assets/generated_images/Environmental_awareness_tree_planting_ff02a864.png';

export default function ProgramsExample() {
  const programs = [
    {
      title: 'Education',
      category: 'Education',
      description: 'Providing access to quality education and learning resources for underprivileged children.',
      image: eduImage,
    },
    {
      title: 'Healthcare ',
      category: 'Healthcare',
      description: 'Free medical camps and healthcare services for communities in need.',
      image: healthImage,
    },
    {
      title: 'Women Empowerment',
      category: 'Empowerment',
      description: 'Skill development and empowerment programs for women and girls.',
      image: womenImage,
    },
    {
      title: 'Community Development',
      category: 'Community',
      description: 'Building sustainable communities through infrastructure and social programs.',
      image: communityImage,
    },
    {
      title: 'Skill Development',
      category: 'Training',
      description: 'Vocational training programs to enhance employability and self-reliance.',
      image: skillImage,
    },
    {
      title: 'Environmental Initiatives',
      category: 'Environment',
      description: 'Promoting environmental awareness and sustainable practices in communities.',
      image: envImage,
    },
  ];

  return <Programs programs={programs} />;
}

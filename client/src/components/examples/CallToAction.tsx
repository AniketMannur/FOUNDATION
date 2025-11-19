import CallToAction from '../CallToAction';

export default function CallToActionExample() {
  return (
    <CallToAction
      onDonateClick={() => console.log('Donate clicked')}
      onVolunteerClick={() => console.log('Volunteer clicked')}
    />
  );
}

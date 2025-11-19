import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <Navigation
      onDonateClick={() => console.log('Donate clicked')}
    />
  );
}

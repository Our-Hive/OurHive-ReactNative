import { Nosifer_400Regular, useFonts } from '@expo-google-fonts/nosifer';
import Navigation from './src/Routes/Navigation';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Nosifer: Nosifer_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Navigation />;
}

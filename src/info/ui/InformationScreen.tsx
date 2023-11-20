import { Pressable, View } from 'react-native';
import { Colors } from '../../Constants/Colors';
import InfoButton from './components/InfoButton';
import { useState } from 'react';

export default function InformationScreen() {

  const [isPressed, setIsPressed] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);

  return (
    <View
      style={{
        backgroundColor: Colors.backgroundPage,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={({ pressed }) => [
          pressed &&
            isPressed && { backgroundColor: Colors.green, borderRadius: 10, borderWidth: 3 },
        ]}
      >
        <InfoButton
          uri1='https://assets.stickpng.com/images/5a4525f5546ddca7e1fcbc86.png'
          uri2='https://i.pinimg.com/originals/a2/dc/5c/a2dc5c3a8c443f7bce721542c2a98a2f.png'
          text='Lineas de Atención'
        />
      </Pressable>
      <Pressable
        onPressIn={() => setIsPressed2(true)}
        onPressOut={() => setIsPressed2(false)}
        style={({ pressed }) => [
          pressed &&
            isPressed2 && { backgroundColor: Colors.green, borderRadius: 10, borderWidth: 3 },
        ]}
      >
        <InfoButton
          uri1='https://cdn-icons-png.flaticon.com/512/232/232413.png'
          uri2='https://seeklogo.com/images/Y/youtube-music-logo-50422973B2-seeklogo.com.png'
          text='Contenido recomendado'
        />
      </Pressable>
    </View>
  );
}

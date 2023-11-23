import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import DiaryButton from '../components/DiaryButton';
import { Colors } from '../../../Constants/Colors';
import { useState } from 'react';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <View
      style={{
        backgroundColor: Colors.backgroundPage,
        height: '100%',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          top: 0,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 30,
        }}
      >
        <Image
          source={require('../../../../assets/bee.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Registro emocional</Text>
      </View>
      <View style={{ margin: 20 }}>
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={({ pressed }) => [
            pressed &&
              isPressed && { backgroundColor: Colors.red, borderRadius: 15 },
          ]}
          onPress={() => {
            console.log('pressed emoción trascendental');
          }}
        >
          <DiaryButton
            backgroundColor={Colors.yellow}
            outlining={Colors.red}
            title='Emoción Trascendental'
            image='1'
          />
        </Pressable>
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={({ pressed }) => [
            pressed &&
              isPressed && { backgroundColor: '#305B6F', borderRadius: 15 },
          ]}
          onPress={() => {
            console.log('Diario Emocional');
            navigation.navigate('DailyStackNavigation');
          }}
        >
          <DiaryButton
            backgroundColor='#51BDBF'
            outlining='#305B6F'
            title='Diario Emocional'
            image='2'
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF500',
    marginBottom: 10,
  },

  buttonPressed: {
    backgroundColor: Colors.red,
    borderRadius: 15,
  },
});

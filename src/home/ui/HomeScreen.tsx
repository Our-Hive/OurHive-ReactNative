import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import DiaryButton from './components/DiaryButton';
import { Colors } from '../../Constants/Colors';

export default function HomeScreen() {
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
          source={require('../../../assets/bee.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Registro emocional</Text>
      </View>
      <View style={{margin: 20}}>
        <Pressable>
          <DiaryButton
            backgroundColor={Colors.yellow}
            outlining={Colors.red}
            title='Emoción Trascendental'
            image='2'
          />
        </Pressable>
        <Pressable>
          <DiaryButton
            backgroundColor={Colors.yellow}
            outlining={Colors.redDark}
            title='Diario Emocional'
            image='1'
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
});

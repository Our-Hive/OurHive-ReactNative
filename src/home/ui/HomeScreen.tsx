import { Text, View, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ position: 'absolute', bottom: 500, right: 100, left: 100 }}>
      <View>
        <Image source={require('../../../assets/bee.png')} style={styles.image}/>
        <Text style={styles.title}>Registro emocional</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFF500',
    marginBottom: 10,
  },
});

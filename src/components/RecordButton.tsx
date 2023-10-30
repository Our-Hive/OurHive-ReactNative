import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../Constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons/';

type Props = {
  backgroundColor: string;
  color: string;
  emotionPrimary: string;
  emotionSecondary: string;
};

export default function RecordButton({
  color,
  backgroundColor,
  emotionPrimary,
  emotionSecondary,
}: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 20,
        borderWidth: 2,
        borderColor: color,
        borderRadius: 15,
        backgroundColor: backgroundColor,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: color,
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 15,
          margin: 10,
        }}
      ></View>
      <View style={styles.center}>
        <Text
          style={styles.title}
        >{`${emotionPrimary}, ${emotionSecondary}`}</Text>
        <View
          style={{
            backgroundColor: color,
            padding: 10,
            borderRadius: 20,
            margin: 10,
          }}
        >
          <Text
            style={
              color == Colors.yellowDark
                ? { color: Colors.brownDark, fontWeight: 'bold', fontSize: 18 }
                : { color: 'white', fontWeight: 'bold', fontSize: 18 }
            }
          >
            Seleccionar
          </Text>
        </View>
      </View>
      <View style={styles.infoBtn}>
        <FontAwesome5 name='info' color='white'></FontAwesome5>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoBtn: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    height: 30,
    width: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  background: {
    backgroundColor: 'black',
  },
  center: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

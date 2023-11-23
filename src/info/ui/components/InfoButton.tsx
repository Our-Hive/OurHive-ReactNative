import { Image, Text, View } from 'react-native';
import { Colors } from '../../../Constants/Colors';

type Props = {
    uri1: string;
    uri2: string;
    text: string;
};

export default function InfoButton({ uri1, uri2, text }: Props) {
  return (
    <View
      style={{
        flexDirection: 'column',
        display: 'flex',
        backgroundColor: Colors.yellow,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: Colors.green,
        margin: 10,
        padding: 10,
        width: 300,
      }}
    >
      <Text
        style={{
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 24,
        }}
      >
        {text}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: Colors.yellow,
          marginVertical: 10,
          marginHorizontal: 5,
        }}
      >
        <View>
          <Image
            style={{ height: 80, width: 80, borderRadius: 20 }}
            source={{
              uri: uri1,
            }}
          />
        </View>
        <View>
          <Image
            style={{ height: 80, width: 80, borderRadius: 20 }}
            source={{
              uri: uri2,
            }}
          />
        </View>
      </View>
    </View>
  );
}

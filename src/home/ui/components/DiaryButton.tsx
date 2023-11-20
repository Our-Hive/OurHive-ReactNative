import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, Image } from 'react-native';

const images = {
  image1: require('../../../../assets/trascendental.jpeg'),
  image2: require('../../../../assets/emociones.png'),
};

type Props = {
  backgroundColor: string;
  outlining: string;
  title: string;
  image: string;
};

export default function RecordButton({
  backgroundColor,
  outlining,
  title,
  image,
}: Props) {
  const imgReal = image === '1' ? images.image1 : images.image2;
  console.log(imgReal);
  return (
    <View
      style={{
        flexDirection: 'column',
        display: 'flex',
        backgroundColor,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: outlining,
        margin: 10,
        padding: 10,
        width: 300,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Image
            style={{ height: 120, width: 120, borderRadius: 20 }}
            source={imgReal}
          />
        </View>
        <View
          style={{
            borderColor: outlining,
            borderWidth: 2,
            borderRadius: 10,
            padding: 5,
            height: 30,
            width: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <FontAwesome5 name='info' color={outlining}></FontAwesome5>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
      </View>
    </View>
  );
}

import { View, Text, Image } from 'react-native';

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
  return (
    <View style={{borderColor: outlining, backgroundColor: backgroundColor}}>
      <Image source={require(image)} />
      <Text style={{backgroundColor: backgroundColor, borderBlockColor: outlining}}>i</Text>
      <Text>{title}</Text>
    </View>
  );
}

import { useContext } from 'react';
import { Text, View } from 'react-native';
import { DailyContext } from '../../../context/DailyContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SecondaryEmotionScreen({
  navigation,
}: {
  navigation: any;
}) {
  const { dailyData } = useContext(DailyContext);
  console.log(dailyData);
  return (
    <SafeAreaView>
      <View>
        <Text>Second Emotion</Text>
        <Text>Primary Emotion</Text>
        <Text>{dailyData.primaryEmotion}</Text>
      </View>
    </SafeAreaView>
  );
}

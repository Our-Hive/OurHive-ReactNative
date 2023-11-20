import { useContext } from 'react';
import { FlatList, Pressable, Text } from 'react-native';
import { DailyContext } from '../../../context/DailyContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Emotions,
  arrayHappy,
  arraySad,
  arrayAngry,
  arrayFear,
  arraySurprise,
  arrayDisgust,
} from '../../../Constants/Emotions';
import RecordButton from '../../../components/RecordButton';
import { evalColor } from '../../../history/data/historyServices';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function SecondaryEmotionScreen({
  navigation,
}: {
  navigation: any;
}) {
  const { setDailyData, dailyData } = useContext(DailyContext);
  let color = Colors.primary;
  let bgColor = Colors.primary;
  let arrayEmotion: string[] = [];
  switch (dailyData.primaryEmotion) {
    case Emotions.HAPPY:
      [color, bgColor] = evalColor(Emotions.HAPPY);
      arrayEmotion = arrayHappy;
      break;
    case Emotions.SAD:
      [color, bgColor] = evalColor(Emotions.SAD);
      arrayEmotion = arraySad;
      break;
    case Emotions.ANGRY:
      [color, bgColor] = evalColor(Emotions.ANGRY);
      arrayEmotion = arrayAngry;
      break;
    case Emotions.FEAR:
      [color, bgColor] = evalColor(Emotions.FEAR);
      arrayEmotion = arrayFear;
      break;
    case Emotions.SURPRISE:
      [color, bgColor] = evalColor(Emotions.SURPRISE);
      arrayEmotion = arraySurprise;
      break;
    case Emotions.DISGUST:
      [color, bgColor] = evalColor(Emotions.DISGUST);
      arrayEmotion = arrayDisgust;
      break;
    default:
      arrayEmotion = [];
      break;
  }
  console.log('DAILY DATA');
  console.log(dailyData);
  return (
    <SafeAreaView>
      {/*
        <FlatList
          data={arrayEmotion}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setDailyData({ ...dailyData, secondaryEmotion: item });
                navigation.navigate('DiaryScreen');
              }}
            >
              <RecordButton
                emotionPrimary={dailyData.primaryEmotion}
                emotionSecondary={item}
                color={color}
                backgroundColor={bgColor}
              />
            </Pressable>
          )}
        />
            */}
      <Text>HOLII</Text>
      <Text>{dailyData.primaryEmotion}</Text>
      <Text>{dailyData.secondaryEmotion}</Text>
      <Text>{dailyData.description}</Text>
    </SafeAreaView>
  );
}

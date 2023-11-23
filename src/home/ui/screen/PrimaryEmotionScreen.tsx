import { SafeAreaView, Pressable } from 'react-native';
import RecordButton from '../../../components/RecordButton';
import { Emotions } from '../../../Constants/Emotions';
import { evalColor } from '../../../history/data/historyServices';
import { Colors } from '../../../Constants/Colors';
import { useContext } from 'react';
import { DailyContext } from '../../../context/DailyContext';

export default function PrimaryEmotionScreen({
  navigation,
}: {
  navigation: any;
}) {
  const { dailyData, setDailyData } = useContext(DailyContext);

  const [happyColor, happyBGColor] = evalColor(Emotions.HAPPY);
  const [sadColor, sadBGColor] = evalColor(Emotions.SAD);
  const [angryColor, angryBGColor] = evalColor(Emotions.ANGRY);
  const [fearColor, fearBGColor] = evalColor(Emotions.FEAR);
  const [surpriseColor, surpriseBGColor] = evalColor(Emotions.SURPRISE);
  const [disgustColor, disgustBGColor] = evalColor(Emotions.DISGUST);

  console.log('PrimaryEmotionScreen');
  console.log(dailyData);

  return (
    <SafeAreaView style={{ backgroundColor: Colors.backgroundPage }}>
      <Pressable
        onPress={async () => {
          navigation.navigate('SecondaryEmotion', {
            primaryEmotion: Emotions.HAPPY,
          });
        }}
      >
        <RecordButton
          emotionPrimary={Emotions.HAPPY}
          color={happyColor}
          backgroundColor={happyBGColor}
        ></RecordButton>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('SecondaryEmotion', {
            primaryEmotion: Emotions.ANGRY,
          });
        }}
      >
        <RecordButton
          emotionPrimary={Emotions.ANGRY}
          color={angryColor}
          backgroundColor={angryBGColor}
        ></RecordButton>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('SecondaryEmotion', {
            primaryEmotion: Emotions.SAD,
          });
        }}
      >
        <RecordButton
          emotionPrimary={Emotions.SAD}
          color={sadColor}
          backgroundColor={sadBGColor}
        ></RecordButton>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('SecondaryEmotion', {
            primaryEmotion: Emotions.FEAR,
          });
        }}
      >
        <RecordButton
          emotionPrimary={Emotions.FEAR}
          color={fearColor}
          backgroundColor={fearBGColor}
        ></RecordButton>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('SecondaryEmotion', {
            primaryEmotion: Emotions.SURPRISE,
          });
        }}
      >
        <RecordButton
          emotionPrimary={Emotions.SURPRISE}
          color={surpriseColor}
          backgroundColor={surpriseBGColor}
        ></RecordButton>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('SecondaryEmotion', {
            primaryEmotion: Emotions.DISGUST,
          });
        }}
      >
        <RecordButton
          emotionPrimary={Emotions.DISGUST}
          color={disgustColor}
          backgroundColor={disgustBGColor}
        ></RecordButton>
      </Pressable>
    </SafeAreaView>
  );
}

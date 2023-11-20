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
  const { setDailyData, dailyData } = useContext(DailyContext);
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
        onPress={() => {
          setDailyData({
            primaryEmotion: Emotions.HAPPY,
            secondaryEmotion: '',
            description: '',
          });
          navigation.navigate('SecondaryEmotion');
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
          setDailyData({
            primaryEmotion: Emotions.ANGRY,
            secondaryEmotion: '',
            description: '',
          });
          navigation.navigate('SecondaryEmotion');
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
          setDailyData({
            primaryEmotion: Emotions.SAD,
            secondaryEmotion: '',
            description: '',
          });
          navigation.navigate('SecondaryEmotion');
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
          setDailyData({
            primaryEmotion: Emotions.FEAR,
            secondaryEmotion: '',
            description: '',
          });
          navigation.navigate('SecondaryEmotion');
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
          setDailyData({
            primaryEmotion: Emotions.SURPRISE,
            secondaryEmotion: '',
            description: '',
          });
          navigation.navigate('SecondaryEmotion');
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
          setDailyData({
            primaryEmotion: Emotions.DISGUST,
            secondaryEmotion: '',
            description: '',
          });
          navigation.navigate('SecondaryEmotion');
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

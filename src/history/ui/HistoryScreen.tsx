import { View, Pressable } from 'react-native';
import { Colors } from '../../Constants/Colors';
import RecordButton from '../../components/RecordButton';
// todo: organize in list
export default function HistoryScreen() {
  return (
    <View style={{ backgroundColor: Colors.backgroundPage, height: '100%' }}>
      <Pressable>
        <RecordButton
          emotionPrimary='Ira'
          emotionSecondary='Celos'
          color={Colors.red}
          backgroundColor={Colors.redDark}
        />
      </Pressable>
      <Pressable>
        <RecordButton
          emotionPrimary='Tristeza'
          emotionSecondary='Soledad'
          color={Colors.blue}
          backgroundColor={Colors.blueDark2}
        />
      </Pressable>
      <Pressable>
        <RecordButton
          emotionPrimary='Felicidad'
          emotionSecondary='Poder'
          color={Colors.yellowDark}
          backgroundColor={Colors.brownDark}
        />
      </Pressable>
      <Pressable>
        <RecordButton
          emotionPrimary='Sorpresa'
          emotionSecondary='Efusivo'
          color={Colors.purple}
          backgroundColor={Colors.prupleDark}
        />
      </Pressable>
      <Pressable>
        <RecordButton
          emotionPrimary='Asco'
          emotionSecondary='Desprecio'
          color={Colors.green}
          backgroundColor={Colors.greenDark}
        />
      </Pressable>
      <Pressable>
        <RecordButton
          emotionPrimary='Felicidad'
          emotionSecondary='Poder'
          color={Colors.yellowDark}
          backgroundColor={Colors.brownDark}
        />
      </Pressable>
    </View>
  );
}

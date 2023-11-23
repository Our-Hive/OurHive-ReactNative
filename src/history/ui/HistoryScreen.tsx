import { View, Pressable, FlatList } from 'react-native';
import { Colors } from '../../Constants/Colors';
import RecordButton from '../../components/RecordButton';
import { evalColor, getHistory } from '../data/historyServices';
import { useEffect, useState } from 'react';
import { DailyRecord, transcendentalRecord } from '../domain/DailyRecord';
import { Emotions } from '../../Constants/Emotions';

export default function HistoryScreen() {
  const [records, setRecords] = useState<
    Array<DailyRecord | transcendentalRecord>
  >([]);
  useEffect(() => {
    const getRecords = async () => {
      const data = await getHistory();
      setRecords(data);
    };
    getRecords();
  }, []);

  return records ? (
    <View style={{ backgroundColor: Colors.backgroundPage, height: '100%' }}>
      <FlatList
        data={records}
        renderItem={({ item }) => {
          const [color, backgroundColor] = evalColor(
            item.primaryEmotion as Emotions
          );
          return (
            <Pressable>
              <RecordButton
                emotionPrimary={item.primaryEmotion}
                emotionSecondary={item.secondaryEmotion}
                color={color}
                backgroundColor={backgroundColor}
              />
            </Pressable>
          );
        }}
      ></FlatList>
    </View>
  ) : null;
}

import { Colors } from '../../Constants/Colors';
import { Emotions } from '../../Constants/Emotions';
import { getToken } from '../../auth/data/tokenService';

export const getHistory = async () => {
  const token = await getToken();
  try {
    const response = await fetch('http://localhost:3000/emotional-record', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('response');
    console.log(response);

    if (!response.ok) {
      throw new Error('Error fetching history');
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const evalColor = (emotion: Emotions): Array<string> => {
  switch (emotion) {
  case Emotions.ANGRY:
    return [Colors.red, Colors.redDark];
  case Emotions.SAD:
    return [Colors.blue, Colors.blueDark2];
  case Emotions.HAPPY:
    return [Colors.yellow, Colors.brownDark];
  case Emotions.FEAR:
    return [Colors.purple, Colors.purpleDark];
  case Emotions.SURPRISE:
    return [Colors.pink, Colors.pinkDark];
  case Emotions.DISGUST:
    return [Colors.green, Colors.greenDark];
  default:
    return ['#000000', '#FFFFFF'];
  }
};

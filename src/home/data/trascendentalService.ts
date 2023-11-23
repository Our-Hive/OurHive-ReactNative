import { Emotions } from '../../Constants/Emotions';
import { getToken } from '../../auth/data/tokenService';

type Transcendental = {
  primaryEmotion: Emotions;
  secondaryEmotion: string;
  description: string;
  location: string;
  activity: string;
  companion: string;
};

export const createTranscendental = async ({
  primaryEmotion,
  secondaryEmotion,
  description,
  location,
  activity,
  companion,
}: Transcendental) => {
  const token = await getToken();
  try {
    const response = await fetch(
      'http://localhost:3000/emotional-record/transcendental',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          primaryEmotion,
          secondaryEmotion,
          description,
          location,
          activity,
          companion,
        }),
      }
    );
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

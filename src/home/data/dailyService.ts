import { Emotions } from '../../Constants/Emotions';
import { getToken } from '../../auth/data/tokenService';

type Daily = {
  primaryEmotion: string | Emotions;
  secondaryEmotion: string;
  title: string;
  description: string;
};

export const createDaily = async ({
  primaryEmotion,
  secondaryEmotion,
  title,
  description,
}: Daily) => {
  const token = await getToken();
  try {
    const response = await fetch(
      'http://localhost:3000/emotional-record/daily',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          primaryEmotion,
          secondaryEmotion,
          title,
          description,
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

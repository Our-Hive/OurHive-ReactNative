export type typeRecord = 'daily' | 'transcendental';

export type DailyRecord = {
  id: number;
  primaryEmotion: string;
  secondaryEmotion: string;
  title: string;
  description: number;
  create_at: string;
  updated_at: string;
  type: 'DailyRecord';
};

export type transcendentalRecord = {
  id: number;
  primaryEmotion: string;
  secondaryEmotion: string;
  title: string;
  description: string;
  location: string;
  activity: string;
  companion: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  type: 'xd';
};

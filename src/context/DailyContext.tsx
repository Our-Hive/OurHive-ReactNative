import { createContext, useState } from 'react';
type Props = {
  children: React.ReactNode;
};
type DailyData = {
  primaryEmotion: string;
  secondaryEmotion: string;
  description: string;
};

type IDailyContextProps = {
  dailyData: DailyData;
  setDailyData: (newState: DailyData) => void;
};

const initialDaily: IDailyContextProps = {
  dailyData: {
    primaryEmotion: '',
    secondaryEmotion: '',
    description: '',
  },
  setDailyData: () => {},
};

export const DailyContext = createContext<IDailyContextProps>(initialDaily);

export function DailyProvider({ children }: Props) {
  const [dailyData, setDailyData] = useState(initialDaily.dailyData);
  console.log('context');
  console.log(dailyData);
  return (
    <DailyContext.Provider value={{ dailyData, setDailyData }}>
      {children}
    </DailyContext.Provider>
  );
}

import { Frequency } from "../frequency/Frequency";
import { User } from "../user/User";

export type Reminder = {
  amount: number | null;
  createdAt: Date;
  details: string | null;
  frequency?: Frequency | null;
  id: string;
  isDone: boolean | null;
  updatedAt: Date;
  user?: User | null;
};

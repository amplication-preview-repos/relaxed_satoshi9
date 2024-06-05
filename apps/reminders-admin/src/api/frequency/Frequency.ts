import { Reminder } from "../reminder/Reminder";

export type Frequency = {
  createdAt: Date;
  days: number | null;
  id: string;
  label: string | null;
  reminders?: Array<Reminder>;
  updatedAt: Date;
};

import { Reminder } from "../reminder/Reminder";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  reminders?: Array<Reminder>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

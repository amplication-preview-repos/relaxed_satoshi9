import { ReminderUpdateManyWithoutUsersInput } from "./ReminderUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  reminders?: ReminderUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};

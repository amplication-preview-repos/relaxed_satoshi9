import { ReminderCreateNestedManyWithoutUsersInput } from "./ReminderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  reminders?: ReminderCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};

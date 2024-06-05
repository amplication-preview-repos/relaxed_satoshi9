import { FrequencyWhereUniqueInput } from "../frequency/FrequencyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReminderUpdateInput = {
  amount?: number | null;
  details?: string | null;
  frequency?: FrequencyWhereUniqueInput | null;
  isDone?: boolean | null;
  user?: UserWhereUniqueInput | null;
};

import { ReminderUpdateManyWithoutFrequenciesInput } from "./ReminderUpdateManyWithoutFrequenciesInput";

export type FrequencyUpdateInput = {
  days?: number | null;
  label?: string | null;
  reminders?: ReminderUpdateManyWithoutFrequenciesInput;
};

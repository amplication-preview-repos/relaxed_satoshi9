import { ReminderCreateNestedManyWithoutFrequenciesInput } from "./ReminderCreateNestedManyWithoutFrequenciesInput";

export type FrequencyCreateInput = {
  days?: number | null;
  label?: string | null;
  reminders?: ReminderCreateNestedManyWithoutFrequenciesInput;
};

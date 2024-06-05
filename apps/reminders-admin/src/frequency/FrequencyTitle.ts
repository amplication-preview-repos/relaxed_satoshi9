import { Frequency as TFrequency } from "../api/frequency/Frequency";

export const FREQUENCY_TITLE_FIELD = "label";

export const FrequencyTitle = (record: TFrequency): string => {
  return record.label?.toString() || String(record.id);
};

import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReminderListRelationFilter } from "../reminder/ReminderListRelationFilter";

export type FrequencyWhereInput = {
  days?: IntNullableFilter;
  id?: StringFilter;
  label?: StringNullableFilter;
  reminders?: ReminderListRelationFilter;
};

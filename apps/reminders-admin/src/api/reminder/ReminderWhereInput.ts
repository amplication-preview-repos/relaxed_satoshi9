import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FrequencyWhereUniqueInput } from "../frequency/FrequencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReminderWhereInput = {
  amount?: FloatNullableFilter;
  details?: StringNullableFilter;
  frequency?: FrequencyWhereUniqueInput;
  id?: StringFilter;
  isDone?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};

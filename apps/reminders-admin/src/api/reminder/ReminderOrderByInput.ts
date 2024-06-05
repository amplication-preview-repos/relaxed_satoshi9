import { SortOrder } from "../../util/SortOrder";

export type ReminderOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  details?: SortOrder;
  frequencyId?: SortOrder;
  id?: SortOrder;
  isDone?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

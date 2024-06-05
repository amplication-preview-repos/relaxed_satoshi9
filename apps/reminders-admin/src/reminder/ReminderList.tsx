import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { FREQUENCY_TITLE_FIELD } from "../frequency/FrequencyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ReminderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reminders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="details" source="details" />
        <ReferenceField
          label="Frequency"
          source="frequency.id"
          reference="Frequency"
        >
          <TextField source={FREQUENCY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="isDone" source="isDone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

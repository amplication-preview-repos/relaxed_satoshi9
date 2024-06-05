import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { FrequencyTitle } from "../frequency/FrequencyTitle";
import { UserTitle } from "../user/UserTitle";

export const ReminderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="details" multiline source="details" />
        <ReferenceInput
          source="frequency.id"
          reference="Frequency"
          label="Frequency"
        >
          <SelectInput optionText={FrequencyTitle} />
        </ReferenceInput>
        <BooleanInput label="isDone" source="isDone" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

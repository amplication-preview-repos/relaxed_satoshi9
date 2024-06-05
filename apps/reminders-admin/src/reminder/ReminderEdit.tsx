import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { FrequencyTitle } from "../frequency/FrequencyTitle";
import { UserTitle } from "../user/UserTitle";

export const ReminderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

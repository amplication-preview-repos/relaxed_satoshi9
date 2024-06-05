import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ReminderTitle } from "../reminder/ReminderTitle";

export const FrequencyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="days" source="days" />
        <TextInput label="label" source="label" />
        <ReferenceArrayInput
          source="reminders"
          reference="Reminder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReminderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

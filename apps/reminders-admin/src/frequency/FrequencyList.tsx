import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FrequencyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Frequencies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="days" source="days" />
        <TextField label="ID" source="id" />
        <TextField label="label" source="label" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReminderList } from "./reminder/ReminderList";
import { ReminderCreate } from "./reminder/ReminderCreate";
import { ReminderEdit } from "./reminder/ReminderEdit";
import { ReminderShow } from "./reminder/ReminderShow";
import { FrequencyList } from "./frequency/FrequencyList";
import { FrequencyCreate } from "./frequency/FrequencyCreate";
import { FrequencyEdit } from "./frequency/FrequencyEdit";
import { FrequencyShow } from "./frequency/FrequencyShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Reminders"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Reminder"
          list={ReminderList}
          edit={ReminderEdit}
          create={ReminderCreate}
          show={ReminderShow}
        />
        <Resource
          name="Frequency"
          list={FrequencyList}
          edit={FrequencyEdit}
          create={FrequencyCreate}
          show={FrequencyShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

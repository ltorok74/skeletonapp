import React from "react";
import "../styles/app.css";
import AddPersonContainer from "../containers/AddPerson";
import ListContainer from "../containers/List";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Skeleton app</h1>
        <AddPersonContainer />
        <ListContainer />
      </div>
    );
  }
}

export default App;

import React, { Fragment } from "react";
import Context from "./context";
import Provider from "./provider";

const AgentOne = () => {
  return <Agents />;
};

const Agents = () => {
  return (
    <Context.Consumer>
      {(context) => {
        return (
          <Fragment>
            <h3>Agent Information</h3>
            <p>Mission Name: {context.data.missionName}</p>
            <h2>Mission Status: {context.data.accepted}</h2>
            <button onClick={context.isAccepted}>Choose to accept</button>
          </Fragment>
        );
      }}
    </Context.Consumer>
  );
};
const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <h1>Props.Children</h1>
        <AgentOne />
        <h1>Props.Children</h1>
      </Provider>
    </div>
  );
};

export default App;

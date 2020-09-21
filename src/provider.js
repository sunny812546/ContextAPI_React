import React, { useState } from "react";
import Context from "./context";

const Provider = (props) => {
  const [mission, setMission] = useState({
    missionName: "SecretFriends",
    accepted: "0",
  });
  return (
    <Context.Provider
      value={{
        data: mission,
        isAccepted: () => {
          setMission({ ...mission, accepted: "1" });
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;

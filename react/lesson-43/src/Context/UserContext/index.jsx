import { createContext } from "react";

export const UserContext = createContext({});
let data = {
  name: "Ramin",
  surname: "Mammadzada",
  username: "TheCodeFather",
  image: "https://storage.prompt-hunt.workers.dev/clfr83lj40008l308rvjmfo5v_1",
};

export const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

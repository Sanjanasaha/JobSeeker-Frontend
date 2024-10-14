import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({
  isAuthorized: false,
});
const AppWrapper = () => {
  // const Context = createContext({
  //   isAuthorized: false,
  // });
  
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

// Make sure to only call createRoot once for the #root element
const container = document.getElementById("root");
if (!container.__rootInitialized) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  );
  container.__rootInitialized = true; // Mark the root as initialized
}

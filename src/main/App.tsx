import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useCurrentUser from "../hooks/useCurrentUser";
import Header from "./Header";

function App() {
  const user = useCurrentUser();

  return (
    <div className="App">
      <Header currentUser={user} />
    </div>
  );
}

export default App;

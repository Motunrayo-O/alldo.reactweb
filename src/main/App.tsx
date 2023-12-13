import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useCurrentUser from "../hooks/useCurrentUser";
import Header from "./Header";
import Container from "../components/Container";

function App() {
  const user = useCurrentUser();

  return (
    <div className="App">
      <Header currentUser={user} />
      <Container />
    </div>
  );
}

export default App;

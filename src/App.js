import React from "react";
import "./index.css";
import FullName from "./Component/Profilee/FullName";
import ProfilePhoto from "./Component/Profilee/ProfilePhoto";
import Addressee from "./Component/Profilee/adresse";
import Navb from "./Component/Navb";
function App() {
  return (
    <div className="App">
      <Navb />
      <FullName />
      <ProfilePhoto />
      <Addressee />
    </div>
  );
}

export default App;

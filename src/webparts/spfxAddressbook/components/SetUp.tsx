import * as React from "react";
import { useState } from "react";
import { IStatesObj } from "../../../Models/Models";
import { HeaderComponent } from "./Header/Header";
import { MainSection } from "./MainSection/MainSection";

function SetUp() {
  const [statesObj, setStatesObj] = useState<IStatesObj>({
    showForm: false,
    showDisplayDetails: false,
    selectedContactId: "",
    formAction: "add",
  });
  return (
    <div className="SetUp">
      <HeaderComponent
        statesObj={statesObj}
        setStatesObj={setStatesObj}
      ></HeaderComponent>
      <MainSection
        statesObj={statesObj}
        setStatesObj={setStatesObj}
      ></MainSection>
    </div>
  );
}

export default SetUp;
